import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { AiFillFileText } from 'react-icons/ai';
import { SECONDARY_COLOR } from '../../styles/variables';
import Button from '../button/button.component';
import SubTitle from '../sub-title/sub-title.component';
import FileItem from '../file-item/file-item.component';
import {
  DropzoneContainer,
  DropzoneBox,
  ButtonContainer
} from './drag-n-drop.styles';

const DragNDrop = () => {
  const [loadedFiles, setLoadedFiles] = useState([]);
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log('ACCEPTED FILES::: ', acceptedFiles);
    setLoadedFiles(acceptedFiles);
  }, []);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  return (
    <div>
      <SubTitle>Select a manifest that you'd like to import</SubTitle>
      <DropzoneContainer {...getRootProps()}>
        <input {...getInputProps()} />
        <DropzoneBox>
          <AiFillFileText fontSize="21px" color={SECONDARY_COLOR} />
          <p>Drag & Drop Here or <strong>Browse</strong></p>
        </DropzoneBox>
        <ButtonContainer><Button>Upload Manifest</Button></ButtonContainer>
      </DropzoneContainer>
      {loadedFiles.length > 0 && loadedFiles.map((file, indx) => (
        <FileItem name={file.name} size={file.size} key={`File-Item-${indx}`} />
      ))}
    </div>
  )
};

export default DragNDrop;