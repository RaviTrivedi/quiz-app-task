import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../components/Input';
import '@testing-library/jest-dom';

describe('Input Component', () => {
    it('should render with correct props', () => {
        render(
            <Input
                id="test-input"
                label="Test Label"
                variant="outlined"
                onChange={jest.fn()}
                value="Test Value"
            />
        );

        const inputElement = screen.getByLabelText('Test Label');

        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute('id', 'test-input');
    });

    it('call onChange handler', () => {
        const handleChange = jest.fn();

        render(
            <Input
                id="test-input"
                label="Test Label"
                variant="outlined"
                onChange={handleChange}
                value=""
            />
        );

        const inputElement = screen.getByLabelText('Test Label');
        fireEvent.change(inputElement, { target: { value: 'New Value' } });

        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(handleChange).toHaveBeenCalledWith(expect.objectContaining({
            target: { value: 'New Value' }
        }));
    });

    it('should display the correct value and label', () => {
        render(
            <Input
                id="test-input"
                label="Test Label"
                variant="filled"
                onChange={jest.fn()}
                value="Hello World"
            />
        );

        const inputElement = screen.getByLabelText('Test Label');

        expect(inputElement).toHaveValue('Hello World');
    });
});
