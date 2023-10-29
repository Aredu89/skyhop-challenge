import React from 'react';
import {
  OuterBar,
  InnerBar
} from './loading-bar.styles';

const LoadingBar = ({percentage = 1}) => (
  <OuterBar><InnerBar $percentage={percentage} /></OuterBar>
);

export default LoadingBar;