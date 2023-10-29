import styled from 'styled-components';
import { SUCCESS_COLOR } from '../../styles/variables';

export const ValidationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 12px;
`;

export const SuccessMessage = styled.span`
  color: ${SUCCESS_COLOR};
  font-size: 11px;
  font-weight: 800;
`;