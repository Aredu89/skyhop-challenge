import styled, { css } from 'styled-components';
import { PRIMARY_COLOR } from '../../styles/variables';

const closeStyles = css`
  font-size: 20px;
  padding: 4px 8px;
  border-radius: 8px;
`;

const standardStyles = css`
  font-size: 12px;
  font-weight: 600;
  padding: 6px 34px;
  border-radius: 4px;
`;

export const StyledButton = styled.button`
  background-color: ${PRIMARY_COLOR};
  font-family: inherit;
  color: white;
  border: none;
  appearance: none;
  &:hover {
    cursor: pointer;
    opacity: .9;
  }
  ${({ $close }) => $close ? closeStyles : standardStyles}
`;