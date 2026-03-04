import { useState } from 'react'
import { BrowserRouter } from 'react-router'
import { ApplicationsProvider, ToasterProvider } from '@/app/providers'
import type { FormFields } from '@/shared/types/zFormFields'
import { PreviewCard } from './index'
import type { Meta, StoryObj } from '@storybook/react-vite'

/**
 * A card component that displays a preview of job application data.
 * Supports loading states, expanded view, and copy-to-clipboard functionality.
 *
 * Features:
 * - Three states: data loaded, loading, empty
 * - Expandable view for more details
 * - Copy to clipboard functionality
 * - Integration with ActionButtons for interactions
 * - Responsive design
 */
const meta = {
  title: 'Widgets/PreviewCard',
  component: PreviewCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Preview card for job applications showing form data with loading and empty states. Includes copy functionality and expandable view.',
      },
    },
  },
  argTypes: {
    expanded: {
      control: 'boolean',
      description: 'Whether the card is in expanded view mode',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isLoading: {
      control: 'boolean',
      description: 'Shows loading spinner while data is being fetched',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    formData: {
      description: 'The form data to display in the card',
      table: {
        type: { summary: 'FormFields' },
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ApplicationsProvider>
          <ToasterProvider>
            <div style={{ width: '400px', padding: '20px' }}>
              <Story />
            </div>
          </ToasterProvider>
        </ApplicationsProvider>
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof PreviewCard>

export default meta
type Story = StoryObj<typeof meta>

// ==================== MOCK DATA ====================

const MockFormData: FormFields = {
  id: 'app-123',
  jobTitle: 'Senior Frontend Developer',
  company: 'Tech Innovations Inc.',
  skills: 'React, TypeScript, Node.js, GraphQL, Webpack, Jest, Storybook, CSS-in-JS',
  additionalDetails:
    'Looking for a senior developer with experience in building scalable frontend applications. Must have strong communication skills and experience leading junior developers.',
}

const MockMinimalData: FormFields = {
  id: 'app-456',
  jobTitle: 'Junior Developer',
  company: 'Startup Co',
  skills: 'JavaScript, HTML, CSS',
  additionalDetails: '',
}

const MockLongData: FormFields = {
  id: 'app-789',
  jobTitle: 'Senior Principal Lead Architect of Engineering Excellence and Innovation Strategy',
  company: 'Very Long Company Name That Might Cause Wrapping Issues In The Card Layout International Ltd.',
  skills:
    'React, TypeScript, Node.js, GraphQL, Webpack, Jest, Storybook, CSS-in-JS, AWS, Docker, Kubernetes, MongoDB, PostgreSQL, Redis, RabbitMQ, Kafka, Microservices, System Design, Architecture, Team Leadership, Agile, Scrum, JIRA, Confluence, Git, CI/CD, Testing, Documentation, Mentoring, Public Speaking, Technical Writing',
  additionalDetails:
    'This is an extremely long additional details field that should demonstrate how the card handles multi-line text content. It goes on and on with many details about the job requirements, responsibilities, qualifications, and company culture that might be relevant for the position. The candidate should have extensive experience in software development, architecture, and team leadership. They should be comfortable working in a fast-paced environment and be able to handle multiple projects simultaneously. The ideal candidate will have a strong technical background and excellent communication skills. They should be passionate about technology and stay up-to-date with the latest industry trends. The role involves working closely with product managers, designers, and other stakeholders to deliver high-quality software solutions. The candidate should be able to mentor junior developers and contribute to the overall technical direction of the company.',
}

// ==================== BASIC STATES ====================

/**
 * Default card with form data.
 * Shows the standard view with all information displayed.
 */
export const Default: Story = {
  args: {
    formData: MockFormData,
    expanded: false,
    isLoading: false,
  },
}

/**
 * Card in expanded view mode.
 * Shows more details or alternative layout for expanded state.
 */
export const Expanded: Story = {
  args: {
    ...Default.args,
    expanded: true,
  },
}

/**
 * Loading state of the card.
 * Shows an animated loader while data is being fetched.
 */
export const Loading: Story = {
  args: {
    isLoading: true,
    formData: undefined,
  },
}

/**
 * Empty state of the card.
 * Shows placeholder text when no data is available.
 */
export const Empty: Story = {
  args: {
    formData: undefined,
    isLoading: false,
  },
}

// ==================== DATA VARIATIONS ====================

/**
 * Card with minimal data.
 * Tests how the card handles sparse information.
 */
export const MinimalData: Story = {
  args: {
    formData: MockMinimalData,
    expanded: false,
  },
}

/**
 * Card with long text content.
 * Tests text wrapping and layout stability.
 */
export const LongTextData: Story = {
  args: {
    formData: MockLongData,
    expanded: false,
  },
}

/**
 * Card with expanded view and long text.
 * Tests expanded layout with extensive content.
 */
export const ExpandedLongText: Story = {
  args: {
    formData: MockLongData,
    expanded: true,
  },
}

// ==================== STATE COMBINATIONS ====================

/**
 * All card states side by side.
 * Useful for visual comparison.
 */
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h3 style={{ marginBottom: '8px' }}>Default</h3>
        <PreviewCard formData={MockFormData} />
      </div>
      <div>
        <h3 style={{ marginBottom: '8px' }}>Expanded</h3>
        <PreviewCard formData={MockFormData} expanded />
      </div>
      <div>
        <h3 style={{ marginBottom: '8px' }}>Loading</h3>
        <PreviewCard isLoading />
      </div>
      <div>
        <h3 style={{ marginBottom: '8px' }}>Empty</h3>
        <PreviewCard />
      </div>
      <div>
        <h3 style={{ marginBottom: '8px' }}>Minimal Data</h3>
        <PreviewCard formData={MockMinimalData} />
      </div>
    </div>
  ),
}

// ==================== INTERACTIVE STORIES ====================

/**
 * Interactive card with toggle controls.
 * Allows switching between states dynamically.
 */
export const Interactive: Story = {
  render: function InteractiveStory() {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [hasData, setHasData] = useState(true)

    return (
      <div>
        <div
          style={{
            marginBottom: '20px',
            padding: '15px',
            background: '#f0f0f0',
            borderRadius: '8px',
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              padding: '6px 12px',
              background: isExpanded ? '#2196F3' : '#e0e0e0',
              color: isExpanded ? 'white' : 'black',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {isExpanded ? 'Expanded' : 'Collapsed'}
          </button>

          <button
            onClick={() => setIsLoading(!isLoading)}
            style={{
              padding: '6px 12px',
              background: isLoading ? '#ff9800' : '#e0e0e0',
              color: isLoading ? 'white' : 'black',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {isLoading ? 'Loading' : 'Not Loading'}
          </button>

          <button
            onClick={() => setHasData(!hasData)}
            style={{
              padding: '6px 12px',
              background: hasData ? '#4CAF50' : '#e0e0e0',
              color: hasData ? 'white' : 'black',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {hasData ? 'Has Data' : 'No Data'}
          </button>
        </div>

        <PreviewCard expanded={isExpanded} isLoading={isLoading} formData={hasData ? MockFormData : undefined} />
      </div>
    )
  },
}
