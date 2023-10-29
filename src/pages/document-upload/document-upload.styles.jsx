import styled from 'styled-components';
import { BACKGROUND_COLOR, PRIMARY_COLOR, BORDER_COLOR } from '../../styles/variables';

export const DocumentUploadContainer = styled.div`
  background-color: ${BACKGROUND_COLOR};
`;

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 56% 1fr;
  grid-template-rows: auto 1fr auto;
  column-gap: 50px;
  width: 720px;
  color: ${PRIMARY_COLOR}
`;

export const TitleContainer = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 1;
  display: flex;
  justify-content: center;
  margin-bottom: 34px;
`;

export const Title = styled.h2`
  margin: 0;
  padding-bottom: 14px;
  border-bottom: 1px solid ${BORDER_COLOR};
  display: flex;
  justify-content: center;
  font-size: 26px;
`;

export const LeftSection = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;

export const RightSection = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;

export const ContinueSection = styled.div`
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  display: flex;
  justify-content: center;
  padding: 34px;
`;