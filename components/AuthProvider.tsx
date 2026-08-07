"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { AUTH_EVENT, getSessionUser, isAdmin, type AtlasUser } from "@/lib/auth";

interface AuthContextValue {
  user: AtlasUser | null;
  admin: boolean;
  refresh: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  admin: false,
  refresh: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AtlasUser | null>(null);

  const refresh = () => setUser(getSessionUser());

  useEffect(() => {
    refresh();
    window.addEventListener(AUTH_EVENT, refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener(AUTH_EVENT, refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, admin: isAdmin(user), refresh }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
