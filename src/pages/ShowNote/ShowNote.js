import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Project, Words, Row, Button } from 'arwes';

import { HiddenInput } from './ShowNote.styles';
import NotesService from '../../services/notes';

const ShowNote = () => {
  const { slug } = useParams();
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');
  const [inputFile, setInputFile] = useState('');
  const [publicKey, setPublicKey] = useState('');

  useEffect(() => {
    setInputFile(document.getElementById("input-file"));
    setPublicKey(localStorage.getItem('key'));
    loadNote();
  }, []);

  const loadNote = async() => {
    const response = await NotesService.show(slug);

    if (response.status === 200) {
      setTitle(response.data.title);
      setBody(response.data.body);
    }
  };

  const handleUpload = () => {
    inputFile.click();
  };

  const addPublicKey = async(e) => {
    e.preventDefault()
    const reader = new FileReader();

    reader.onload = async (e) => { 
      const text = (e.target.result);
      
      if (text !== '' && text !== null) {
        localStorage.setItem('key', text);
        setPublicKey(localStorage.getItem('key'));
      }
    };

    reader.readAsText(e.target.files[0]);
  }

  const handleCopy = () => {
    const publicKeyField = document.getElementById('input-public-key');
    publicKeyField.select();
    publicKeyField.setSelectionRange(0, 99999)
    document.execCommand('copy');
  };

  const cleanKey = () => {
    localStorage.removeItem('key');
    setPublicKey(localStorage.getItem('key'));
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
        <HiddenInput type="file" id="input-file" onChange={e => addPublicKey(e)} />
        <textarea type="text" id="input-public-key" value={publicKey} style={{opacity: 0}} />

        <br />
        { publicKey === '' || publicKey === null ? (
          <Button animate onClick={() => handleUpload()}>Upload Public Key</Button>
        ) : (
          <>
            <Button animate onClick={e => handleCopy()} style={{ marginRight: 20 }}>Export Public Key to Clipboard</Button>
            <Button animate layer='alert' onClick={() => cleanKey() }>Delete Public Key</Button>
          </>
        ) } 
      </Row>
    </>
  );
}

export default ShowNote;
