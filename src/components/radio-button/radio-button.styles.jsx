import styled from 'styled-components';
import { PRIMARY_COLOR, DARK_GRAY } from '../../styles/variables';

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  gap: 10px;
`;

export const Label = styled.label`
  &:before {
    content: '';
    background: transparent;
    border-radius: 100%;
    border: 1.5px solid ${DARK_GRAY};
    display: inline-block;
    width: 16px;
    height: 16px;
    position: relative;
    top: -0.2em;
    margin-right: 6px;; 
    vertical-align: top;
    cursor: pointer;
    text-align: center;
    transition: all 250ms ease;
  }
`;

export const Radio = styled.div`
  & input[type='radio'] {
    position: absolute;
    opacity: 0;
    &:checked {
      + ${Label} {
        &:before {
          background-color: ${PRIMARY_COLOR};
          border: 1.5px solid ${PRIMARY_COLOR};
          box-shadow: inset 0 0 0 3px white;
        }
      }
    }
    &:focus {
      + ${Label} {
        outline: none;
        border-color: ${PRIMARY_COLOR};
      }
    }
  }
`;