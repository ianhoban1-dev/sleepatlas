import type { Metadata } from "next";
import ToolPageLayout from "@/components/ToolPageLayout";
import ChronotypeMatcher from "@/components/calculators/ChronotypeMatcher";
import { getTool } from "@/lib/tools";

const tool = getTool("chronotype-rota-matcher")!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.description,
};

export default function Page() {
  return (
    <ToolPageLayout tool={tool}>
      <ChronotypeMatcher />
    </ToolPageLayout>
  );
}
