import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import PosthogProvider from "@/components/posthog-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Yanggu0t 曾暘鈞",
    default: "Portfolio | Yanggu0t 曾暘鈞", // a default is required when creating a template
  },
  description:
    "我是曾暘鈞，畢業於僑光科技大學資訊科技系，是一名喜歡使用 Next.js 和 Tailwind CSS 構建專案的前端工程師，有任何需要可以聯繫我。",
  metadataBase: new URL("https://yanggu0t.in"),
  openGraph: {
    title: "Portfolio | Yanggu0t 曾暘鈞",
    description:
      "我是曾暘鈞，畢業於僑光科技大學資訊科技系，是一名喜歡使用 Next.js 和 Tailwind CSS 構建專案的前端工程師，有任何需要可以聯繫我。",
    url: "https://yanggu0t.in",
    siteName: "Portfolio | Yanggu0t 曾暘鈞",
    images: [
      {
        url: "https://yanggu0t.in/preview.jpeg",
        alt: "Portfolio | Yanggu0t 曾暘鈞",
        width: 1460,
        height: 830,
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      url: "/favicon.ico",
    },
  },
  manifest: "https://yanggu0t.in/manifest.json",
  verification: {
    google: "google",
    yahoo: "yahoo",
    // other: {
    //   me: ["support@yanggu0t.in", "https://yanggu0t.in"],
    // },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <PosthogProvider>
        <body className=" bg-slate-50 dark:bg-slate-950">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
        </body>
      </PosthogProvider>
    </html>
  );
}
