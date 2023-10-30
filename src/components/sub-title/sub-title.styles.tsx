import styled from 'styled-components';
import { StyledSubTitleProps } from './sub-title.types';

export const StyledSubTitle = styled.h4<StyledSubTitleProps>`
  margin-top: ${({ $marginTop }) => `${$marginTop}px`};
  margin-bottom: ${({ $marginBottom }) => `${$marginBottom}px`};
  font-size: ${({$big}) => $big ? '14px' : '11px'};
  font-weight: 800;
  ${({$big}) => $big ? 'text-align: center' : ''}
`;