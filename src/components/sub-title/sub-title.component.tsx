import { StyledSubTitle } from './sub-title.styles';
import { SubTitleProps } from './sub-title.types';

const SubTitle = ({
  marginBottom = 10,
  marginTop = 14,
  big = false,
  children
}: SubTitleProps) => (
  <StyledSubTitle
    $marginBottom={marginBottom}
    $marginTop={marginTop}
    $big={big}
  >{children}</StyledSubTitle>
);

export default SubTitle;