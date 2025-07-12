## Technical Stack for React
- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS with shadcn/ui components
- **Icons**: Lucide React
- **State Management**: React Context + Custom Hooks
- **Testing**: Jest + React Testing Library + Playwright
- **TypeScript**: Strict mode enabled

## UI Components
The core components **aren't** imported directly from **shadcn/ui**. The list of core components **must** be imported in `@hk/edu-ui` package. @hk/edu-ui is the wrapper for core component of shadcn/ui with custom styles.
