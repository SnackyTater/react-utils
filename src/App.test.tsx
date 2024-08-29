import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App';

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<App />)

  // ASSERT
  expect(screen.getByText(/react app/i)).toBeVisible();
})