import { StyledButton } from './button.styles';
import { ButtonProps, BUTTON_TYPES } from './button.types';

const Button = ({ children, type = BUTTON_TYPES.Standard, onClick, disabled = false }: ButtonProps) => (
  <StyledButton
    $type={type}
    onClick={onClick}
    disabled={disabled}
  >{children}</StyledButton>
);

export default Button;