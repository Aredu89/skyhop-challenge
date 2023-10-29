import styled from 'styled-components';
import { PRIMARY_COLOR, DARK_GRAY } from '../../styles/variables';

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 34px;
  background-color: ${PRIMARY_COLOR};
  -webkit-transition: .2s;
  transition: .2s;

  &::before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 18px;
    bottom: 2px;
    border-radius: 50%;
    background-color: white;
    -webkit-transition: .2s;
    transition: .2s;
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;
  margin-right: 4px;

  & input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + ${Slider} {
      background-color: ${DARK_GRAY};
    }
    &:focus + ${Slider} {
      box-shadow: 0 0 1px ${DARK_GRAY};
    }
    &:checked + ${Slider}:before {
      -webkit-transform: translateX(-16px);
      -ms-transform: translateX(-16px);
      transform: translateX(-16px);
    }
  }
`;

export const TextToggleContainer = styled.span`
  font-size: 12px;
  padding-right: 12px;
  margin-right: 12px;
  border-right: 1px solid ${PRIMARY_COLOR};
`;

export const TextTopicContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
`;