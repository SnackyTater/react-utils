import {render, screen} from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from './App';

describe('Example test', () => {
    it('should pass', () => {
      expect(true).toBe(true);
    });
});

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<App />)

  // ASSERT
  expect(screen.getByText(/react app/i)).toBeInTheDocument();
})