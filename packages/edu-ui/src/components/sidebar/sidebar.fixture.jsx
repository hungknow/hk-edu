import { SidebarGroup } from "./sidebar-group"
import { SidebarGroupLabel } from "./sidebar-group-label"
import { SidebarMenu } from "./sidebar-menu"
import { SidebarMenuItem } from "./sidebar-menu-item"
import { SidebarMenuButton } from "./sidebar-menu-button"

const DemoSidebar = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>SidebarGroupLabel</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton>
            SidebarMenuButton
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}

export default DemoSidebar