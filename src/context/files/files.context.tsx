import { createContext, useState, ReactNode } from 'react';
import { Files } from './files.types';
import { AcceptedFiles } from '../../components/drag-n-drop/drag-n-drop.types';

export const FilesContext = createContext<Files>({
  loadedFiles: [],
  setLoadedFiles: () => null
});

export const FilesProvider = ({children}: {children: ReactNode}) => {
  const [loadedFiles, setLoadedFiles] = useState<Array<AcceptedFiles> | []>([]);
  const value = {
    loadedFiles,
    setLoadedFiles
  };
  return <FilesContext.Provider value={value}>{children}</FilesContext.Provider>
};