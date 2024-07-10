import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { fn } from "@storybook/test";
import { withActions } from "@storybook/addon-actions/decorator";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    actions: { argTypesRegex: "^on.*", handles: ["mouseover", "click .btn"] },
  },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "error", "warning", "info"],
    },
    size: { control: "select", options: ["small", "medium", "large"] },
    variant: { control: "select", options: ["text", "outlined", "contained"] },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    onClick: fn(),
  },
  decorators: [withActions],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    children: "Contained Button",
    variant: "contained",
    color: "primary",
  },
};

export const Text: Story = {
  args: {
    children: "Text Button",
    variant: "text",
    color: "primary",
  },
};

export const Loading: Story = {
  args: {
    children: "Loading Button",
    loading: true,
    variant: "contained",
    color: "primary",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    variant: "contained",
    color: "primary",
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    size: "small",
    variant: "contained",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium Button",
    size: "medium",
    variant: "contained",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "large",
    variant: "contained",
  },
};

export const Outlined: Story = {
  args: {
    children: "Outlined Button",
    variant: "outlined",
    color: "primary",
  },
};

export const PrimaryColor: Story = {
  args: {
    children: "Primary Color Button",
    variant: "contained",
    color: "primary",
  },
};

export const SecondaryColor: Story = {
  args: {
    children: "Secondary Color Button",
    variant: "contained",
    color: "secondary",
  },
};

export const SuccessColor: Story = {
  args: {
    children: "Success Color Button",
    variant: "contained",
    color: "success",
  },
};

export const ErrorColor: Story = {
  args: {
    children: "Error Color Button",
    variant: "contained",
    color: "error",
  },
};

export const WarningColor: Story = {
  args: {
    children: "Warning Color Button",
    variant: "contained",
    color: "warning",
  },
};

export const InfoColor: Story = {
  args: {
    children: "Info Color Button",
    variant: "contained",
    color: "info",
  },
};

export const CustomColor: Story = {
  args: {
    children: "Custom Color Button",
    variant: "contained",
    sx: { backgroundColor: "#EC9021", color: "#fff" },
  },
};

export const WithIcon: Story = {
  args: {
    children: "With Icon",
    variant: "contained",
    startIcon: (
      <span role="img" aria-label="icon">
        🚀
      </span>
    ),
  },
};

export const IconOnly: Story = {
  args: {
    variant: "contained",
    startIcon: (
      <span role="img" aria-label="icon">
        🚀
      </span>
    ),
  },
};
