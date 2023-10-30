import ReactModal from 'react-modal';
import Button from '../button/button.component';
import { BACKGROUND_COLOR } from '../../styles/variables';
import { ContentContainer } from './modal.styles';
import { BUTTON_TYPES } from '../button/button.types';
import { ModalProps } from './modal.types';

//Setting app element to support accessibility
ReactModal.setAppElement('#root');

const Modal = ({ isOpen, onClose, children }: ModalProps) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onClose}
    style={{
      overlay: {
        backgroundColor: BACKGROUND_COLOR,
        display: 'flex',
        justifyContent: 'center'
      },
      content: {
        position: 'initial',
        height: 'fit-content',
        border: 'none',
        borderRadius: '20px',
        padding: '25px',
        inset: 'none',
        margin: '50px'
      }
    }}
  >
    <Button type={BUTTON_TYPES.Close} onClick={onClose}>&#x2715;</Button>
    <ContentContainer>
      {children}
    </ContentContainer>
  </ReactModal>
);

export default Modal;