import Copy from '@/shared/assets/icons/copy.svg?react'
import Home from '@/shared/assets/icons/home.svg?react'
import PlusIcon from '@/shared/assets/icons/icon-plus.svg?react'
import LoadingIcon from '@/shared/assets/icons/loading.svg?react'
import { Button } from './index'
import type { Meta, StoryObj } from '@storybook/react-vite'

/**
 * Universal button component with icon support, loading states,
 * different sizes, and visual variants. Can be rendered as a custom
 * component (e.g., Link from react-router) via the `as` prop.
 */
const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'transparent', 'iconic'],
      description: 'Visual style of the button',
      table: {
        type: { summary: 'primary | transparent | iconic' },
        defaultValue: { summary: 'primary' },
      },
    },
    buttonSize: {
      control: 'radio',
      options: ['large', 'small'],
      description: 'Button size',
      table: {
        type: { summary: 'large | small' },
        defaultValue: { summary: 'small' },
      },
    },
    gap: {
      control: 'radio',
      options: ['sm', 'md'],
      description: 'Spacing between icon and text',
      table: {
        type: { summary: 'sm | md' },
        defaultValue: { summary: 'md' },
      },
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Icon position relative to text',
      table: {
        type: { summary: 'left | right' },
        defaultValue: { summary: 'right' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state (disables button and shows loader)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Stretch button to full container width',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    icon: {
      description: 'Icon element (ReactNode)',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    as: {
      description: 'Custom component for rendering (e.g., Link from react-router)',
      table: {
        type: { summary: 'ElementType' },
        defaultValue: { summary: 'button' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Callback when button is clicked',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          verticalAlign: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// ==================== BASIC STORIES ====================

/**
 * Default button with text.
 * The simplest and most commonly used variant.
 */
export const Default: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    buttonSize: 'small',
  },
}

/**
 * Button with icon on the left side.
 * Icons help visually indicate the action.
 */
export const WithIconLeft: Story = {
  args: {
    ...Default.args,
    icon: <PlusIcon />,
    iconPosition: 'left',
    children: 'Create new',
    gap: 'sm',
  },
}

/**
 * Button with icon on the right side.
 * Classic pattern for action buttons.
 */
export const WithIconRight: Story = {
  args: {
    ...Default.args,
    icon: <Copy />,
    iconPosition: 'right',
    children: 'Copy to clipboard',
    buttonSize: 'small',
    variant: 'transparent',
  },
}

/**
 * Large button.
 * Used for main CTAs (Call to Action) on the page.
 */
export const Large: Story = {
  args: {
    ...Default.args,
    buttonSize: 'large',
    children: 'Create new',
    icon: <PlusIcon />,
    iconPosition: 'left',
  },
}

// ==================== VARIANTS ====================

/**
 * Primary variant — solid filled button.
 * Used for main actions.
 */
export const Primary: Story = {
  args: {
    ...Default.args,
    variant: 'primary',
    children: 'Primary Button',
  },
}

/**
 * Transparent variant — outlined button with transparency.
 * Used for secondary actions.
 */
export const Transparent: Story = {
  args: {
    ...Primary.args,
    variant: 'transparent',
    children: 'Transparent Button',
  },
}

/**
 * Iconic variant — icon-only button without text.
 * Used for toolbars, card actions, etc.
 */
export const Iconic: Story = {
  args: {
    variant: 'iconic',
    icon: <Home />,
    'aria-label': 'To home',
    buttonSize: 'small',
    // gap: 0,
  },
}

// ==================== STATES ====================

/**
 * Button in loading state.
 * Shows a loader and prevents double-clicks.
 */
export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
    icon: <LoadingIcon />,
    disabled: true,
    fullWidth: true,
  },
}

/**
 * Disabled button.
 * Doesn't respond to clicks and has reduced contrast.
 */
export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    children: 'Create new',
  },
}

/**
 * Full width button.
 * Useful for mobile interfaces and forms.
 */
export const FullWidth: Story = {
  args: {
    ...Default.args,
    fullWidth: true,
    children: 'Create new',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem', width: '100%', maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
}

// ==================== COMBINATIONS ====================

/**
 * Demonstration of all button sizes.
 * Useful for choosing the right size in your layout.
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button buttonSize="small">Small</Button>
      <Button buttonSize="large">Large</Button>
    </div>
  ),
}

/**
 * Demonstration of all button variants.
 * Allows comparing visual styles side by side.
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="primary" icon={<PlusIcon />} iconPosition="left">
        Create new
      </Button>
      <Button variant="transparent" icon={<Copy />} iconPosition="right">
        Transparent
      </Button>
      <Button variant="iconic" icon={<Home />} aria-label="To home" />
    </div>
  ),
}

/**
 * Demonstration of all button states.
 * Helpful for development checklist.
 */
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button>Normal</Button>
      <Button loading disabled>
        Loading
      </Button>
      <Button disabled>Disabled</Button>
      <Button icon={<PlusIcon />} iconPosition="left">
        With Icon
      </Button>
    </div>
  ),
}
