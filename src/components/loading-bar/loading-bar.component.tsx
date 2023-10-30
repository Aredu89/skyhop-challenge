import {
  OuterBar,
  InnerBar
} from './loading-bar.styles';
import { LoadingBarProps } from './loading-bar.types';

const LoadingBar = ({percentage = 1}: LoadingBarProps) => (
  <OuterBar><InnerBar $percentage={percentage} /></OuterBar>
);

export default LoadingBar;