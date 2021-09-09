import { FormEventHandler } from 'react';

const useHandleSubmit = (handler: () => void) => {
  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    handler();
  };

  return onSubmit;
};

export default useHandleSubmit;
