import React from 'react';
import { StyledButton } from './button.styles';

const Button = ({ children, type = 'standard', onClick }) => (
  <StyledButton $type={type} onClick={onClick}>{children}</StyledButton>
);

export default Button;