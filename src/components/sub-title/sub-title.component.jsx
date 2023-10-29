import React from 'react';
import { StyledSubTitle } from './sub-title.styles';

const SubTitle = ({marginBottom = 10, marginTop = 14, children}) => (
  <StyledSubTitle
    $marginBottom={marginBottom}
    $marginTop={marginTop}
  >{children}</StyledSubTitle>
);

export default SubTitle;