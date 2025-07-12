# Sidebar Components Overview

This document describes the sidebar components that will be implemented in the `@hk/edu-ui` package and their UI/UX requirements.

## File structure
```markdown
packages/edu-ui/src/components/
  sidebar/
    sidebar-group.tsx
    sidebar-group-label.tsx
    sidebar-menu.tsx
    // Other components related to Sidebar in the same folder
```

## Technical Implementation Details

### SidebarMenu Component Structure
- **File Location**: `packages/edu-ui/src/components/sidebar-menu/sidebar-menu.tsx`
- **Export Path**: `packages/edu-ui/src/components/index.ts`
- **Package Export**: Available from `@hk/edu-ui` package

### Dependencies
- **Utils**: Uses `cn` utility from `../../lib/utils` for className merging

### Data Attributes for Styling
The component includes specific data attributes that can be used for CSS targeting:
- `data-slot="sidebar-menu"`: Primary identifier for the component
- `data-sidebar="menu"`: Context identifier for sidebar-specific styling

### TypeScript Interface
```typescript
// Props interface (extends React.ComponentProps<"ul">)
interface SidebarMenuProps extends React.ComponentProps<"ul"> {
  className?: string;
  children?: React.ReactNode;
  // ... all other ul element props
}
```

### Component Function Signature
```typescript
function SidebarMenu({ 
  className, 
  ...props 
}: React.ComponentProps<"ul">): JSX.Element
```
## Component List

The sidebar system consists of the following components:
- `SidebarGroup` - Container for grouping related sidebar items
- `SidebarGroupLabel` - Label for sidebar groups
- `SidebarMenu` - Container for sidebar menu items
- `SidebarMenuAction` - Action button for sidebar menu items (e.g., dropdown triggers)
- `SidebarMenuButton` - Primary button for sidebar menu items
- `SidebarMenuItem` - Individual menu item container
- `SidebarMenuSub` - Container for sub-menu items
- `SidebarMenuSubItem` - Individual sub-menu item
- `SidebarMenuSubButton` - Button for sub-menu items

## Component Specifications

### SidebarGroup
**Purpose**: Container component that groups related sidebar items together with visual separation.

**UI/UX Requirements**:
- **Spacing**: 16px margin between groups
- **Visual Separation**: Subtle border or background color difference
- **Accessibility**: Proper ARIA labeling for screen readers
- **Responsive**: Maintains spacing on all screen sizes

**Props**:
```typescript
interface SidebarGroupProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  className?: string;
}
```

### SidebarGroupLabel
**Purpose**: Provides a descriptive label for a group of sidebar items.

**UI/UX Requirements**:
- **Typography**: Extra small text (text-xs) with medium font weight and 70% opacity
- **Height**: Fixed 8px height with flex layout for vertical centering
- **Padding**: 8px horizontal padding (px-2)
- **Border**: Rounded corners (rounded-md)
- **Focus**: Hidden outline with focus-visible ring-2 styling
- **Icons**: 16px size (size-4) with shrink-0 to prevent resizing
- **Transitions**: 200ms ease-linear transitions for margin and opacity changes
- **Collapsible State**: Negative top margin (-mt-8) and opacity-0 when in icon-only mode
- **Accessibility**: Supports asChild pattern for composition

**Props**:
```typescript
interface SidebarGroupLabelProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}
```

**Implementation Details**:
- Uses Radix UI Slot for composition pattern
- Extends all div props for maximum flexibility
- Supports collapsible sidebar states with group-data attributes
- Uses CSS custom properties for theming (--sidebar-foreground, --sidebar-ring)

### SidebarMenu
**Purpose**: Container for sidebar menu items that provides consistent spacing and layout.

**UI/UX Requirements**:
- **Spacing**: 4px gap between menu items
- **Layout**: Vertical flex layout
- **Responsive**: Adapts to sidebar collapsed/expanded states
- **Width**: Full width, min width is 0
- **Data Attributes**: Includes `data-slot="sidebar-menu"` and `data-sidebar="menu"` for styling and identification

