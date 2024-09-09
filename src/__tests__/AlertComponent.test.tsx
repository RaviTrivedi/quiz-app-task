/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react';
import AlertComponent from '../components/Alert';
import '@testing-library/jest-dom';

describe('AlertComponent', () => {
    it('Alert severity and message', () => {
        render(<AlertComponent severity="success" message="This is a success alert!" handleClose={jest.fn()} />);

        const alert = screen.getByText('This is a success alert!');
        expect(alert).toBeInTheDocument();
    });

    it('handleClose function', () => {
        const handleClose = jest.fn();
        render(<AlertComponent severity="error" message="This is an error alert!" handleClose={handleClose} />);

        const closeButton = screen.getByRole('button');
        fireEvent.click(closeButton);
        expect(handleClose).toHaveBeenCalledTimes(1);
    });
});
