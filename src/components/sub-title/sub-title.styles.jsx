import styled from 'styled-components';

export const StyledSubTitle = styled.h4`
  margin-top: ${({ $marginTop }) => `${$marginTop}px`};
  margin-bottom: ${({ $marginBottom }) => `${$marginBottom}px`};
  font-size: ${({$big}) => $big ? '14px' : '11px'};
  font-weight: 800;
`;