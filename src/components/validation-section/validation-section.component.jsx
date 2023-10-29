import React from 'react';
import SeparationLine from '../separation-line/separation-line.component';
import SubTitle from '../sub-title/sub-title.component';
import { ValidationContainer, SuccessMessage } from './validation-section.styles';

const ValidationSection = ({title, message, ready}) => (
  <>
    <SeparationLine marginTop={14} />
    <ValidationContainer>
      <SubTitle marginBottom={8}>{title}</SubTitle>
      <SuccessMessage $ready={ready}>{ready ? message : 'Pending...'}</SuccessMessage>
    </ValidationContainer>
    <SeparationLine />
  </>
);

export default ValidationSection;