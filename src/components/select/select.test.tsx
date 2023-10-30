import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from './select.component';

const renderSelect = () => {
  return render(
    <Select options={['one', 'two', 'three']} placeholder='Test Placeholder' />
  );
};

describe('Select component', () => {
  it('shows the placeholder', () => {
    renderSelect();
    expect(screen.getByText('Test Placeholder')).toBeInTheDocument();
  });
  it('selects the options', () => {
    renderSelect();
    expect((screen.getByText('one') as HTMLOptionElement).selected).toBe(false);
    userEvent.selectOptions(screen.getByRole("combobox"), 'one');
    expect((screen.getByText('one') as HTMLOptionElement).selected).toBe(true);
  })
});