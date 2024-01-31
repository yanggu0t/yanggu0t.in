import Index from "@/components/index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "首頁",
};

export default function Home() {
  return (
    <main>
      <Index />
    </main>
  );
}
