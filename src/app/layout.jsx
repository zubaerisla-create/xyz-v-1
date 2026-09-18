import "@/index.css";
import ClientProviders from "@/components/ClientProviders";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Abdullah Al Zubaer | Full Stack & Mobile Engineer",
  description:
    "Official Portfolio of Abdullah Al Zubaer - Full Stack Developer specialized in React, Next.js, Node.js, React Native, Flutter, AWS Cloud, and High-Performance Architecture.",
  keywords: [
    "Abdullah Al Zubaer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Native Engineer",
    "Flutter Mobile Developer",
    "Dhaka Bangladesh Developer",
    "Software Engineer Portfolio"
  ],
  authors: [{ name: "Abdullah Al Zubaer" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
