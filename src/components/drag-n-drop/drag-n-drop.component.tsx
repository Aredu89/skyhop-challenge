import { useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import { AiFillFileText } from 'react-icons/ai';
import { SECONDARY_COLOR } from '../../styles/variables';
import Button from '../button/button.component';
import SubTitle from '../sub-title/sub-title.component';
import FileItem from '../file-item/file-item.component';
import { FilesContext } from '../../context/files/files.context';
import { AcceptedFiles } from './drag-n-drop.types';

import {
  DropzoneContainer,
  DropzoneBox,
  ButtonContainer
} from './drag-n-drop.styles';

const DragNDrop = () => {
  const { loadedFiles, setLoadedFiles} = useContext(FilesContext);
  const onDrop = useCallback((acceptedFiles: Array<AcceptedFiles>) => {
    setLoadedFiles(acceptedFiles);
  }, [setLoadedFiles]);
  const {getRootProps, getInputProps} = useDropzone({onDrop});

  return (
    <div>
      <SubTitle>Select a manifest that you'd like to import</SubTitle>
      <DropzoneContainer {...getRootProps()}>
        <input {...getInputProps()} />
        <DropzoneBox>
          <AiFillFileText fontSize="21px" color={SECONDARY_COLOR} />
          <p>Drag & Drop Here or <strong>Browse</strong></p>
        </DropzoneBox>
        <ButtonContainer><Button onClick={() => null}>Upload Manifest</Button></ButtonContainer>
      </DropzoneContainer>
      {loadedFiles.length > 0 && loadedFiles.map((file, indx) => (
        <FileItem name={file?.name} size={file?.size} key={`File-Item-${indx}`} />
      ))}
    </div>
  )
};

export default DragNDrop;