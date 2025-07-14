import { ThemeProvider } from "next-themes";

export default ({ children }) => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
    {children}
  </ThemeProvider>
);
