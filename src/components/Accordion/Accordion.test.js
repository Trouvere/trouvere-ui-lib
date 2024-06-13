import {fireEvent, render, waitFor} from '@testing-library/react';
import React from 'react';

// import '@testing-library/jest-dom/extend-expect'
import {Accordion} from './Accordion';

describe('Accordion', () => {
    test('renders the title and toggles content visibility when clicked', async () => {
        const {getByText, queryByText} = render(
            <Accordion title="Test Title" innerControl>
                <div>Test Content</div>
            </Accordion>,
        );

        // Check that the title is rendered
        expect(getByText('Test Title')).toBeInTheDocument();

        // Check that the content is initially hidden
        expect(queryByText('Test Content')).not.toBeInTheDocument();

        // Click to toggle open
        fireEvent.click(getByText('Test Title'));

        // Check that the content is now visible
        await waitFor(() => {
            expect(getByText('Test Content')).toBeInTheDocument();
        });

        // Click to toggle closed
        fireEvent.click(getByText('Test Title'));
        console.log(queryByText('Test Content'));

        // Check that the content is hidden again
        expect(queryByText('Test Content')).not.toBeInTheDocument();
    });

    test('calls onToggle prop when not using innerControl', () => {
        const onToggle = jest.fn();

        const {getByText} = render(
            <Accordion title="Test Title" onToggle={onToggle}>
                <div>Test Content</div>
            </Accordion>,
        );

        // Click to toggle
        fireEvent.click(getByText('Test Title'));

        // Check that the onToggle prop was called
        expect(onToggle).toHaveBeenCalledTimes(1);
    });

    test('uses inner control to toggle content visibility', () => {
        const {getByText, queryByText} = render(
            <Accordion title="Test Title" innerControl>
                <div>Test Content</div>
            </Accordion>,
        );

        // Check that the content is initially hidden
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        expect(queryByText('Test Content')).not.toBeInTheDocument();

        // Click to toggle open
        fireEvent.click(getByText('Test Title'));

        // Check that the content is now visible
        expect(getByText('Test Content')).toBeInTheDocument();

        // Click to toggle closed
        fireEvent.click(getByText('Test Title'));

        // Check that the content is hidden again
        expect(queryByText('Test Content')).not.toBeInTheDocument();
    });
});
