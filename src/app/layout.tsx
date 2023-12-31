import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Steroxy",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-950 text-slate-200">
      <body className={inter.className}>
        <Layout>
          <div>
            <Header />
            {children}
          </div>
        </Layout>
      </body>
    </html>
  );
}
