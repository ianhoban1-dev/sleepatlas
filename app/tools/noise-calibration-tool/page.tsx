import type { Metadata } from "next";
import ToolPageLayout from "@/components/ToolPageLayout";
import NoiseCalibration from "@/components/calculators/NoiseCalibration";
import { getTool } from "@/lib/tools";

const tool = getTool("noise-calibration-tool")!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.description,
};

export default function Page() {
  return (
    <ToolPageLayout tool={tool}>
      <NoiseCalibration />
    </ToolPageLayout>
  );
}
