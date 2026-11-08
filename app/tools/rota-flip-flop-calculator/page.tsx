import type { Metadata } from "next";
import ToolPageLayout from "@/components/ToolPageLayout";
import RotaFlipFlop from "@/components/calculators/RotaFlipFlop";
import { getTool } from "@/lib/tools";

const tool = getTool("rota-flip-flop-calculator")!;

export const metadata: Metadata = {
  alternates: { canonical: "/tools/rota-flip-flop-calculator/" },
  title: tool.name,
  description: tool.description,
};

export default function Page() {
  return (
    <ToolPageLayout tool={tool}>
      <RotaFlipFlop />
    </ToolPageLayout>
  );
}
