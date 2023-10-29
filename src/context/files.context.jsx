import { createContext, useState } from 'react';

export const FilesContext = createContext({
  loadedFiles: [],
  setLoadedFiles: () => null
});

export const FilesProvider = ({children}) => {
  const [loadedFiles, setLoadedFiles] = useState([]);
  const value = {
    loadedFiles,
    setLoadedFiles
  };
  return <FilesContext.Provider value={value}>{children}</FilesContext.Provider>
};