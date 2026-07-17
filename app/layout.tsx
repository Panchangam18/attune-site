import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://attune-site.openai.site"),
  title: "Attune",
  description:
    "Tis a good day to Attune.",
  openGraph: {
    title: "Attune",
    description: "Tis a good day to Attune.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Attune",
    description: "Tis a good day to Attune.",
  },
  icons: {
    icon: "/attune-logo.svg",
    shortcut: "/attune-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
