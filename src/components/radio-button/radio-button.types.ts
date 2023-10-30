export type RadioButtonProps = {
  title: string;
  options: Array<string>;
  name: string;
  value: string;
  onChange: () => void;
};