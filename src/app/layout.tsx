import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artistic Reno - Construction & Renovation Experts",
  description: "Professional construction and renovation services in the GTA. Specializing in residential and commercial projects with over 25 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning data-gramm="false" data-gramm_editor="false" data-enable-grammarly="false">
      <head>
        <meta name="grammarly-disable-indicator" content="true" />
        <meta name="grammarly-disable" content="true" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Disable Grammarly on this page to prevent hydration errors
              window.addEventListener('DOMContentLoaded', function() {
                document.documentElement.setAttribute('data-gramm', 'false');
                document.documentElement.setAttribute('data-gramm_editor', 'false');
                document.documentElement.setAttribute('data-enable-grammarly', 'false');
              });
            `,
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning data-gramm="false">
        {children}
      </body>
    </html>
  );
}
