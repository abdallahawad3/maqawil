import type { Metadata } from "next";
import { Amiri, Cairo } from "next/font/google";
import "./globals.css";
// import { Navbar } from "@/components/ui/floating-navbar";
// import { Routes } from "@/data";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/header";

const geistAmiri = Amiri({
  weight: "400",
  variable: "--font-amiri-mono",
  subsets: ["arabic"],
});

const geistCairo = Cairo({
  weight: "600",
  variable: "--font-cairo-sans",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "شركة مقاولات في جدة ومكة | خبرة وجودة في التنفيذ",
  description:
    "نحن شركة مقاولات رائدة في جدة ومكة، نقدم خدمات البناء والتشييد بأعلى معايير الجودة والكفاءة. تواصل معنا لتحقيق مشاريعك باحترافية.",
  openGraph: {
    title: "شركة مقاولات في جدة ومكة",
    description: "نحن شركة مقاولات بخبرة وجودة عالية في تنفيذ المشاريع بجدة ومكة.",
    url: "https://maqawil-u3s1.vercel.app/bone-building",
    type: "website",
    images: [
      {
        url: "https://maqawil-u3s1.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F05.6274069c.webp&w=640&q=75",
        width: 1200,
        height: 630,
        alt: "شركة مقاولات في جدة ومكة",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${geistAmiri.variable} ${geistCairo.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {/* <Navbar navItems={Routes} /> */}
          <Header />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
