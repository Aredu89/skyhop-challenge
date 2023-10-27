import styled from 'styled-components';
import { PRIMARY_COLOR, BORDER_COLOR } from '../../styles/variables';

export const SelectContainer = styled.div``;

export const StyledSelect = styled.select`
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  font-size: 11px;
  font-family: inherit;
  font-weight: 800;
  padding: 8px 10px;
  color: ${PRIMARY_COLOR};
  border-radius: 8px;
  border: 1.5px solid ${BORDER_COLOR};
  background-image: url(/collapse-arrow.png);
  background-repeat: no-repeat;
  background-position: right 0.7rem top 50%;
  background-size: 12px auto;
  &:hover {
    cursor: pointer;
  }
  &:focus,
  &:focus-visible {
    outline: none;
  }
`;