**Props**: `React.ComponentProps<"ul">`

**Implementation Details**:
- Extends all ul props for maximum flexibility

### SidebarMenuItem
**Purpose**: Container for individual sidebar menu items that provides consistent styling and behavior. The parent of this component is SidebarMenu.

**UI/UX Requirements**:
- **Layout**: Relative positioning with group context for hover states
- **Data Attributes**: Includes `data-slot="sidebar-menu-item"` and `data-sidebar="menu-item"` for styling and identification
- **Group Context**: Uses `group/menu-item` class for coordinated hover effects with child components

**Props**: `React.ComponentProps<"li">`

**Implementation Details**:
- Extends all li props for maximum flexibility
- Provides group context for coordinated hover states with child components like SidebarMenuAction

### SidebarMenuButton
**Purpose**: Primary interactive element for navigation and actions within sidebar items.

**UI/UX Requirements**:
- **Size**: 32px height, flexible width
- **Padding**: 8px horizontal padding
- **Icons**: 16px icon size with 8px spacing to text
- **Hover States**: Background color change and text color change
- **Active States**: Accent background color for active state
- **Focus**: Clear focus ring for keyboard navigation
- **Tooltips**: Show on hover when sidebar is collapsed

**Props**:
```typescript
interface SidebarMenuButtonProps {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  tooltip?: string;
  onClick?: () => void;
}
```

### SidebarMenuAction
**Purpose**: Secondary action button (e.g., dropdown triggers, more options) within menu items.

**UI/UX Requirements**:
- **Size**: 24px square button
- **Positioning**: Right-aligned within menu item
- **Visibility**: Show on hover or always visible based on prop
- **Icons**: 14px icon size
- **Hover States**: Subtle background color change
- **Accessibility**: Proper ARIA labels for actions

**Props**:
```typescript
interface SidebarMenuActionProps {
  children: React.ReactNode;
  className?: string;
  showOnHover?: boolean;
  onClick?: () => void;
}
```

### SidebarMenuSub
**Purpose**: Container for sub-menu items that appear when parent items are expanded.

**UI/UX Requirements**:
- **Indentation**: 16px left margin from parent
- **Spacing**: 2px gap between sub-items
- **Animation**: Smooth expand/collapse animation
- **Visual Hierarchy**: Muted colors to show subordination

**Props**:
```typescript
interface SidebarMenuSubProps {
  children: React.ReactNode;
  className?: string;
}
```

### SidebarMenuSubItem
**Purpose**: Container for individual sub-menu items.


**UI/UX Requirements**:
- **Height**: 32px height (smaller than main items)
- **Padding**: 8px horizontal padding
- **Hover States**: Subtle background color change
- **Active States**: Clear visual indication for active sub-items

**Props**:
```typescript
interface SidebarMenuSubItemProps {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
}
```

### SidebarMenuSubButton
**Purpose**: Interactive element for sub-menu items.

**UI/UX Requirements**:
- **Size**: 28px height, flexible width
- **Padding**: 6px horizontal padding
- **Typography**: Smaller font size than main items
- **Hover States**: Background color change
- **Active States**: Accent background color for active state

**Props**:
```typescript
interface SidebarMenuSubButtonProps {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  onClick?: () => void;
}
```

## Usage Examples

