import React from 'react';
import SubTitle from '../sub-title/sub-title.component';
import Button from '../button/button.component';
import {
  ContinueButtonsContainer,
  ButtonsContainer
} from './continue-buttons.styles';

const ContinueButtons = ({onContinue, onCancel, ready}) => (
  <ContinueButtonsContainer>
    <SubTitle big marginBottom={18}>
      {ready ? 'Data in the import file is correct. Please press Continue to import.' : 'Please import a file'}
    </SubTitle>
    <ButtonsContainer>
      <Button type='big' onClick={onContinue}>Continue Import</Button>
      <Button type='bigReverted' onClick={onCancel}>Cancel</Button>
    </ButtonsContainer>
  </ContinueButtonsContainer>
);

export default ContinueButtons;