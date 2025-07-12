import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip"

const sidebarMenuButtonVariants = cva(
  "flex w-full items-center gap-2 rounded-md px-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring disabled:pointer-events-none disabled:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0 [&>span:last-child]:truncate",
  {
    variants: {
      variant: {
        default: "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium",
        outline: "border border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium",
      },
      size: {
        default: "h-8",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface SidebarMenuButtonProps extends React.ComponentProps<"button">, VariantProps<typeof sidebarMenuButtonVariants> {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
}

function SidebarMenuButton({
  variant = "default",
  size = "default",
  asChild = false,
  isActive = false,
  tooltip,
  ...props
}: SidebarMenuButtonProps) {
  const Comp = asChild ? Slot : "button"

  const buttonElement = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }))}
      {...props}
    />
  )

  if (!tooltip) {
    return buttonElement
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {buttonElement}
      </TooltipTrigger>
      <TooltipContent 
        side="right" 
        {...(typeof tooltip === "object" ? tooltip : {})}
      >
        {typeof tooltip === "string" ? tooltip : undefined}
      </TooltipContent>
    </Tooltip>
  )
}

export { SidebarMenuButton, sidebarMenuButtonVariants }
