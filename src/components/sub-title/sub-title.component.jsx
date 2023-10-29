import React from 'react';
import { StyledSubTitle } from './sub-title.styles';

const SubTitle = ({marginBottom = 10, marginTop = 14, big = false, children}) => (
  <StyledSubTitle
    $marginBottom={marginBottom}
    $marginTop={marginTop}
    $big={big}
  >{children}</StyledSubTitle>
);

export default SubTitle;