### Basic Sidebar with Grouped Items
```tsx
import { SidebarGroup, SidebarGroupLabel, SidebarMenu } from '@hk/edu-ui'

<SidebarGroup>
  <SidebarGroupLabel>Projects</SidebarGroupLabel>
  <SidebarMenu>
    {projects.map((item) => (
      <SidebarMenuItem key={item.name}>
        <SidebarMenuButton asChild>
          <a href={item.url}>
            <item.icon />
            <span>{item.name}</span>
          </a>
        </SidebarMenuButton>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuAction showOnHover>
              <MoreHorizontal />
              <span className="sr-only">More</span>
            </SidebarMenuAction>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-48 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align={isMobile ? "end" : "start"}
          >
            <DropdownMenuItem>
              <Folder className="text-muted-foreground" />
              <span>View Project</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Forward className="text-muted-foreground" />
              <span>Share Project</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Trash2 className="text-muted-foreground" />
              <span>Delete Project</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    ))}
  </SidebarMenu>
</SidebarGroup>
```

### Collapsible Menu Items with Sub-items
```tsx
{menuItemsWithSubItems.map((item) => (
  <Collapsible
    key={item.title}
    asChild
    defaultOpen={item.isActive}
    className="group/collapsible"
  >
    <SidebarMenuItem>
      <CollapsibleTrigger asChild>
        <SidebarMenuButton tooltip={item.title}>
          {item.icon && <item.icon />}
          <span>{item.title}</span>
          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
        </SidebarMenuButton>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SidebarMenuSub>
          {item.items?.map((subItem) => (
            <SidebarMenuSubItem key={subItem.title}>
              <SidebarMenuSubButton asChild>
                <a href={subItem.url}>
                  <span>{subItem.title}</span>
                </a>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      </CollapsibleContent>
    </SidebarMenuItem>
  </Collapsible>
))}
```

## Design System Integration

### Color Variables
The sidebar components use the following CSS custom properties:
- `--sidebar`: Background color
- `--sidebar-foreground`: Text color
- `--sidebar-primary`: Primary accent color
- `--sidebar-primary-foreground`: Text color on primary background
- `--sidebar-accent`: Secondary accent color
- `--sidebar-accent-foreground`: Text color on accent background
- `--sidebar-border`: Border color
- `--sidebar-ring`: Focus ring color

### Responsive Behavior
- **Desktop (1024px+)**: Full sidebar with text labels
- **Tablet (768px-1023px)**: Collapsible sidebar with tooltips
- **Mobile (<768px)**: Overlay sidebar or bottom navigation

### Accessibility Requirements
- **Keyboard Navigation**: Full keyboard support with arrow keys
- **Screen Readers**: Proper ARIA labels and roles
- **Focus Management**: Clear focus indicators
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Reduced Motion**: Respect user's motion preferences

### Animation Guidelines
- **Transitions**: 200ms ease-in-out for hover states
- **Expansions**: 300ms ease-out for collapsible content
- **Tooltips**: 150ms fade-in animation
- **Reduced Motion**: Disable animations when user prefers reduced motion

## Development Guidelines

### Testing Considerations
- **Component Testing**: Test rendering with various props combinations
- **Accessibility Testing**: Ensure proper ARIA attributes and keyboard navigation
- **Styling Testing**: Verify CSS classes are applied correctly
- **Integration Testing**: Test with parent components (SidebarGroup, etc.)

### Common Use Cases
1. **Simple Navigation**: Basic list of navigation items
2. **Interactive Items**: Menu items with click handlers
3. **Custom Styling**: Override default styles with className prop
4. **Data Attributes**: Use for testing and additional styling hooks

### Performance Considerations
- **Minimal Re-renders**: Component uses React.memo pattern implicitly
- **CSS-in-JS**: Uses TailwindCSS for optimal performance
- **Bundle Size**: Minimal dependencies, only React and utils

### Browser Support
- **Modern Browsers**: Full support for flexbox and CSS Grid
- **Data Attributes**: Supported in all modern browsers
- **CSS Custom Properties**: Fallback support for older browsers

### Accessibility Features
- **Semantic HTML**: Uses `<ul>` element for proper list semantics
- **ARIA Support**: Accepts all ARIA attributes through props spreading
- **Keyboard Navigation**: Supports standard list navigation
- **Screen Reader**: Proper list structure for screen readers
