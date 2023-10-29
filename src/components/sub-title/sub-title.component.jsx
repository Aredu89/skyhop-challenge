import React from 'react';
import { StyledSubTitle } from './sub-title.styles';

const SubTitle = ({marginBottom = 10, children}) => (
  <StyledSubTitle $marginBottom={marginBottom}>{children}</StyledSubTitle>
);

export default SubTitle;