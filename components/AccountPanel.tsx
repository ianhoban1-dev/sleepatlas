"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { BadgeCheck, LogOut, ShieldCheck, UserRound } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";
import { logIn, logOut, setPlan, signUp } from "@/lib/auth";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-white/10 bg-night-900 px-4 py-3 text-ink placeholder:text-ink-faint focus:border-indigoGlow/60 focus:outline-none";

export default function AccountPanel() {
  const { user, admin, refresh } = useAuth();
  const [mode, setMode] = useState<"login" | "signup">("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    const result =
      mode === "signup"
        ? await signUp(name, email, password)
        : await logIn(email, password);
    setBusy(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    setName("");
    setEmail("");
    setPassword("");
    refresh();
  };

  if (user) {
    return (
      <div className="card-surface p-8">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-glow">
          <UserRound className="h-4 w-4" aria-hidden="true" />
          Signed in
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold">{user.name}</h2>
        <p className="mt-1 text-ink-muted">{user.email}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold ${
              user.plan === "premium"
                ? "bg-indigoGlow/15 text-indigoGlow-soft"
                : "bg-white/[0.06] text-ink-muted"
            }`}
          >
            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
            {user.plan === "premium" ? "Premium member" : "Free plan"}
          </span>
          {admin && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-dawn/15 px-4 py-1.5 text-sm font-semibold text-dawn">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Admin
            </span>
          )}
        </div>

        {user.plan === "free" && (
          <div className="mt-8 rounded-xl border border-indigoGlow/30 bg-night-900 p-6">
            <h3 className="font-display text-lg font-semibold">
              Unlock Mask AI Premium
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Heavy rain and fan hum layers, the personal blend questionnaire,
              saved blends and synced tracking. Payments open at launch, until
              then, founding members can activate Premium free.
            </p>
            <button
              type="button"
              onClick={() => {
                setPlan(user.email, "premium");
                refresh();
              }}
              className="mt-4 rounded-xl bg-indigoGlow px-5 py-3 font-semibold text-night-950 transition-all duration-200 hover:bg-indigoGlow-soft hover:shadow-glow"
            >
              Activate Premium (founding member)
            </button>
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/mask-ai/"
            className="rounded-xl bg-teal-glow px-5 py-3 font-semibold text-night-950 transition-all duration-200 hover:opacity-90"
          >
            Open Mask AI
          </Link>
          {admin && (
            <Link
              href="/admin/"
              className="rounded-xl border border-dawn/40 px-5 py-3 font-semibold text-dawn transition-colors hover:bg-dawn/10"
            >
              Admin dashboard
            </Link>
          )}
          <button
            type="button"
            onClick={() => {
              logOut();
              refresh();
            }}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-semibold text-ink transition-colors hover:border-white/30"
          >
            <LogOut className="h-4 w-4" aria-hidden="true" />
            Log out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card-surface p-8">
      <div className="flex gap-2" role="tablist" aria-label="Account mode">
        {(["signup", "login"] as const).map((m) => (
          <button
            key={m}
            type="button"
            role="tab"
            aria-selected={mode === m}
            onClick={() => {
              setMode(m);
              setError(null);
            }}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              mode === m
                ? "bg-indigoGlow text-night-950"
                : "border border-white/10 text-ink-muted hover:text-ink"
            }`}
          >
            {m === "signup" ? "Create account" : "Log in"}
          </button>
        ))}
      </div>

      <form onSubmit={submit} className="mt-6 space-y-4">
        {mode === "signup" && (
          <div>
            <label htmlFor="acc-name" className="text-sm font-medium text-ink-muted">
              Name
            </label>
            <input
              id="acc-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
              className={inputClass}
            />
          </div>
        )}
        <div>
          <label htmlFor="acc-email" className="text-sm font-medium text-ink-muted">
            Email
          </label>
          <input
            id="acc-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="acc-password" className="text-sm font-medium text-ink-muted">
            Password {mode === "signup" && <span className="text-ink-faint">(8+ characters)</span>}
          </label>
          <input
            id="acc-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete={mode === "signup" ? "new-password" : "current-password"}
            required
            minLength={8}
            className={inputClass}
          />
        </div>

        {error && (
          <p role="alert" className="rounded-xl bg-dawn/10 px-4 py-3 text-sm text-dawn">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={busy}
          className="w-full rounded-xl bg-indigoGlow px-6 py-3.5 font-semibold text-night-950 transition-all duration-200 hover:bg-indigoGlow-soft hover:shadow-glow disabled:opacity-50"
        >
          {busy ? "One moment…" : mode === "signup" ? "Create my account" : "Log in"}
        </button>
      </form>

      <p className="mt-5 text-xs leading-relaxed text-ink-faint">
        Accounts currently live in this browser while Sleep Atlas is in
        early access. Your password is never stored in plain text.
      </p>
    </div>
  );
}
