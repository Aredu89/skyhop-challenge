import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContinueButtons from './continue-buttons.component';

const mockOnContinueClick = jest.fn();
const mockOnCancelClick = jest.fn();

const renderContinueButtons = (ready: boolean) => {
  return render(
    <ContinueButtons
      onContinue={mockOnContinueClick}
      onCancel={mockOnCancelClick}
      ready={ready}
    />
  );
};

describe('ContinueButtons component', () => {
  it('shows the right title when not ready, and disabled the button', () => {
    renderContinueButtons(false);
    expect(screen.getByText('Please import a file')).toBeInTheDocument();
    const button = screen.getByText('Continue Import');
    userEvent.click(button);
    expect(mockOnContinueClick).toHaveBeenCalledTimes(0);
  });
  it('shows the right title when ready and lets you click', () => {
    renderContinueButtons(true);
    expect(screen.getByText('Data in the import file is correct. Please press Continue to import.')).toBeInTheDocument();
    const button = screen.getByText('Continue Import');
    userEvent.click(button);
    expect(mockOnContinueClick).toHaveBeenCalledTimes(1);
  });
});