"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BadgeCheck, ShieldCheck, Users } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";
import { AUTH_EVENT, listUsers, setPlan, type AtlasUser } from "@/lib/auth";

export default function AdminDashboard() {
  const { user, admin } = useAuth();
  const [members, setMembers] = useState<AtlasUser[]>([]);

  const load = () => setMembers(listUsers());

  useEffect(() => {
    load();
    window.addEventListener(AUTH_EVENT, load);
    window.addEventListener("storage", load);
    return () => {
      window.removeEventListener(AUTH_EVENT, load);
      window.removeEventListener("storage", load);
    };
  }, []);

  if (!admin) {
    return (
      <div className="card-surface p-8">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sand-ink">
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          Restricted area
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold">
          Admin access only
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          {user
            ? "This account doesn't have admin access."
            : "Log in with the admin account to view the member dashboard."}
        </p>
        <Link
          href="/account/"
          className="btn-primary btn-lg mt-6"
        >
          Go to account
        </Link>
      </div>
    );
  }

  const premiumCount = members.filter((m) => m.plan === "premium").length;

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Total members", value: members.length },
          { label: "Premium", value: premiumCount },
          { label: "Free", value: members.length - premiumCount },
        ].map((stat) => (
          <div key={stat.label} className="card-surface p-6">
            <p className="text-sm text-ink-muted">{stat.label}</p>
            <p className="mt-1 font-display text-4xl font-medium">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Members table */}
      <div className="card-surface overflow-x-auto p-6">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sage-deep">
          <Users className="h-4 w-4" aria-hidden="true" />
          Members
        </p>
        {members.length === 0 ? (
          <p className="mt-4 text-sm text-ink-faint">
            No signups yet. Accounts created on this site will appear here.
          </p>
        ) : (
          <table className="mt-4 w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-ink/10 text-ink-faint">
                <th scope="col" className="py-3 pr-4 font-medium">Name</th>
                <th scope="col" className="py-3 pr-4 font-medium">Email</th>
                <th scope="col" className="py-3 pr-4 font-medium">Plan</th>
                <th scope="col" className="py-3 pr-4 font-medium">Joined</th>
                <th scope="col" className="py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {members.map((m) => (
                <tr key={m.id} className="border-b border-ink/[0.05]">
                  <td className="py-3 pr-4 font-medium text-ink">{m.name}</td>
                  <td className="py-3 pr-4 text-ink-muted">{m.email}</td>
                  <td className="py-3 pr-4">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
                        m.plan === "premium"
                          ? "bg-sage/15 text-sage-deep"
                          : "bg-ink/[0.06] text-ink-muted"
                      }`}
                    >
                      <BadgeCheck className="h-3 w-3" aria-hidden="true" />
                      {m.plan}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-ink-muted">
                    {new Date(m.joined).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="py-3">
                    <button
                      type="button"
                      onClick={() => {
                        setPlan(m.email, m.plan === "premium" ? "free" : "premium");
                        load();
                      }}
                      className="rounded-lg border border-ink/15 px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-sage/50"
                    >
                      {m.plan === "premium" ? "Downgrade" : "Upgrade"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <p className="rounded-xl border border-ink/[0.06] bg-paper p-5 text-sm leading-relaxed text-ink-faint">
        Early-access note: while Sleyp runs without a database, this
        dashboard shows accounts created in this browser. Once Supabase is
        connected, every signup from every visitor will appear here.
      </p>
    </div>
  );
}
