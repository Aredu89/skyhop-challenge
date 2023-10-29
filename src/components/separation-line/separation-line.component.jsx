import React from 'react';
import { SeparationDiv } from './separation-line.styles';

const SeparationLine = ({ marginTop = 0}) => (
  <SeparationDiv $marginTop={marginTop} />
);

export default SeparationLine;