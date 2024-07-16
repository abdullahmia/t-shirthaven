import { Toaster } from "sonner";

import { connectDB } from "@/lib/db";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fashio Store",
  description: "The best place to buy clothes online",
};

export default async function RootLayout({ children }) {
  await connectDB();

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
