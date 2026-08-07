import type { Metadata } from "next";
import ToolPageLayout from "@/components/ToolPageLayout";
import SleepDebtLogger from "@/components/calculators/SleepDebtLogger";
import { getTool } from "@/lib/tools";

const tool = getTool("sleep-debt-fatigue-logger")!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.description,
};

export default function Page() {
  return (
    <ToolPageLayout tool={tool}>
      <SleepDebtLogger />
    </ToolPageLayout>
  );
}
