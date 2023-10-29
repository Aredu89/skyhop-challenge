import styled from 'styled-components';
import { LIGHT_GRAY, MEDIUM_GRAY, DARK_GRAY } from '../../styles/variables';

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 12px;
  border-top: 1px solid ${LIGHT_GRAY};
  border-bottom: 1px solid ${LIGHT_GRAY};
  color: ${MEDIUM_GRAY};
  font-size: 12px;
  font-weight: 600;
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  width: 100%;
  margin-left: 10px;
`;

export const Name = styled.span`
  grid-column: 1 / 2;
  align-self: end;
`;

export const Size = styled.span`
  grid-column: 2 / 3;
  justify-self: end;
  align-self: end;
  color: ${DARK_GRAY};
  font-size: 9px;
  font-weight: 800;
`;

export const LoadingBarContainer = styled.span`
  grid-column: 1 / 3;
  margin-top: 6px;
`;