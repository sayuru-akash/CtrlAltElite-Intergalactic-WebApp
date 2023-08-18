import Header from "@/components/header/header";

import type { Metadata } from "next";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const navigationLinks = [
  { text: "HOME", href: "/" },
  { text: "BOOKING HISTORY", href: "/history" },
  { text: "MY ACCOUNT", href: "/account" },
];

export const metadata: Metadata = {
  title: "Inertgalactic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Pass the navigationLinks to the Header component */}
        <Header navigationLinks={navigationLinks} />
        {children}
      </body>
    </html>
  );
}
