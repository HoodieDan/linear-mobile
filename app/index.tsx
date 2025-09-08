import { useAuthStore } from "@/store/auth";
import { Redirect } from "expo-router";

export default function Index() {
  const { hasOnboarded, isAuthenticated } = useAuthStore();

  if (!hasOnboarded) return <Redirect href="/onboarding" />;
  if (!isAuthenticated) return <Redirect href="/auth" />;

  return <Redirect href="/(tabs)" />;
}
