import styled from 'styled-components';
import { BORDER_COLOR } from '../../styles/variables';
import { SeparationDivProps } from './separation-line.types';

export const SeparationDiv = styled.div<SeparationDivProps>`
  width: 230px;
  border-bottom: 1px solid ${BORDER_COLOR};
  margin-top: ${({ $marginTop }) => `${$marginTop}px`};
`;