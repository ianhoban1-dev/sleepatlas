"use client";

import { useEffect, useState } from "react";
import { NotebookPen, Trash2 } from "lucide-react";

interface Entry {
  id: string;
  date: string;
  shiftType: string;
  sleptHours: number;
  quality: number; // 1–5
  note: string;
}

const STORAGE_KEY = "sleep-atlas-journal";
const SHIFT_TYPES = ["Night", "Day", "Early", "Late", "Split", "Off"];

/**
 * Free-tier shift journal: entries persist in this browser only.
 * Premium tier will sync to Supabase once auth is activated.
 */
export default function ShiftJournal() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [form, setForm] = useState({
    date: "",
    shiftType: "Night",
    sleptHours: 6,
    quality: 3,
    note: "",
  });

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setEntries(JSON.parse(raw));
    } catch {
      /* storage unavailable, journal runs in memory */
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {
      /* ignore */
    }
  }, [entries, loaded]);

  function addEntry() {
    if (!form.date) return;
    setEntries([
      {
        id: crypto.randomUUID(),
        ...form,
      },
      ...entries,
    ]);
    setForm({ ...form, note: "" });
  }

  const avgSleep =
    entries.length > 0
      ? (entries.reduce((s, e) => s + e.sleptHours, 0) / entries.length).toFixed(1)
      : null;

  return (
    <div className="card-surface p-6 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label htmlFor="j-date" className="mb-1 block text-sm text-ink-muted">
            Date
          </label>
          <input
            id="j-date"
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="w-full rounded-lg border border-white/10 bg-night-700 px-3 py-2.5 text-ink"
          />
        </div>
        <div>
          <label htmlFor="j-shift" className="mb-1 block text-sm text-ink-muted">
            Shift type
          </label>
          <select
            id="j-shift"
            value={form.shiftType}
            onChange={(e) => setForm({ ...form, shiftType: e.target.value })}
            className="w-full rounded-lg border border-white/10 bg-night-700 px-3 py-2.5 text-ink"
          >
            {SHIFT_TYPES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="j-hours" className="mb-1 block text-sm text-ink-muted">
            Slept: <span className="text-ink">{form.sleptHours}h</span>
          </label>
          <input
            id="j-hours"
            type="range"
            min={0}
            max={12}
            step={0.5}
            value={form.sleptHours}
            onChange={(e) => setForm({ ...form, sleptHours: Number(e.target.value) })}
            aria-valuetext={`${form.sleptHours} hours`}
          />
        </div>
        <div>
          <label htmlFor="j-quality" className="mb-1 block text-sm text-ink-muted">
            Quality: <span className="text-ink">{form.quality}/5</span>
          </label>
          <input
            id="j-quality"
            type="range"
            min={1}
            max={5}
            value={form.quality}
            onChange={(e) => setForm({ ...form, quality: Number(e.target.value) })}
            aria-valuetext={`${form.quality} out of 5`}
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="j-note" className="mb-1 block text-sm text-ink-muted">
          Note (optional)
        </label>
        <input
          id="j-note"
          type="text"
          value={form.note}
          maxLength={140}
          placeholder="e.g. bin lorry woke me at 11am, used brown noise after"
          onChange={(e) => setForm({ ...form, note: e.target.value })}
          className="w-full rounded-lg border border-white/10 bg-night-700 px-3 py-2.5 text-ink placeholder:text-ink-faint"
        />
      </div>
      <button
        type="button"
        onClick={addEntry}
        disabled={!form.date}
        className="mt-5 flex items-center gap-2 rounded-xl bg-indigoGlow px-6 py-3 font-semibold text-night-950 transition-all hover:bg-indigoGlow-soft disabled:cursor-not-allowed disabled:opacity-40"
      >
        <NotebookPen className="h-4 w-4" aria-hidden="true" />
        Log entry
      </button>

      {entries.length > 0 && (
        <div className="mt-8">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-display text-lg font-semibold">
              Your log ({entries.length} entr{entries.length === 1 ? "y" : "ies"})
            </h3>
            {avgSleep && (
              <p className="text-sm text-ink-muted">
                Average sleep: <span className="font-semibold text-ink">{avgSleep}h</span>
              </p>
            )}
          </div>
          <ul className="space-y-3">
            {entries.map((e) => (
              <li
                key={e.id}
                className="flex items-start justify-between gap-4 rounded-xl bg-night-700 p-4"
              >
                <div>
                  <p className="font-semibold text-ink">
                    {e.date} · {e.shiftType} shift
                  </p>
                  <p className="text-sm text-ink-muted">
                    {e.sleptHours}h slept · quality {e.quality}/5
                    {e.note && <> · {e.note}</>}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setEntries(entries.filter((x) => x.id !== e.id))}
                  aria-label={`Delete entry for ${e.date}`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-ink-faint transition-colors hover:bg-white/[0.06] hover:text-red-400"
                >
                  <Trash2 className="h-4 w-4" aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="mt-6 text-xs text-ink-faint">
        Entries are stored in this browser only. Premium will add synced
        history, rolling fatigue projections and Sleep Atlas Score reports.
      </p>
    </div>
  );
}
