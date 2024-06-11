import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";
import React from "react";
import { useArgs } from "@storybook/preview-api";

// Metadata for the Button component
const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
  args: {
    title: "My title",
    children: "Content",
  },
  parameters: {
    controls: {
      exclude: ["innerControl", "onToggle", "isOpen"],
    },
  },
};

export default meta;

// Define types for stories
type Story = StoryObj<typeof Button>;

// Template for the default Button variant
export const Default: Story = {
  args: {
    isOpen: false,
  },
};



