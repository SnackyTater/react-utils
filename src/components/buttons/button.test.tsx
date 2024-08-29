import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import BaseButton from './button';

test('button label should display properly', async () => {
  render(<BaseButton onClick={() => {}}>test button</BaseButton>)

  const button = screen.getByRole('button');

  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent(/test button/i);
});

test('disabled button should display properly', async () => {
  render(
    <BaseButton
      disabled={true}
      onClick={() => {}} 
    >
      disabled button
    </BaseButton>
  )

  const button = screen.getByRole('button');

  expect(button).toBeInTheDocument();
  expect(button).toBeDisabled();
});