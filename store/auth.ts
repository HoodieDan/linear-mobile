// store/auth.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Session, User } from "@supabase/supabase-js";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  hasOnboarded: boolean;
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  setOnboarded: () => void;
  setAuth: (value: boolean) => void;
  reset: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      hasOnboarded: false,
      isAuthenticated: false,
      user: null,
      loading: true,
      setOnboarded: () => {
        console.log("Setting onboarded to true");
        set({ hasOnboarded: true });
      },
      setIsAuthenticated: (value: boolean) => {
        console.log("Setting isAuthenticated to", value);
        set({ isAuthenticated: value });
      },
      setAuth: (value: boolean) => {
        console.log("Setting auth:", {
          isAuthenticated: value,
        });
        set({
          isAuthenticated: value,
          loading: false,
        });
      },
      reset: () => {
        console.log("Resetting auth store");
        set({
          hasOnboarded: false,
          isAuthenticated: false,
          user: null,
          loading: false,
        });
      },
    }),
    {
      name: "auth-storage",
      storage: {
        getItem: async (name) => {
          const value = await AsyncStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: async (name, value) => {
          await AsyncStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: async (name) => {
          await AsyncStorage.removeItem(name);
        },
      },
    }
  )
);
