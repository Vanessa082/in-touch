import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  ClerkProvider,
  // SignInButton,
  // SignedIn,
  // SignedOut,
  // ClerkLoaded,
  // ClerkLoading,
  // UserButton,
} from "@clerk/nextjs";

import "./globals.css";
import ThemeProvider from "@/components/themes/themes-provider";

// import {Roboto_Mono} from '@next/font/google'
// const roboto_mono = Roboto_Mono({
//   subsets: ['latin'],
//   weight: ['400', '700'],
//   display: 'swap'
// })

const geistSans = localFont({
  src: "../core/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../core/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const appName = "InTouch";

const appDescription =
  "Stay connected with friends and the latest trends with InTouch, the app for real-time chatting and social updates in one place.";

export const metadata: Metadata = {
  title: {
    template: `%s | ${appName}`,
    default: appName,
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
    },
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
    },
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
    "rash edmund",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {/* <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

          <ClerkLoading>
            <div>Loading...</div>
          </ClerkLoading>

          <ClerkLoaded>
            <div>Content Loaded</div>
          </ClerkLoaded> */}
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
