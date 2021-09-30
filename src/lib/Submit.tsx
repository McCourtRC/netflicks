import styled from '@emotion/styled';
import { Color } from 'types/theme';

const Submit = styled.input`
  border: none;
  border-radius: 5px;
  padding: 1rem;
  color: ${Color.white};
  font-weight: bold;
  background-color: ${Color.primary};
  cursor: pointer;
`;

export default Submit;
