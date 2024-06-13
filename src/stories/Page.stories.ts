import type {Meta, StoryObj} from '@storybook/react';
import {expect, userEvent, within} from '@storybook/test';

import {Page} from './Page';

const meta: Meta<typeof Page> = {
    title: 'Example/Page',
    component: Page,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof Page>;

export const LoggedOut: Story = {};

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn: Story = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const loginButton = canvas.getByRole('button', {name: /Log in/i});
        await expect(loginButton).toBeInTheDocument();
        await userEvent.click(loginButton);
        await expect(loginButton).not.toBeInTheDocument();

        const logoutButton = canvas.getByRole('button', {name: /Log out/i});
        await expect(logoutButton).toBeInTheDocument();
    },
};

export const LoggedIn2: Story = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const loginButton = canvas.getByRole('button', {name: /Log in/i});
        await expect(loginButton).toBeInTheDocument();
        await userEvent.click(loginButton);
        await expect(loginButton).not.toBeInTheDocument();

        const logoutButton = canvas.getByRole('button', {name: /Log out/i});
        await expect(logoutButton).toBeInTheDocument();
    },
};
