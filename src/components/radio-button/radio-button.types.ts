import { ChangeEvent } from "react";

export type RadioButtonProps = {
  title: string;
  options: Array<string>;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};