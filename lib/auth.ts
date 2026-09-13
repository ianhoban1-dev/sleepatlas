/**
 * FIELD: demo authentication store.
 *
 * DEMO MODE: accounts live in this browser's localStorage so the full
 * signup → premium → admin flow works today with zero backend setup.
 * Passwords are salted + SHA-256 hashed (never stored in plain text).
 *
 * SWAPPING IN SUPABASE LATER: replace the bodies of signUp / logIn /
 * logOut / getSessionUser / listUsers / setPlan with Supabase Auth +
 * a `profiles` table. Every component calls only these functions, so
 * nothing else changes.
 */

export type Plan = "free" | "premium";

export interface AtlasUser {
  id: string;
  name: string;
  email: string;
  plan: Plan;
  joined: string; // ISO date
}

interface StoredUser extends AtlasUser {
  passwordHash: string;
}

const USERS_KEY = "sleep-atlas-users";
const SESSION_KEY = "sleep-atlas-session";
const SALT = "sleep-atlas-demo-salt";

/** Admin access is keyed to this email, no password lives in code. */
export const ADMIN_EMAIL = "ianhoban1@gmail.com";

export const AUTH_EVENT = "sleep-atlas-auth-change";

function isBrowser() {
  return typeof window !== "undefined";
}

function readUsers(): StoredUser[] {
  if (!isBrowser()) return [];
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) ?? "[]") as StoredUser[];
  } catch {
    return [];
  }
}

function writeUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  window.dispatchEvent(new Event(AUTH_EVENT));
}

async function hashPassword(password: string): Promise<string> {
  const data = new TextEncoder().encode(SALT + password);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function toPublic(u: StoredUser): AtlasUser {
  return { id: u.id, name: u.name, email: u.email, plan: u.plan, joined: u.joined };
}

export function getSessionUser(): AtlasUser | null {
  if (!isBrowser()) return null;
  const email = localStorage.getItem(SESSION_KEY);
  if (!email) return null;
  const user = readUsers().find((u) => u.email === email);
  return user ? toPublic(user) : null;
}

export async function signUp(
  name: string,
  email: string,
  password: string,
  plan: Plan = "free"
): Promise<{ ok: true; user: AtlasUser } | { ok: false; error: string }> {
  const cleanEmail = email.trim().toLowerCase();
  if (!name.trim()) return { ok: false, error: "Please enter your name." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail))
    return { ok: false, error: "Please enter a valid email address." };
  if (password.length < 8)
    return { ok: false, error: "Password needs at least 8 characters." };

  const users = readUsers();
  if (users.some((u) => u.email === cleanEmail))
    return { ok: false, error: "An account with that email already exists, log in instead." };

  const user: StoredUser = {
    id: crypto.randomUUID(),
    name: name.trim(),
    email: cleanEmail,
    plan,
    joined: new Date().toISOString(),
    passwordHash: await hashPassword(password),
  };
  users.push(user);
  writeUsers(users);
  localStorage.setItem(SESSION_KEY, cleanEmail);
  window.dispatchEvent(new Event(AUTH_EVENT));
  return { ok: true, user: toPublic(user) };
}

export async function logIn(
  email: string,
  password: string
): Promise<{ ok: true; user: AtlasUser } | { ok: false; error: string }> {
  const cleanEmail = email.trim().toLowerCase();
  const user = readUsers().find((u) => u.email === cleanEmail);
  if (!user) return { ok: false, error: "No account found with that email." };
  const hash = await hashPassword(password);
  if (hash !== user.passwordHash)
    return { ok: false, error: "Incorrect password, please try again." };
  localStorage.setItem(SESSION_KEY, cleanEmail);
  window.dispatchEvent(new Event(AUTH_EVENT));
  return { ok: true, user: toPublic(user) };
}

export function logOut() {
  if (!isBrowser()) return;
  localStorage.removeItem(SESSION_KEY);
  window.dispatchEvent(new Event(AUTH_EVENT));
}

/** Admin only: every account created in this browser. */
export function listUsers(): AtlasUser[] {
  return readUsers()
    .map(toPublic)
    .sort((a, b) => (a.joined < b.joined ? 1 : -1));
}

export function setPlan(email: string, plan: Plan) {
  const users = readUsers();
  const user = users.find((u) => u.email === email);
  if (!user) return;
  user.plan = plan;
  writeUsers(users);
}

export function isAdmin(user: AtlasUser | null): boolean {
  return user?.email === ADMIN_EMAIL;
}
