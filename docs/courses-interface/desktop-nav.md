# DesktopNav component

This is the HTML and React structure of DesktopNav React component.

```tsx
import Link from 'next/link';
import {
  Home,
  Setting,
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@hk/edu-ui';

function DesktopNav() {
  return (
  <aside className="fixed">
    // The Navigation at top
    <nav className="flex flex-col items-center">
      // Each Nav item is wrapped in NavItem
      <SidebarNavItem href="#" label="Dashboard">
        <Home className="h-5 w-5" />
      </SidebarNavItem>
    </nav>

    // The navigation at bottom
    <nav className="mt-auto flex flex-col items-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center"
          >
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Settings</TooltipContent>
      </Tooltip>
    </nav>
  </aside>
  )
}
```