import React, { useState, useContext } from 'react';

import Modal from '../../components/modal/modal.component';
import Select from '../../components/select/select.component';
import SeparationLine from '../../components/separation-line/separation-line.component';
import DragNDrop from '../../components/drag-n-drop/drag-n-drop.component';
import ValidationSection from '../../components/validation-section/validation-section.component';
import Toggle from '../../components/toggle/toggle.component';
import ContinueButtons from '../../components/continue-buttons/continue-buttons.component';
import RadioButton from '../../components/radio-button/radio-button.component';
import { FilesContext } from '../../context/files.context';

import { selectOptions } from '../../utils/mock-values';
import {
  DocumentUploadContainer,
  FormContainer,
  Title,
  TitleContainer,
  LeftSection,
  RightSection,
  ContinueSectionContainer,
} from './document-upload.styles';

const DocumentUpload = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isSplitSchedule, setIsSplitSchedule] = useState('Yes');
  const { loadedFiles } = useContext(FilesContext);

  const handleToggleModal = () => {
    //We wont make the modal close for this challenge
    setIsModalOpen(prev => prev);
  };

  const filesReady = loadedFiles.length > 0;

  const handleContinueImport = () => {
    console.log('Continue Import!');
  };

  const handleCancel = () => {
    console.log('Cancel Import!');
  };

  const handleIsSplitScheduleChange = (event) => {
    setIsSplitSchedule(event.target.value);
  };

  return (
    <DocumentUploadContainer>
      <Modal isOpen={isModalOpen} onClose={handleToggleModal}>
        <FormContainer>
          <TitleContainer><Title>Document Upload</Title></TitleContainer>
          <LeftSection>
            <Select options={selectOptions} placeholder='Select Import Name:' />
            <SeparationLine marginTop={18} />
            <DragNDrop />
            <ValidationSection
              title='Elapse Data Checking:'
              message='No Elapsed Dates!'
              ready={filesReady}
            />
            <Toggle
              title='Tolerance Window:'
              topic='Tolerance Level'
            />
          </LeftSection>
          <RightSection>
            <RadioButton
              name='split-schedule'
              title='Split schedule using social distancing?'
              value={isSplitSchedule}
              options={['Yes', 'No']}
              onChange={handleIsSplitScheduleChange}
            />
          </RightSection>
          <ContinueSectionContainer>
            <ContinueButtons ready={filesReady} onContinue={handleContinueImport} onCancel={handleCancel} />
          </ContinueSectionContainer>
        </FormContainer>
      </Modal>
    </DocumentUploadContainer>
  );
};

export default DocumentUpload;