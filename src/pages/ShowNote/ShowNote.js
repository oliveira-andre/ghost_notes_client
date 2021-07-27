import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Project, Words, Row, Button } from 'arwes';

import { HiddenInput } from './ShowNote.styles';
import NotesService from '../../services/notes';

import decrypt from '../../components/utils/decrypt';

const ShowNote = () => {
  const { slug } = useParams();
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');
  const [inputFile, setInputFile] = useState('');
  const [privateKey, setPrivateKey] = useState('');

  useEffect(() => {
    setInputFile(document.getElementById("input-file"));
    setPrivateKey(localStorage.getItem('key'));
    loadNote();
  }, []);

  const loadNote = async() => {
    const response = await NotesService.show(slug);

    if (response.status === 200) {
      setTitle(response.data.title);
      setBody(response.data.body);

      decrypt(body, setBody);
    }
  };

  const handleUpload = () => {
    inputFile.click();
  };

  const addPrivateKey = async(e) => {
    e.preventDefault()
    const reader = new FileReader();

    reader.onload = async (e) => { 
      const text = (e.target.result);
      
      if (text !== '' && text !== null) {
        localStorage.setItem('key', text);
        setPrivateKey(localStorage.getItem('key'));
      }
    };

    reader.readAsText(e.target.files[0]);
  }

  const handleCopy = () => {
    const privateKeyField = document.getElementById('input-public-key');
    privateKeyField.select();
    privateKeyField.setSelectionRange(0, 99999)
    document.execCommand('copy');
  };

  const cleanKey = () => {
    localStorage.removeItem('key');
    setPrivateKey(localStorage.getItem('key'));
  };

  return(
    <>
      <Project
        animate
        header={title}
      >
        {anim => (
          <p><Words animate show={anim.entered}>
            { body }
          </Words></p>
        )}
      </Project>

      <Row col s={6} m={4} offset={['s3', 'm4']} style={{ textAlign: 'center' }}>
        <HiddenInput type="file" id="input-file" onChange={e => addPrivateKey(e)} />
        <textarea type="text" id="input-public-key" value={privateKey} onChange={() => {}} style={{opacity: 0}} />

        <br />
        { privateKey === '' || privateKey === null ? (
          <Button animate onClick={() => handleUpload()}>Upload Private Key</Button>
        ) : (
          <>
            <Button animate onClick={e => handleCopy()} style={{ marginRight: 20 }}>Export Private Key to Clipboard</Button>
            <Button animate layer='alert' onClick={() => cleanKey() }>Delete Private Key</Button>
          </>
        ) } 
      </Row>
    </>
  );
}

export default ShowNote;
