import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "ByteNoBs",
  description:
    "ByteNoBS - Your Tech Partner for No-Nonsense Solutions and Innovative Ideas",
  keywords:
    "ByteNoBS, tech solutions, innovative ideas, no-nonsense solutions, web development, application development",
  authors: [{ name: "ByteNoBS" }],
  creator: "ByteNoBS",
  publisher: "ByteNoBS",
  icons: {
    icon: "./assets/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
