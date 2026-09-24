import type { Metadata } from "next";
import AdminDashboard from "@/components/AdminDashboard";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Sleyp member administration.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <>
      <div className="sleyp-wash">
        <div className="mx-auto max-w-site px-5 py-16 sm:px-8 md:py-20">
          <p className="eyebrow eyebrow-rule mb-6">Admin</p>
          <h1 className="display-lg">
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
