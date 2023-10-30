import { render, screen } from '@testing-library/react';
import FileItem from './file-item.component';

describe('FileItem component', () => {
  it('renders', () => {
    render(<FileItem name='file.txt' size={50} />);
    expect(screen.getByText('file.txt')).toBeInTheDocument();
    expect(screen.getByText('50bytes')).toBeInTheDocument();
  });
});