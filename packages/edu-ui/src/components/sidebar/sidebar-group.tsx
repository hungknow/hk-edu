import * as React from "react"
import { cn } from "../../lib/utils"

export function SidebarGroup({ children, className }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative flex w-full min-w-0 flex-col p-2",
        className
      )}
    >
      {children}
    </div>
  )
}
