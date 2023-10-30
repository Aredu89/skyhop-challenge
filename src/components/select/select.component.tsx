import { StyledSelect } from './select.styles';
import { SelectProps } from './select.types';

const Select = ({options, placeholder, light = false}: SelectProps) => (
  <StyledSelect defaultValue='' $light={light}>
    <option value='' disabled>{placeholder || 'Select one option'}</option>
    {options.map((opt, indx) => (
      <option key={`option-item-${indx}`} value={opt}>{opt}</option>
    ))}
  </StyledSelect>
);

export default Select;