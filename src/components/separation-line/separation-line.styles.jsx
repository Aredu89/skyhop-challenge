import styled from 'styled-components';
import { BORDER_COLOR } from '../../styles/variables';

export const SeparationDiv = styled.div`
  width: 230px;
  border-bottom: 1px solid ${BORDER_COLOR};
  margin-top: ${({ marginTop }) => `${marginTop}px`};
`;