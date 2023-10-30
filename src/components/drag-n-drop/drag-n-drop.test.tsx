import { render, screen } from '@testing-library/react';
import DragNDrop from './drag-n-drop.component';
import { FilesContext } from '../../context/files/files.context';
import { Files } from '../../context/files/files.types';

const renderDragNDrop = (value: Files) => {
  render(
    <FilesContext.Provider value={value}>
      <DragNDrop />
    </FilesContext.Provider>
  )
};

describe('Drag n Drop component', () => {
  it('renders', () => {
    renderDragNDrop({loadedFiles: [], setLoadedFiles: () => null});
    expect(screen.getByText(`Select a manifest that you'd like to import`)).toBeInTheDocument();
    expect(screen.getByText('Drag & Drop Here or')).toBeInTheDocument();
    expect(screen.getByText('Browse')).toBeInTheDocument();
    expect(screen.getByText('Upload Manifest')).toBeInTheDocument();
  });
  it('shows the loaded files', () => {
    renderDragNDrop({loadedFiles: [{name: 'file.txt', size: 40}], setLoadedFiles: () => null});
    expect(screen.getByText('file.txt')).toBeInTheDocument();
    expect(screen.getByText('40bytes')).toBeInTheDocument();
  });
});