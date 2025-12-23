import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cedar Core | Digital Excellence",
  description:
    "Cedar Core delivers innovative software solutions that transform ideas into powerful digital experiences. Web development, mobile apps, and more.",
  icons: {
    icon: "/logo-dark.png",
    shortcut: "/logo-dark.png",
    apple: "/logo-dark.png",
  },
  openGraph: {
    title: "Cedar Core | Digital Excellence",
    description:
      "Cedar Core delivers innovative software solutions that transform ideas into powerful digital experiences.",
    images: [
      {
        url: "/logo-dark.png",
        width: 512,
        height: 512,
        alt: "Cedar Core Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cedar Core | Digital Excellence",
    description:
      "Cedar Core delivers innovative software solutions that transform ideas into powerful digital experiences.",
    images: ["/logo-dark.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
