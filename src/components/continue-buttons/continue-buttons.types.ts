import { MouseEventHandler } from "react";

export type ContinueButtonsProps = {
  onContinue: MouseEventHandler<HTMLButtonElement>;
  onCancel: MouseEventHandler<HTMLButtonElement>;
  ready: boolean;
};