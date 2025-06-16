import Link from 'next/link';
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@hk/edu-ui/tooltip';
import { cn } from '@/lib/utils';

interface SidebarNavItemProps {
  href: string;
  label: string;
  children: React.ReactNode;
  asChild?: boolean;
}

export function SidebarNavItem({ href, label, children, asChild }: SidebarNavItemProps) {
  const Comp = asChild ? Link : "a";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Comp
          href={href}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          )}
        >
          {children}
          <span className="sr-only">{label}</span>
        </Comp>
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  );
} 