import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import AccountPanel from "@/components/AccountPanel";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Your Account",
  description:
    "Create a free Sleep Atlas account or log in to manage your plan, unlock Mask AI Premium blends and keep your shift tracking in one place.",
  robots: { index: false },
};

export default function AccountPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Account", path: "/account/" },
        ])}
      />
      <div className="aurora">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Your account
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            One account for Mask AI blends, saved rota profiles and your Sleep
            Atlas Score history.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-xl px-4 pb-24 sm:px-6">
        <AccountPanel />
      </div>
    </>
  );
}
