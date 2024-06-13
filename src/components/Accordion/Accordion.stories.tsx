import {useArgs} from '@storybook/preview-api';
import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';

import {Accordion} from './Accordion';

// Metadata for the Accordion component
const meta: Meta<typeof Accordion> = {
    title: 'components/Accordion',
    component: Accordion,
    args: {
        title: 'My title',
        children: 'Content',
    },
    parameters: {
        controls: {
            exclude: ['innerControl', 'onToggle', 'isOpen'],
        },
    },
};

export default meta;

// Define types for stories
type Story = StoryObj<typeof Accordion>;

// Template for the default Accordion variant
export const Default: Story = {
    args: {
        isOpen: false,
    },
};
const fff = [];
// Additional example stories can be added similarly
export const Open: Story = {
    args: {
        isOpen: true,
        title: 'Open Accordion',
        children: 'Opened Content',
    },
};

export const WORK: Story = {
    args: {
        isOpen: true,
        innerControl: true,
        title: 'Open Accordion',
        children: 'Opened Content',
    },
    render: function Render(args): React.ReactElement {
        const [{isOpen}, updateArgs] = useArgs<{isOpen: boolean}>();

        const onToggle = (): void => {
            updateArgs({...args, isOpen: !isOpen});
        };

        return <Accordion {...args} onToggle={onToggle} isOpen={isOpen} />;
    },
};
