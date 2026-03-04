import { type ReactNode, useEffect } from 'react'
import { ToasterProvider, useToasterContext } from '@/app/providers/toasterProvider'
import { Toaster } from './index'
import type { Meta, StoryObj } from '@storybook/react-vite'

/**
 * A toast notification component that automatically disappears after 3 seconds.
 * Provides non-intrusive feedback messages to users about operations results.
 *
 * Features:
 * - Auto-dismiss after 3 seconds
 * - Slide animation for entrance/exit
 * - Green color scheme for success messages
 * - Controlled visibility via context
 */
const meta = {
  title: 'UI/Toaster',
  component: Toaster,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Toast notification system for temporary feedback messages. Automatically dismisses after 3 seconds.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Content of the toast message',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
  decorators: [
    (Story) => (
      <ToasterProvider>
        <div
          style={{
            minHeight: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingTop: '50px',
            position: 'relative',
          }}
        >
          <Story />
        </div>
      </ToasterProvider>
    ),
  ],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

// Helper component to trigger toaster from stories
const TriggerButton = ({ children, onClick }: { children: ReactNode; onClick?: () => void }) => (
  <button
    onClick={onClick}
    style={{
      padding: '10px 20px',
      background: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
      marginBottom: '20px',
    }}
  >
    {children}
  </button>
)

// Wrapper component to control toaster visibility for stories
const ToasterWrapper = ({
  children,
  autoShow = true,
  message = 'Operation completed successfully!',
}: {
  children: ReactNode
  autoShow?: boolean
  message?: string
}) => {
  const { setToasterVisibility } = useToasterContext()

  useEffect(() => {
    if (autoShow) {
      setToasterVisibility({ visibility: true })
    }
  }, [autoShow, setToasterVisibility])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <TriggerButton onClick={() => setToasterVisibility({ visibility: true })}>Show Toast</TriggerButton>
      <Toaster>{message}</Toaster>
    </div>
  )
}

/**
 * Default toast notification with a success message.
 * Automatically shows when the story loads.
 */
export const Default: Story = {
  render: () => (
    <ToasterWrapper message="Operation completed successfully!">
      <Toaster>Operation completed successfully!</Toaster>
    </ToasterWrapper>
  ),
}

/**
 * Toast with a short message.
 * For simple confirmations.
 */
export const ShortMessage: Story = {
  render: () => (
    <ToasterWrapper message="Saved!">
      <Toaster>Saved!</Toaster>
    </ToasterWrapper>
  ),
}

/**
 * Toast with a longer message.
 * Shows how the component handles longer text.
 */
export const LongMessage: Story = {
  render: () => (
    <ToasterWrapper message="Your changes have been successfully saved and applied to all related items.">
      <Toaster>Your changes have been successfully saved and applied to all related items.</Toaster>
    </ToasterWrapper>
  ),
}
