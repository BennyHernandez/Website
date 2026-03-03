import type { Metadata } from "next";
import { Roboto, Roboto_Mono, Fjalla_One } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: "400",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const fjalla = Fjalla_One({
  weight: "400",
  variable: "--font-fjalla",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Benny Hernandez",
  description:
    "Benny Hernandez is a lighting designer, programmer and maker based in Long Beach, California. View his portfolio of work, read his blog, or get in touch to learn more about his projects and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoMono.variable} ${fjalla.variable} antialiased`}
      >
        {children}
        <GoogleAnalytics gaId="G-TVGM745SLP"/>
      </body>
    </html>
  );
}
