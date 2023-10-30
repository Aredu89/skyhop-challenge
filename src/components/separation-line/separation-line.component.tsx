import { SeparationDiv } from './separation-line.styles';
import { SeparationLineProps } from './separation-line.types';

const SeparationLine = ({ marginTop = 0}: SeparationLineProps) => (
  <SeparationDiv $marginTop={marginTop} />
);

export default SeparationLine;