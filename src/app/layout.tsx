import type { Metadata } from "next";
import { Roboto, Roboto_Mono, Fjalla_One } from "next/font/google";
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
  description: "Benny Hernandez",
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
      </body>
    </html>
  );
}
