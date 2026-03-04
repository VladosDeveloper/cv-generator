import { Dots } from './index'
import type { Meta, StoryObj } from '@storybook/react-vite'

/**
 * A visual indicator component that displays progress or step status using 5 dots.
 * Supports two visual styles (circle and rectangle) and can show filled states
 * based on the `fillCount` prop.
 */
const meta = {
  title: 'UI/Dots',
  component: Dots,
  tags: ['autodocs'],
  argTypes: {
    dotsType: {
      control: 'radio',
      options: ['circle', 'rectangle'],
      description: 'Visual style of the dots',
      table: {
        type: { summary: 'circle | rectangle' },
        defaultValue: { summary: 'rectangle' },
      },
    },
    fillCount: {
      control: { type: 'number', min: 0, max: 5, step: 1 },
      description: 'Number of filled dots (from 0 to 5)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
  },
  // Center the component in the Canvas for better visibility
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'fit-content',
          flexWrap: 'wrap',
          background: '#f5f5f5',
          borderRadius: '8px',
          padding: '20px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Dots>

export default meta
type Story = StoryObj<typeof meta>

// ==================== BASIC STORIES ====================

/**
 * Default state with rectangle dots and no filled dots.
 * This is the most basic usage of the component.
 */
export const Default: Story = {
  args: {
    dotsType: 'rectangle',
    fillCount: 0,
  },
}

/**
 * Circle style dots with default appearance.
 * Used for more subtle, rounded visual indicators.
 */
export const CircleDots: Story = {
  args: {
    dotsType: 'circle',
    fillCount: 0,
  },
}

// ==================== FILL STATES ====================

/**
 * Shows progression with filled dots.
 * Perfect for step-by-step processes.
 */
export const ProgressStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <span style={{ minWidth: '60px' }}>0/5:</span>
        <Dots fillCount={0} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <span style={{ minWidth: '60px' }}>1/5:</span>
        <Dots fillCount={1} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <span style={{ minWidth: '60px' }}>2/5:</span>
        <Dots fillCount={2} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <span style={{ minWidth: '60px' }}>3/5:</span>
        <Dots fillCount={3} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <span style={{ minWidth: '60px' }}>4/5:</span>
        <Dots fillCount={4} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <span style={{ minWidth: '60px' }}>5/5:</span>
        <Dots fillCount={5} />
      </div>
    </div>
  ),
}

/**
 * Circle dots with different fill states.
 * Shows how circle style behaves with progression.
 */
export const CircleProgress: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <span style={{ minWidth: '60px' }}>0/5:</span>
        <Dots dotsType="circle" fillCount={0} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <span style={{ minWidth: '60px' }}>3/5:</span>
        <Dots dotsType="circle" fillCount={3} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <span style={{ minWidth: '60px' }}>5/5:</span>
        <Dots dotsType="circle" fillCount={5} />
      </div>
    </div>
  ),
}

// ==================== SPECIFIC SCENARIOS ====================

/**
 * Individual fill values demonstration.
 * Useful for designers to see each possible state.
 */
export const FillValues: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All possible `fillCount` values from 0 to 5 shown individually.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      {[0, 1, 2, 3, 4, 5].map((count) => (
        <div key={count} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ minWidth: '60px', fontWeight: 'bold' }}>fillCount = {count}</span>
          <Dots fillCount={count} />
        </div>
      ))}
    </div>
  ),
}
