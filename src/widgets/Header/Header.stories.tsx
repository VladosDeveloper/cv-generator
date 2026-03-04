import { type ReactNode, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router'
import { ApplicationsProvider, useApplicationsContext } from '@/app/providers'
import { ToasterProvider } from '@/app/providers/toasterProvider'
import { ApplicationsDefaultCount } from '@/shared/constants/applicationsDefaultCount'
import { DevicesWidth } from '@/shared/constants/devicesWidth'
import { Header } from './index'
import type { Meta, StoryObj } from '@storybook/react-vite'

/**
 * Main navigation header component that appears across the application.
 * Contains logo, navigation elements, application status indicators, and user actions.
 *
 * Features:
 * - Responsive design with mobile adaptations
 * - Application counter and progress indicators
 * - Navigation links and home button
 * - Integration with routing system
 * - Context integration for applications and toaster
 */
const meta = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The main header component providing navigation, branding, and application status across all pages.',
      },
    },
  },
  argTypes: {
    // Header doesn't accept props, but we document its dependencies
    applicationsCount: {
      control: { type: 'number', min: 0, max: 10 },
      description: 'Number of applications (controlled via context)',
      table: {
        type: { summary: 'number' },
      },
    },
    screenWidth: {
      control: { type: 'number', min: 320, max: 1920 },
      description: 'Screen width for responsive testing',
      table: {
        type: { summary: 'number' },
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ToasterProvider>
          <ApplicationsProvider>
            <Story />
          </ApplicationsProvider>
        </ToasterProvider>
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

// ==================== HELPER COMPONENTS ====================

// Wrapper to control applications count in stories
const ApplicationsWrapper = ({ children, count = 0 }: { children: ReactNode; count?: number }) => {
  const { setApplications } = useApplicationsContext()

  useEffect(() => {
    setApplications(Array(count).fill({ id: 'test' }))
  }, [count, setApplications])

  return <>{children}</>
}

// Wrapper to control screen width in stories
const WidthWrapper = ({ children, width = 1200 }: { children: ReactNode; width?: number }) => {
  const [currentWidth, setCurrentWidth] = useState(width)

  useEffect(() => {
    // Mock window width
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: currentWidth,
    })
    window.dispatchEvent(new Event('resize'))
  }, [currentWidth])

  return (
    <div>
      <div style={{ marginBottom: '20px', padding: '10px', background: '#f0f0f0' }}>
        <label style={{ marginRight: '10px' }}>Screen width: {currentWidth}px</label>
        <input
          type="range"
          min={320}
          max={1920}
          value={currentWidth}
          onChange={(e) => setCurrentWidth(Number(e.target.value))}
          style={{ width: '300px' }}
        />
        <span style={{ marginLeft: '10px', color: '#666' }}>Mobile breakpoint: {DevicesWidth.MobileWidth}px</span>
      </div>
      {children}
    </div>
  )
}

// ==================== BASIC STORIES ====================

/**
 * Default header state with no applications.
 * Shows empty dots indicator.
 */
export const Default: Story = {
  render: () => (
    <ApplicationsWrapper count={0}>
      <Header />
    </ApplicationsWrapper>
  ),
}

/**
 * Header with some applications in progress.
 * Shows partially filled dots.
 */
export const WithApplications: Story = {
  render: () => (
    <ApplicationsWrapper count={3}>
      <Header />
    </ApplicationsWrapper>
  ),
}

/**
 * Header with maximum applications.
 * Shows success icon when count exceeds threshold.
 */
export const WithMaxApplications: Story = {
  render: () => (
    <ApplicationsWrapper count={ApplicationsDefaultCount.ApplicationsMaxCount + 2}>
      <Header />
    </ApplicationsWrapper>
  ),
}

// ==================== RESPONSIVE STORIES ====================

/**
 * Desktop view (1200px+)
 * Shows full header with application counter.
 */
export const DesktopView: Story = {
  render: () => (
    <WidthWrapper width={1200}>
      <ApplicationsWrapper count={3}>
        <Header />
      </ApplicationsWrapper>
    </WidthWrapper>
  ),
}

/**
 * Tablet view (768px - 1199px)
 * Still shows application counter but with adjusted spacing.
 */
export const TabletView: Story = {
  render: () => (
    <WidthWrapper width={900}>
      <ApplicationsWrapper count={3}>
        <Header />
      </ApplicationsWrapper>
    </WidthWrapper>
  ),
}

/**
 * Mobile view (< 768px)
 * Hides application counter, shows only dots and home button.
 */
export const MobileView: Story = {
  render: () => (
    <WidthWrapper width={375}>
      <ApplicationsWrapper count={3}>
        <Header />
      </ApplicationsWrapper>
    </WidthWrapper>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}

/**
 * Mobile view with many applications.
 * Shows how success icon appears on mobile.
 */
export const MobileViewWithMax: Story = {
  render: () => (
    <WidthWrapper width={375}>
      <ApplicationsWrapper count={ApplicationsDefaultCount.ApplicationsMaxCount + 2}>
        <Header />
      </ApplicationsWrapper>
    </WidthWrapper>
  ),
}
