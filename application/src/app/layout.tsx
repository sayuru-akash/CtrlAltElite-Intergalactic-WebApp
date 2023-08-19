import Header from "@/components/header/header";

import type { Metadata } from "next";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "@/components/footer/footer";
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
    <html lang="en" className="scroll-smooth">
      <body>
        <Header navigationLinks={navigationLinks} />
        {children}
        <Footer navigationLinks={navigationLinks} />
      </body>
    </html>
  );
}
