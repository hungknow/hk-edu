### DashboardLayout component

The template of component and HTML structure of DashboardLayout
```tsx
function DashboardLayout() {
  return (
    <main>
      // The sidebar on the left
      <DesktopNav>

      // The full content on the right
      <div>
        // Header display MobileNav, Breadcrumb
        <header>
          <MobileNav>
          <DashboardBreadcrumb />
        </header>

        // Display the main content of selected route
        <main>
          {children}
        </main>
      </div>
    </main>
  )
}
```

