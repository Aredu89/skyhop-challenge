import SeparationLine from '../separation-line/separation-line.component';
import SubTitle from '../sub-title/sub-title.component';
import { ValidationContainer, SuccessMessage } from './validation-section.styles';
import { ValidationSectionProps } from './validation-section.types';

const ValidationSection = ({
  title,
  message,
  ready
}: ValidationSectionProps) => (
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