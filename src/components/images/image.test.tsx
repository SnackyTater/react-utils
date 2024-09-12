import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom';
import BaseImage from './image';

test('image should display properly', async () => {
    render(<BaseImage 
        src='a'
        backupSrc='b'
        alt='sample alt'
    />)

    const image = screen.getByRole('img');
    const imageWithAlt = screen.getByAltText(/sample alt/i);

    expect(image).toBeInTheDocument();
    expect(imageWithAlt).toBeInTheDocument();
});

test('image should use backup src when main src is not valid', async () => {
    render(<BaseImage 
        src='a'
        backupSrc='b'
        alt='sample alt'
    />)

    const image = screen.getByRole('img');

    expect(image.getAttribute('src')).toBe('a');

    fireEvent.error(image);

    expect(image.getAttribute('src')).toBe('b');
});