import React, { useState } from 'react';
import Modal from '../../components/modal/modal.component';
import Select from '../../components/select/select.component';
import { selectOptions } from '../../utils/mock-values';
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
          <LeftSection>
            <Select options={selectOptions} placeholder='Select Import Name:' />
          </LeftSection>
          <RightSection>Second Column</RightSection>
          <ContinueSection>Buttons</ContinueSection>
        </FormContainer>
      </Modal>
    </DocumentUploadContainer>
  );
};

export default DocumentUpload;