import type { Metadata } from "next";
import ToolPageLayout from "@/components/ToolPageLayout";
import NightShiftRecovery from "@/components/calculators/NightShiftRecovery";
import { getTool } from "@/lib/tools";

const tool = getTool("night-shift-recovery-calculator")!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.description,
};

export default function Page() {
  return (
    <ToolPageLayout tool={tool}>
      <NightShiftRecovery />
    </ToolPageLayout>
  );
}
