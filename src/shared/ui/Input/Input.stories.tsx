import { type JSX } from 'react'
import { Input } from './index'
import type { Meta, StoryObj } from '@storybook/react-vite'

/**
 * Universal input component that can work as either
 * a regular `input` or `textarea` depending on the `as` prop.
 *
 * Supports labels, error states, and adaptive width.
 */
const meta = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'radio',
      options: ['input', 'textarea'],
      description: 'Element type: regular input or textarea',
      table: {
        type: { summary: 'ElementType' },
        defaultValue: { summary: 'input' },
      },
    },
    label: {
      control: 'text',
      description: 'Label text displayed above the input',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text inside the input',
      table: {
        type: { summary: 'string' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the input should stretch to full container width',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isError: {
      control: 'boolean',
      description: 'Error state flag (red border)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  // Decorator for visual separation between stories
  decorators: [
    (Story) => (
      <div style={{ padding: '1.5rem', maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// ==================== BASIC STORIES ====================

/**
 * Default input state with placeholder.
 * The simplest and most commonly used variant.
 */
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

/**
 * Input field with a label.
 * It's recommended to always use labels for accessibility.
 */
export const WithLabel: Story = {
  args: {
    ...Default.args,
    label: 'Username',
    placeholder: 'Enter your name',
  },
}

/**
 * Input field stretched to full container width.
 * Useful for mobile versions and responsive forms.
 */
export const FullWidth: Story = {
  args: {
    ...WithLabel.args,
    fullWidth: true,
    label: 'Full name',
    placeholder: 'John Doe',
  },
}

/**
 * Error state — useful for form validation.
 * The component displays a red border.
 */
export const WithError: Story = {
  args: {
    ...WithLabel.args,
    isError: true,
    label: 'Email',
    placeholder: 'user@example.com',
  },
}

/**
 * Textarea for multi-line input.
 * Activated via the `as="textarea"` prop.
 */
export const Textarea: Story = {
  args: {
    ...WithLabel.args,
    as: 'textarea',
    label: 'Description',
    placeholder: 'Enter detailed description...',
  },
}

// ==================== STATE VARIANTS ====================

/**
 * Demonstration of all input states in one story.
 * Useful for visual comparison by designers.
 */
export const AllStates: { render: () => JSX.Element } = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <Input placeholder="Default input" />
      <Input label="With label" placeholder="With label" />
      <Input label="With error" placeholder="Error state" isError />
      <Input as="textarea" label="Textarea" placeholder="Multi-line input..." />
    </div>
  ),
}
