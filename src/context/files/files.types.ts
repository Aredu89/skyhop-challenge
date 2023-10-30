import { Dispatch, SetStateAction } from "react";
import { AcceptedFiles } from "../../components/drag-n-drop/drag-n-drop.types";

export type Files = {
  loadedFiles: Array<AcceptedFiles> | [];
  setLoadedFiles: Dispatch<SetStateAction<AcceptedFiles[] | []>>;
};