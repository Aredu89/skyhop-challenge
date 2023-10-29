import React, { useState } from 'react';
import SubTitle from '../sub-title/sub-title.component';
import { BsClock } from 'react-icons/bs';
import {
  Switch,
  SwitchContainer,
  Slider,
  TextToggleContainer,
  TextTopicContainer
} from './toggle.styles';

const Toggle = ({title, topic}) => {
  const [selected, setSelected]= useState(true);
  return (
    <div>
      <SubTitle marginTop={10} marginBottom={8}>{title}</SubTitle>
      <SwitchContainer>
        <Switch>
          <input
            type='checkbox'
            value={selected}
            onChange={() => setSelected(prev => !prev)}
          />
          <Slider />
        </Switch>
        <TextToggleContainer>
          Toggle {selected ? 'ON' : 'OFF'}
        </TextToggleContainer>
        <TextTopicContainer>
          <BsClock style={{fontSize: '15px', transform: 'rotate(150deg)'}} /> Select {topic}
        </TextTopicContainer>
      </SwitchContainer>
    </div>
  )
};

export default Toggle;