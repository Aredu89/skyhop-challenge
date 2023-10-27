import React, { useState } from 'react';
import Modal from '../../components/modal/modal.component';
import {
  DocumentUploadContainer,
  FormContainer,
  Title,
  TitleContainer,
  LeftSection,
  RightSection,
  ContinueSection
} from './document-upload.styles';

const DocumentUpload = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleToggleModal = () => {
    //We wont make the modal close for this challenge
    //setIsModalOpen(prev => !prev);
  };

  return (
    <DocumentUploadContainer>
      <Modal isOpen={isModalOpen} onClose={handleToggleModal}>
        <FormContainer>
          <TitleContainer><Title>Document Upload</Title></TitleContainer>
          <LeftSection>First column</LeftSection>
          <RightSection>Second Column</RightSection>
          <ContinueSection>Buttons</ContinueSection>
        </FormContainer>
      </Modal>
    </DocumentUploadContainer>
  );
};

export default DocumentUpload;