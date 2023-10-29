import styled from 'styled-components';

export const StyledSubTitle = styled.h4`
  margin-top: 14px;
  margin-bottom: ${({ $marginBottom }) => `${$marginBottom}px`};
  font-size: 11px;
  font-weight: 800;
`;