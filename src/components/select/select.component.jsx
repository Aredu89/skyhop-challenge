import React from 'react';
import { StyledSelect } from './select.styles';

const Select = ({options, placeholder, light = false}) => (
  <StyledSelect defaultValue='' $light={light}>
    <option value='' disabled>{placeholder || 'Select one option'}</option>
    {options.map((opt, indx) => (
      <option key={`option-item-${indx}`} value={opt}>{opt}</option>
    ))}
  </StyledSelect>
);

export default Select;