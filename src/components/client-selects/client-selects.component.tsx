import Select from '../select/select.component';
import { ClientsContainer, ClientContainer, Text } from './client-selects.styles';
import { clientOptions } from '../../utils/mock-values';
import { BsClock } from 'react-icons/bs';
import { ClientSelectsProps } from './client-selects.types';

const ClientSelects = ({clients}: ClientSelectsProps) => {

  return (
    <ClientsContainer>
      {clients.map((_, indx) => (
        <ClientContainer key={`client-selection-${indx}`}>
          <Text>Testing Center {indx+1}</Text>
          <Select options={clientOptions} placeholder='Select Client' light />
          <BsClock style={{fontSize: '15px', transform: 'rotate(150deg)'}} />
        </ClientContainer>
      ))}
    </ClientsContainer>
  );
};

export default ClientSelects;