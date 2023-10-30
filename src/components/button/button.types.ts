import { ReactNode, MouseEventHandler } from "react";

export enum BUTTON_TYPES {
  Close = 'close',
  Standard = 'standard',
  Big = 'big',
  BigReverted = 'bigReverted'
};

export type ButtonProps = {
  children: ReactNode;
  type?: BUTTON_TYPES;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};