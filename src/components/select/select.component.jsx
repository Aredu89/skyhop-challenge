import React from 'react';
import { StyledSelect, SelectContainer } from './select.styles';

const Select = ({options, placeholder}) => (
  <SelectContainer>
    <StyledSelect>
      <option value='' disabled selected>{placeholder || 'Select one option'}</option>
      {options.map((opt, indx) => (
        <option key={`option-item-${indx}`} value={opt}>{opt}</option>
      ))}
    </StyledSelect>
  </SelectContainer>
);

export default Select;