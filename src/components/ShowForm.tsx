import React, { FormEvent, FormEventHandler } from 'react';
import useHandleSubmit from 'hooks/useHandleSubmit';
import useTextInput from 'hooks/useTextInput';
import styled from '@emotion/styled';
import Input from 'lib/Input';
import Submit from 'lib/Submit';

const Container = styled.div`
  flex: 1;
`;

const ShowForm = () => {
  const [title, onChangeTitle, resetTitle] = useTextInput();
  const [img, onChangeImg, resetImg] = useTextInput();
  const handleSubmit = useHandleSubmit(() => {
    console.log('Createing New Show', title, img);
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
