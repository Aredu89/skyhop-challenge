import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../styles/variables';

export const StyledButton = styled.button`
  background-color: ${PRIMARY_COLOR};
  font-size: 20px;
  padding: 4px 8px;
  border-radius: 8px;
  color: white;
  border: none;
  appearance: none;
  &:hover {
    cursor: pointer;
  }
`;