import SubTitle from '../sub-title/sub-title.component';
import Button from '../button/button.component';
import {
  ContinueButtonsContainer,
  ButtonsContainer
} from './continue-buttons.styles';
import { BUTTON_TYPES } from '../button/button.types';
import { ContinueButtonsProps } from './continue-buttons.types';

const ContinueButtons = ({onContinue, onCancel, ready}: ContinueButtonsProps) => (
  <ContinueButtonsContainer>
    <SubTitle big marginBottom={20}>
      {ready ? 'Data in the import file is correct. Please press Continue to import.' : 'Please import a file'}
    </SubTitle>
    <ButtonsContainer>
      <Button type={BUTTON_TYPES.Big} onClick={onContinue} disabled={!ready}>Continue Import</Button>
      <Button type={BUTTON_TYPES.BigReverted} onClick={onCancel}>Cancel</Button>
    </ButtonsContainer>
  </ContinueButtonsContainer>
);

export default ContinueButtons;