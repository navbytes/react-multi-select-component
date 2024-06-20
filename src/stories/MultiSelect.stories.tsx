import React from "react";
import { boolean, text } from "@storybook/addon-knobs";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { defaultOptions } from "./constants";
import { MultiSelect } from "..";

const meta = {
  title: "MultiSelect",
  component: MultiSelect,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {},
  args: { onChange: fn() },
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    options: defaultOptions,
    hasSelectAll: boolean("hasSelectAll", true),
    isLoading: boolean("isLoading", false),
    shouldToggleOnHover: boolean("shouldToggleOnHover", false),
    disableSearch: boolean("disableSearch", false),
    value: [],
    disabled: boolean("disabled", false),
    onMenuToggle: (s) => {
      console.debug("Select Toggle: ", s);
    },
    labelledBy: text("labelledBy", "Select Fruits"),
    className: text("className", "multi-select"),
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    function onChange(value) {
      updateArgs({ value });
    }

    return <MultiSelect {...args} value={value} onChange={onChange} />;
  },
};

export const AddNewOptions: Story = {
  args: {
    options: defaultOptions,
    hasSelectAll: boolean("hasSelectAll", true),
    isLoading: boolean("isLoading", false),
    shouldToggleOnHover: boolean("shouldToggleOnHover", false),
    disableSearch: boolean("disableSearch", false),
    value: [],
    disabled: boolean("disabled", false),
    onMenuToggle: (s) => {
      console.debug("Select Toggle: ", s);
    },
    labelledBy: text("labelledBy", "Select Fruits"),
    className: text("className", "multi-select"),
    isCreatable: true,
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    function onChange(value) {
      updateArgs({ value });
    }

    return <MultiSelect {...args} value={value} onChange={onChange} />;
  },
};

export const AddNewCustomOptions: Story = {
  args: {
    options: defaultOptions,
    hasSelectAll: boolean("hasSelectAll", true),
    isLoading: boolean("isLoading", false),
    shouldToggleOnHover: boolean("shouldToggleOnHover", false),
    disableSearch: boolean("disableSearch", false),
    value: [],
    disabled: boolean("disabled", false),
    onMenuToggle: (s) => {
      console.debug("Select Toggle: ", s);
    },
    labelledBy: text("labelledBy", "Select Fruits"),
    className: text("className", "multi-select"),
    isCreatable: true,
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    const handleNewField = (value) => ({
      label: value,
      value: value.toUpperCase(),
    });

    function onChange(value) {
      updateArgs({ value });
    }

    return (
      <MultiSelect
        {...args}
        value={value}
        onChange={onChange}
        onCreateOption={handleNewField}
      />
    );
  },
};

export const CustomArrow: Story = {
  args: {
    options: defaultOptions,
    hasSelectAll: boolean("hasSelectAll", true),
    isLoading: boolean("isLoading", false),
    shouldToggleOnHover: boolean("shouldToggleOnHover", false),
    disableSearch: boolean("disableSearch", false),
    value: [],
    disabled: boolean("disabled", false),
    onMenuToggle: (s) => {
      console.debug("Select Toggle: ", s);
    },
    labelledBy: text("labelledBy", "Select Fruits"),
    className: text("className", "multi-select"),
    isCreatable: true,
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    const ArrowRenderer = ({ expanded }) => <>{expanded ? "🦉" : "🦚"}</>;

    const CustomClearIcon = () => <div>🤘</div>;

    function onChange(value) {
      updateArgs({ value });
    }

    return (
      <MultiSelect
        {...args}
        value={value}
        onChange={onChange}
        ArrowRenderer={ArrowRenderer}
        ClearIcon={<CustomClearIcon />}
        ClearSelectedIcon={<CustomClearIcon />}
      />
    );
  },
};
