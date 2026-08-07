/**
 * Supabase stub — auth and persistence hooks are scaffolded but inactive.
 *
 * To activate:
 *  1. npm install @supabase/supabase-js @supabase/ssr
 *  2. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local
 *  3. Replace the stub below with createBrowserClient / createServerClient
 *
 * All calculators run fully client-side until then; premium features
 * (saved rotas, tracking history, Sleep Atlas Score reports) gate on auth.
 */

export const supabaseEnabled = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export type SavedShiftProfile = {
  id: string;
  rotaPattern: string;
  commuteMinutes: number;
  chronotype: string;
  createdAt: string;
};

/** Placeholder API surface so components compile before Supabase is wired. */
export const auth = {
  async signIn(_email: string): Promise<{ error: string | null }> {
    return { error: "Auth is not yet enabled. Add Supabase keys to activate." };
  },
  async getUser(): Promise<null> {
    return null;
  },
};
