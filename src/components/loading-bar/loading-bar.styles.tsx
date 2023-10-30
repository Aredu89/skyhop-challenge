import styled from 'styled-components';
import { LIGHT_GRAY, SECONDARY_COLOR } from '../../styles/variables';
import { InnerBarProps } from './loading-bar.types';

export const OuterBar = styled.div`
  width: 100%;
  height: 3px;
  border-radius: 10px;
  background-color: ${LIGHT_GRAY};
`;

export const InnerBar = styled.div<InnerBarProps>`
  width: ${({ $percentage }) => `${$percentage}%`};
  height: 3px;
  border-radius: 10px;
  background-color: ${SECONDARY_COLOR};
`;