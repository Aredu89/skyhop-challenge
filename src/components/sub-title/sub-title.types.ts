import { ReactNode } from "react";

export type SubTitleProps = {
  marginBottom?: number;
  marginTop?: number;
  big?: boolean;
  children: ReactNode;
};

export type StyledSubTitleProps = {
  $marginTop: number;
  $marginBottom: number;
  $big: boolean;
};