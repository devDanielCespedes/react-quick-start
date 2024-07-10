import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { TextFieldProps } from "@mui/material";
import { fn } from "@storybook/test";
import { withActions } from "@storybook/addon-actions/decorator";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    actions: { argTypesRegex: "^on.*", handles: ["focus", "blur", "change"] },
  },
  argTypes: {
    label: { control: "text" },
    variant: { control: "select", options: ["outlined", "filled", "standard"] },
    error: { control: "boolean" },
    helperText: { control: "text" },
    disabled: { control: "boolean" },
    size: { control: "select", options: ["small", "medium"] },
    fullWidth: { control: "boolean" },
    onChange: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
  decorators: [withActions],
};

export default meta;
type Story = StoryObj<TextFieldProps>;

export const Outlined: Story = {
  args: {
    label: "Outlined TextField",
    variant: "outlined",
  },
};

export const Filled: Story = {
  args: {
    label: "Filled TextField",
    variant: "filled",
  },
};

export const Standard: Story = {
  args: {
    label: "Standard TextField",
    variant: "standard",
  },
};

export const WithError: Story = {
  args: {
    label: "With Error",
    variant: "outlined",
    error: true,
    helperText: "Error message",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled TextField",
    variant: "outlined",
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: "Small TextField",
    variant: "outlined",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    label: "Medium TextField",
    variant: "outlined",
    size: "medium",
  },
};

export const FullWidth: Story = {
  args: {
    label: "Full Width TextField",
    variant: "outlined",
    fullWidth: true,
  },
};
