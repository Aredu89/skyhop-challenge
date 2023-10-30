import styled, { css } from 'styled-components';
import { PRIMARY_COLOR, SECONDARY_COLOR, MEDIUM_GRAY } from '../../styles/variables';

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

const bigStyles = css`
  width: 190px;
  height: 38px;
  font-size: 11px;
  font-weight: 600;
  border-radius: 6px;
`;

const bigRevertedStyles = css`
  border: 2px solid ${SECONDARY_COLOR};
  background-color: transparent;
  color: ${SECONDARY_COLOR};
  ${bigStyles}

  &:hover {
    color: white;
    background-color: ${SECONDARY_COLOR};
  }
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
  &:disabled {
    background-color: ${MEDIUM_GRAY};
    &:hover {
      cursor: auto;
      opacity: 1;
    }
  }
  ${({ $type }) => {
    if($type === 'close') {
      return closeStyles
    }
    if($type === 'big') {
      return bigStyles
    }
    if($type === 'bigReverted') {
      return bigRevertedStyles
    }
    return standardStyles
  }}
`;