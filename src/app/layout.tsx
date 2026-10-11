import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { PortalShell } from "@/components/sites/ftugate/PortalShell";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "[DEMO] Cabin Tòa D · KAIZENZ",
    template: "%s · [DEMO] Cabin Tòa D",
  },
  description: "Bản demo của nhóm 3 KAIZENZ: chức năng đặt chỗ Cabin Tòa D trong giao diện kiểu FTU Gate. Không phải hệ thống chính thức.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full">
        <PortalShell>{children}</PortalShell>
      </body>
    </html>
  );
}
