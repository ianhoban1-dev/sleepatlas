import type { Metadata } from "next";
import AdminDashboard from "@/components/AdminDashboard";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "FIELD member administration.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <>
      <div className="field-wash">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <h1 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
            Admin dashboard
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Who&apos;s signed up, and who&apos;s on which plan.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-4 pb-24 sm:px-6">
        <AdminDashboard />
      </div>
    </>
  );
}
