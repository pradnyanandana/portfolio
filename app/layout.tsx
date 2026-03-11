import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pradnyanandana.github.io"),
  title: {
    default: "Pradnyanandana | Portfolio",
    template: "%s | Pradnyanandana Portfolio",
  },
  description:
    "Pradnyanandana – Web, Backend & WordPress Developer based in Bali, Indonesia. Specializing in PHP, JavaScript, and Python.",
  keywords: [
    "Pradnyanandana",
    "Web Developer",
    "Backend Developer",
    "WordPress Developer",
    "Bali",
    "Indonesia",
    "PHP",
    "JavaScript",
    "Python",
    "React",
  ],
  authors: [{ name: "Pradnyanandana" }],
  creator: "Pradnyanandana",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pradnyanandana.github.io/portfolio",
    siteName: "Pradnyanandana Portfolio",
    title: "Pradnyanandana | Web, Backend & WordPress Developer",
    description:
      "Pradnyanandana – Web, Backend & WordPress Developer based in Bali, Indonesia.",
    images: [
      {
        url: "/images/logo/logo-light-name192.png",
        width: 192,
        height: 192,
        alt: "Pradnyanandana Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Pradnyanandana | Web, Backend & WordPress Developer",
    description:
      "Pradnyanandana – Web, Backend & WordPress Developer based in Bali, Indonesia.",
    images: ["/images/logo/logo-light-name192.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
