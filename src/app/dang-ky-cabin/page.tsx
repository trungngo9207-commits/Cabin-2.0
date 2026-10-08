import type { Metadata } from "next";
import { EmbeddedApp } from "@/components/sites/ftugate/EmbeddedApp";

export const metadata: Metadata = {
  title: "Đăng ký chỗ ngồi Cabin Tòa D",
};

export default function SeatBookingPage() {
  return <EmbeddedApp title="Đăng ký chỗ ngồi Cabin Tòa D" src="/sites/ftugate/dang-ky-cabin.html" />;
}
