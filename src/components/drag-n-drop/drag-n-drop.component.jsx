import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { AiFillFileText } from 'react-icons/ai';
import { SECONDARY_COLOR } from '../../styles/variables';
import Button from '../button/button.component';
import {
  Title,
  DropzoneContainer,
  DropzoneBox,
  ButtonContainer
} from './drag-n-drop.styles';

const DragNDrop = () => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log('ACCEPTED FILES::: ', acceptedFiles);
  }, []);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  return (
    <div>
      <Title>Select a manifest that you'd like to import</Title>
      <DropzoneContainer {...getRootProps()}>
        <input {...getInputProps()} />
        <DropzoneBox>
          <AiFillFileText fontSize="1.3rem" color={SECONDARY_COLOR} />
          <p>Drag & Drop Here or <strong>Browse</strong></p>
        </DropzoneBox>
        <ButtonContainer><Button>Upload Manifest</Button></ButtonContainer>
      </DropzoneContainer>
    </div>
  )
};

export default DragNDrop;