import HelpCenterFooter from "@/components/molecules/footer";
import CheckinHelpCenterHeader from "@/components/molecules/header";
import { siteConfig } from "@/config/site";
import StyledComponentsRegistry from "@/lib/registry";
import Head from "next/head";
import "../styles/globals.css";

// const font = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "white" }],
  viewport: "width=device-width, initial-scale=1",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta rel="icon" content="/favicon.svg" property="og:image" />
      </Head>
      <body>
        <div style={{ flex: 1, }}>
          <CheckinHelpCenterHeader />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </div>
        <HelpCenterFooter />
      </body>
    </html>
  );
}
