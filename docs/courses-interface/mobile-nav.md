# MobileNav component

```tsx
import { Sheet, SheetContent, SheetTrigger } from '@hk/edu-ui';
import { Package2, PanelLeft } from 'lucide-react';

function MobileNav() {
  return (
    <Sheet>
      // Trigger Button to to toggle the SheetContent
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      // The content of nav is displayed after pressing Trigger button 
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="#"
            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary"
          >
            <Package2 className="h-5 w-5" />
            <span className="sr-only">Vercel</span>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
```
