import styled from 'styled-components';
import { SUCCESS_COLOR, MEDIUM_GRAY } from '../../styles/variables';
import { SuccessMessageProps } from './validation-section.types';

export const ValidationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 11px;
`;

export const SuccessMessage = styled.span<SuccessMessageProps>`
  color: ${({$ready}) => $ready ? SUCCESS_COLOR : MEDIUM_GRAY};
  font-size: 11px;
  font-weight: 800;
`;