import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://attune-site.openai.site"),
  title: "Attune",
  description:
    "Download Attune, a desktop control panel for the Attune live CSS runtime.",
  openGraph: {
    title: "Attune",
    description:
      "Download Attune, a desktop control panel for live CSS sessions.",
    images: ["/og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Attune",
    description:
      "Download Attune, a desktop control panel for live CSS sessions.",
    images: ["/og.png"],
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
