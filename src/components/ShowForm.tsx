import React, { FormEvent, FormEventHandler } from 'react';
import useHandleSubmit from 'hooks/useHandleSubmit';
import useTextInput from 'hooks/useTextInput';
import styled from '@emotion/styled';
import { BoxShadow, Color } from 'types/theme';

const Container = styled.div`
  flex: 1;
`;

const Input = styled.input`
  display: block;
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: large;
  border: none;
  border-radius: 5px;
  width: 50%;
`;

const Submit = styled.input`
  border: none;
  border-radius: 5px;
  padding: 1rem;
  color: white;
  font-weight: bold;
  background-color: ${Color.secondary};
`;

const ShowForm = () => {
  const [title, onChangeTitle, resetTitle] = useTextInput();
  const [img, onChangeImg, resetImg] = useTextInput();
  const handleSubmit = useHandleSubmit(() => {
    console.log('HELLO');
    // submit mutation
    resetTitle();
    resetImg();
  });

  return (
    <Container>
      <h1>New Show</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          value={title}
          placeholder='Title'
          onChange={onChangeTitle}
        />
        <Input
          type='text'
          value={img}
          placeholder='Image Url'
          onChange={onChangeImg}
        />
        <Submit type='submit' />
      </form>
    </Container>
  );
};

export default ShowForm;
