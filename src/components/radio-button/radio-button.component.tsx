import SubTitle from '../sub-title/sub-title.component';
import { RadioContainer, Radio, Label } from './radio-button.styles';
import { RadioButtonProps } from './radio-button.types';

const RadioButton = ({
  title,
  options,
  name,
  value,
  onChange
}: RadioButtonProps) => (
  <>
    <SubTitle marginTop={0}>{title}</SubTitle>
    <RadioContainer>
      {options.reverse().map((opt, indx) => {
        return (
          <Radio key={`radio-item-${indx}`}>
            <input
              id={`radio-${opt}`}
              value={opt}
              name={name}
              type="radio"
              checked={value === opt}
              onChange={onChange} />
            <Label htmlFor={`radio-${opt}`}>{opt}</Label>
          </Radio>
        )
      })}
    </RadioContainer>
  </>
);

export default RadioButton;