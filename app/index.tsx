import supabase from "@/lib/supabase";
import { useAuthStore } from "@/store/auth";
import { Redirect } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  const { hasOnboarded, isAuthenticated, setAuth } = useAuthStore();

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuth(!!session);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  if (!hasOnboarded) return <Redirect href="/onboarding" />;
  if (!isAuthenticated) return <Redirect href="/auth" />;

  return <Redirect href="/(tabs)" />;
}
