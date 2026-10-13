import type { Metadata } from "next";
import { EmbeddedApp } from "@/components/sites/ftugate/EmbeddedApp";

export const metadata: Metadata = {
  title: "Mô hình 3D Container Tòa D",
};

export default function ModelPage() {
  return <EmbeddedApp title="Mô hình 3D Container Tòa D" src="/sites/ftugate/cabin-toa-d.html" />;
}
