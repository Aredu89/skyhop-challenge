import React from 'react';
import { StyledButton } from './button.styles';

const Button = ({ children, close }) => (
  <StyledButton close={close}>{children}</StyledButton>
);

export default Button;