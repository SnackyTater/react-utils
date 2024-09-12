import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import LoginPage from './login';

test('all neccessary component must be visible in the page', async () => {
    render(<LoginPage/>)

    const loginButton = screen.getByRole('button');
    const usernameInput = screen.getByPlaceholderText(/enter username/i);
    const passwordInput = screen.getByPlaceholderText(/enter password/i);

    expect(loginButton).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
});

test('all textbox must be displayed properly upon changes', async () => {
    render(<LoginPage/>)

    const usernameInput: HTMLInputElement = screen.getByPlaceholderText(/enter username/i);
    const passwordInput: HTMLInputElement = screen.getByPlaceholderText(/enter password/i);

    fireEvent.change(usernameInput, {target: {value: 'testusername'}});
    fireEvent.change(passwordInput, {target: {value: 'testpassword'}});

    expect(usernameInput.value).toBe('testusername');
    expect(passwordInput.value).toBe('testpassword');
});

test('must show error when username or password is empty', async () => {
    render(<LoginPage/>)

    const usernameInput: HTMLInputElement = screen.getByPlaceholderText(/enter username/i);
    const passwordInput: HTMLInputElement = screen.getByPlaceholderText(/enter password/i);
    const errorMessage = screen.getByTestId('error');
    const loginButton = screen.getByRole('button');

    //case 1: both username & password are empty
    fireEvent.change(usernameInput, {target: {value: ''}});
    fireEvent.change(passwordInput, {target: {value: ''}});

    expect(usernameInput.value).toBe('');
    expect(passwordInput.value).toBe('');
    expect(errorMessage.getAttribute('class')).toContain('invisible');

    fireEvent.click(loginButton);

    expect(errorMessage.getAttribute('class')).toContain('visible');
    expect(errorMessage).toHaveTextContent('must enter username & password');

    //case 2: only password is empty
    fireEvent.change(usernameInput, {target: {value: 'test'}});

    expect(usernameInput.value).toBe('test');
    expect(errorMessage.getAttribute('class')).toContain('invisible');

    fireEvent.click(loginButton);

    expect(errorMessage.getAttribute('class')).toContain('visible');
    expect(errorMessage).toHaveTextContent('must enter username & password');

    //case 3: only username is empty
    fireEvent.change(usernameInput, {target: {value: ''}});
    fireEvent.change(passwordInput, {target: {value: 'test'}});

    expect(passwordInput.value).toBe('test');
    expect(errorMessage.getAttribute('class')).toContain('invisible');

    fireEvent.click(loginButton);

    expect(errorMessage.getAttribute('class')).toContain('visible');
    expect(errorMessage).toHaveTextContent('must enter username & password');
});