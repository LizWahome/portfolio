import type { Metadata } from "next";
import "@fontsource/dm-serif-display/400.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import { site } from "@/data/site";

const description =
  "Data Analyst with a Mathematics & Computer Science background and professional software engineering experience. SQL, Python and Power BI portfolio.";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"), // replace once a custom domain is set
  title: `${site.name}, Data Analyst`,
  description,
  openGraph: {
    title: `${site.name}, Data Analyst`,
    description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}, Data Analyst`,
    description,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-bg text-text">{children}</body>
    </html>
  );
}
