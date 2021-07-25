import React, { useState } from 'react';
import { Words } from 'arwes';
import { Redirect } from 'react-router-dom';

import { SubmitButton } from './CreateNote.styles';

import encrypt from '../../components/utils/encrypt';
import TextArea from '../../components/TextArea/TextArea';
import Input from '../../components/Input/Input';

const CreateNote = () => {
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [redirect, setRedirect] = useState(false);

  const createNote = (e) => {
    e.preventDefault();

    // TODO: connect with api
    console.log({ body: body, title: title })
    setSlug('safe')
    //setRedirect(true)
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
          <Input onChange={(e) => { setTitle(e.target.value) }} value={title} />

          <SubmitButton animate layer='success' type='submit'>
            Save
          </SubmitButton>
        </form>
      ) }
    </>
  );
}

export default CreateNote;
