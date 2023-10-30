import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './button.component';

const mockOnClick = jest.fn();

describe('Button Component', () => {
  it('shows the text', () => {
    render(<Button onClick={() => null}>This is a button</Button>);
    expect(screen.getByText('This is a button')).toBeInTheDocument();
  });
  it('handles onClick', () => {
    render(<Button onClick={mockOnClick}>This is a button</Button>);
    const button = screen.getByText('This is a button');
    userEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
  it('wont click when disabled', () => {
    render(<Button onClick={() => null} disabled>This is a button</Button>);
    const button = screen.getByText('This is a button');
    userEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(0);
  });
});