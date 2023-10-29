import React from 'react';
import { StyledButton } from './button.styles';

const Button = ({ children, type = 'standard' }) => (
  <StyledButton $type={type}>{children}</StyledButton>
);

export default Button;