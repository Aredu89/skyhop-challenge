import { render, screen } from '@testing-library/react';
import ClientSelects from './client-selects.component';

describe('ClientSelects component', () => {
  it('renders 1 select', () => {
    render(<ClientSelects clients={['']} />);
    expect(screen.getAllByText('Select Client').length).toBe(1);
    expect(screen.getByText('Testing Center 1')).toBeInTheDocument();
  });
  it('renders 4 selects', () => {
    render(<ClientSelects clients={['', '', '', '']} />);
    expect(screen.getAllByText('Select Client').length).toBe(4);
    expect(screen.getByText('Testing Center 1')).toBeInTheDocument();
    expect(screen.getByText('Testing Center 2')).toBeInTheDocument();
    expect(screen.getByText('Testing Center 3')).toBeInTheDocument();
    expect(screen.getByText('Testing Center 4')).toBeInTheDocument();
  });
});

