import { Loader } from './index'
import type { Meta, StoryObj } from '@storybook/react-vite'

/**
 * A loading indicator component that displays an animated SVG spinner.
 * Used to indicate loading states, async operations, or content that is being fetched.
 *
 * The component is minimal by design - it centers the animated loading icon
 * and provides visual feedback during waiting periods.
 */
const meta = {
  title: 'UI/Loader',
  component: Loader,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A simple, reusable loading spinner that provides visual feedback during async operations.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '200px',
          background: '#121f3d',
          borderRadius: '8px',
          padding: '2rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof Loader>

// ==================== BASIC STORIES ====================

/**
 * Default loader component.
 * This is the standard loading indicator used throughout the application.
 */
export const Default: Story = {
  render: () => <Loader />,
}

// ==================== CONTEXTUAL STORIES ====================

/**
 * Loader in a button context.
 * Shows how the loader might appear inside a button during form submission.
 */
export const InButton: Story = {
  decorators: [
    (Story) => (
      <button
        style={{
          padding: '10px 24px',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontSize: '16px',
          fontWeight: 500,
          cursor: 'wait',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          minWidth: '120px',
          justifyContent: 'center',
        }}
      >
        <Story />
        <span>Loading...</span>
      </button>
    ),
  ],
}
