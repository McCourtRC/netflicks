import styled from '@emotion/styled';
import { Color } from 'types/theme';

const Submit = styled.input`
  border: none;
  border-radius: 5px;
  padding: 1rem;
  color: white;
  font-weight: bold;
  background-color: ${Color.secondary};
  cursor: pointer;
`;

export default Submit;
