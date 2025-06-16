#### DashboardBreadcrumb component

```tsx
import { Breadcrumb, BreadcrumbList } from '@hk/edu-ui'

function DashboardBreadcrumb {
  return (
    <Breadcrumb>
      <BreadcrumbList>
      
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="#">Dashboard</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        
        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="#">Products</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

      </BreadcrumbList>
    </Breadcrumb>
  )
}
```