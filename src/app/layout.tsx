import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Hệ thống quản lý giảng dạy và học tập (bản demo)",
  description: "Bản dựng lại cục bộ của FTU Gate kèm chức năng đặt chỗ Cabin Tòa D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
