import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { fn } from '@storybook/test';
import React from 'react'

import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};
export const LoggedIn2: Story = {
  args: {
    user: {
      name: '2',
    },
  },
  render: function Render(args) {
    const [{ user }, updateArgs] = useArgs();

    function onLogin() {
      updateArgs({ user: {name: 'TEST',} });
    }

    function onCreateAccount() {
      updateArgs({ user: {name: 'onCreateAccount',} });
    }

    function onLogout() {
      updateArgs({ user: null });
    }

    return <Header {...args} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount}  user={user} />;
  },



};
export const LoggedOut: Story = {};
