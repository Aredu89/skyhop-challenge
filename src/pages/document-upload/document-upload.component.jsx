import React, { useState, useContext, useEffect } from 'react';

import Modal from '../../components/modal/modal.component';
import Select from '../../components/select/select.component';
import SeparationLine from '../../components/separation-line/separation-line.component';
import DragNDrop from '../../components/drag-n-drop/drag-n-drop.component';
import ValidationSection from '../../components/validation-section/validation-section.component';
import Toggle from '../../components/toggle/toggle.component';
import ContinueButtons from '../../components/continue-buttons/continue-buttons.component';
import RadioButton from '../../components/radio-button/radio-button.component';
import ClientSelects from '../../components/client-selects/client-selects.component';
import { FilesContext } from '../../context/files.context';

import { titleOptions } from '../../utils/mock-values';
import {
  DocumentUploadContainer,
  FormContainer,
  Title,
  TitleContainer,
  LeftSection,
  RightSection,
  ClientSection,
  ContinueSectionContainer,
} from './document-upload.styles';

const DocumentUpload = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isSplitSchedule, setIsSplitSchedule] = useState('Yes');
  const [clientSelection, setClientSelection] = useState('Multiple');
  const [clients, setClients] = useState(['', '', '', '']);
  const { loadedFiles } = useContext(FilesContext);

  useEffect(() => {
    if(clientSelection === 'Multiple') {
      return setClients(['', '', '', '']);
    };
    if(clientSelection === 'Single') {
      return setClients(['']);
    };
  }, [clientSelection]);

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
  
  const handleClientSelectionChange = (event) => {
    setClientSelection(event.target.value);
  };

  return (
    <DocumentUploadContainer>
      <Modal isOpen={isModalOpen} onClose={handleToggleModal}>
        <FormContainer>
          <TitleContainer><Title>Document Upload</Title></TitleContainer>
          <LeftSection>
            <Select options={titleOptions} placeholder='Select Import Name:' />
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
            <ValidationSection
              title='Location Checking:'
              message='All Available!'
              ready={filesReady}
            />
            <ClientSection>
              <RadioButton
                name='client-selection'
                title='Client:'
                value={clientSelection}
                options={['Single', 'Multiple']}
                onChange={handleClientSelectionChange}
              />
              <ClientSelects
                clients={clients}
                setClients={setClients}
              />
            </ClientSection>
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