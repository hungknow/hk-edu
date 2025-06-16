import { Sheet, SheetContent, SheetTrigger } from '@hk/edu-ui/sheet';
import { Button } from '@hk/edu-ui/button';
import { Package2, PanelLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="#"
            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8"
          >
            <Package2 className="h-5 w-5" />
            <span className="sr-only">Vercel</span>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
} 