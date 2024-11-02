import type { Metadata } from "next";
import "./globals.css";

import {Roboto_Mono} from '@next/font/google'
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
})

const appName = "InTouch";

const appDescription = "Stay connected with friends and the latest trends with InTouch, the app for real-time chatting and social updates in one place.";

export const metadata: Metadata = {
  title: {
    template: `%s | ${appName}`,
    default: appName
  },
  description: appDescription,
  openGraph: {
    type: "website",
    siteName: appName,
    description: appDescription,
    title: {
      template: `%s | ${appName}`,
      default: appName,
    },
  },
  twitter: {
    card: "summary",
    creator: "@wah_vanessa",
    description: appDescription,
    title: {
      template: `%s | ${appName}`,
      default: appName,
    }
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: `%s | ${appName}`,
  },
  authors: [
    {
      url: "https://github.com/rashjredmund",
      name: "Rash Edmund",
    },
    {
      url: "https://github.com/vanessa082",
      name: "Wah Vanessa",
    }
  ],
  keywords: [
    "InTouch",
    "In Touch",
    "chat",
    "messages",
    "NextJs",
    "realtime",
    "feed",
    "connected",
    "vanessa",
    "rash edmund"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"className={roboto_mono.className}>
      <body >
        {children}
      </body>
    </html>
  );
}
