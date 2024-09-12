import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import BaseInput from './input';

const sampleOnChange = () => {};

test('input should display properly', async () => {
  render(<BaseInput value={''} onChange={sampleOnChange}/>)

  const input = screen.getByRole('textbox');

  expect(input).toBeInTheDocument();
});

test('disabled input should display properly', async () => {
  render(<BaseInput value={''} onChange={sampleOnChange} disabled={true}/>)

  const input = screen.getByRole('textbox');

  expect(input).toBeInTheDocument();
  expect(input).toBeDisabled();
});

test("input's placeholder should be displayed properly", async() => {
    render(<BaseInput value={''} onChange={sampleOnChange} placeholder='sample placeholder'/>)

    const input = await screen.findByPlaceholderText(/sample placeholder/i);
  
    expect(input).toBeInTheDocument();
    expect(input).toHaveRole('textbox');
})