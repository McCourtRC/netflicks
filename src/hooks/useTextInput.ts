import { ChangeEventHandler, useState } from 'react';

const useTextInput = (
  initialValue = ''
): [
  value: string,
  onChangeValue: ChangeEventHandler,
  resetValue: () => void
] => {
  const [value, setValue] = useState(initialValue);

  const onChangeValue: ChangeEventHandler<HTMLInputElement> = (e) =>
    setValue(e.target.value);

  const resetValue = () => setValue(initialValue);

  return [value, onChangeValue, resetValue];
};

export default useTextInput;
