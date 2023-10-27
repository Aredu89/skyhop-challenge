import React, { useState } from 'react';
import Modal from '../../components/modal/modal.component';
import { DocumentUploadContainer } from './document-upload.styles';

const DocumentUpload = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleToggleModal = () => {
    //We wont make the modal close for this challenge
    //setIsModalOpen(prev => !prev);
  };

  return (
    <DocumentUploadContainer>
      <Modal isOpen={isModalOpen} onClose={handleToggleModal}>
        <div>Document Upload component lalallalalallalalla</div>
      </Modal>
    </DocumentUploadContainer>
  );
};

export default DocumentUpload;