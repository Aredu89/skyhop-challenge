import React from 'react';
import { StyledButton } from './button.styles';

const Button = ({ children, type = 'standard', onClick, disabled = false }) => (
  <StyledButton
    $type={type}
    onClick={onClick}
    disabled={disabled}
  >{children}</StyledButton>
);

export default Button;