import {
  ItemContainer,
  InfoContainer,
  Name,
  Size,
  LoadingBarContainer
} from './file-item.styles';
import LoadingBar from '../loading-bar/loading-bar.component';
import { formatSize } from '../../utils/values';
import { BsFileEarmarkImage } from 'react-icons/bs';
import { SECONDARY_COLOR } from '../../styles/variables';
import { FileItemProps } from './file-item.types';

const FileItem = ({name, size}: FileItemProps) => (
  <ItemContainer>
    <BsFileEarmarkImage size='19px' color={SECONDARY_COLOR} />
    <InfoContainer>
      <Name>{name}</Name>
      <Size>{formatSize(size)}</Size>
      <LoadingBarContainer><LoadingBar /></LoadingBarContainer>
    </InfoContainer>
  </ItemContainer>
);

export default FileItem;