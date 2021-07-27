import React, { useState } from 'react';
import { Words } from 'arwes';
import { Redirect } from 'react-router-dom';

import { SubmitButton } from './CreateNote.styles';
import NotesService from '../../services/notes';

import encrypt from '../../components/utils/encrypt';
import TextArea from '../../components/TextArea/TextArea';
import Input from '../../components/Input/Input';

const CreateNote = () => {
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const createNote = async (e) => {
    e.preventDefault();

    let params;

    if (password === '' || password === null) {
      params = { body: body, title: title };
    } else {
      params = { body: body, title: title, password: password };
    }

    const response = await NotesService.create(params);

    if (response.status === 201) {
      setSlug(response.data.slug);
      setRedirect(true);
    }
  }

  return(
    <>
      { redirect ? (<Redirect to={`/notes/${slug}`} />) : (
        <form onSubmit={createNote}>
          <label><Words animate>New Paste</Words></label>
          <TextArea onChange={(e) => { encrypt(e.target.value, setBody) }} value={body} />

          <label><Words animate>Title</Words></label>
          <Input onChange={(e) => { setTitle(e.target.value) }} value={title} />

          <label><Words animate>Password</Words></label>
          <Input onChange={(e) => { setPassword(e.target.value) }} value={password} />

          <SubmitButton animate layer='success' type='submit'>
            Save
          </SubmitButton>
        </form>
      ) }
    </>
  );
}

export default CreateNote;
