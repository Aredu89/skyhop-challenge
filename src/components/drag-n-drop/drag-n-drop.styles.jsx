import styled from 'styled-components';
import { BORDER_COLOR } from '../../styles/variables';

export const Title = styled.h4`
  margin: 14px 0 10px;
  font-size: 11px;
  font-weight: 800;
`;

export const DropzoneContainer = styled.div`
  width: 92.5%;
  border: 1.5px solid ${BORDER_COLOR};
  border-radius: 8px;
  padding: 13px;
`;

export const DropzoneBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1.5px dashed ${BORDER_COLOR};
  border-radius: 4px;
  padding: 20px 30px 15px;
  font-size: 12px;
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;