// hooks/mutations/useGoogleSignIn.ts
import supabase from "@/lib/supabase";
import { useAuthStore } from "@/store/auth";
import { useMutation } from "@tanstack/react-query";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

async function signInWithGoogle() {
  const redirectTo = Linking.createURL("/(tabs)");
  console.log("Redirect URI:", redirectTo);

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo },
  });

  if (error) throw error;

  if (data?.url) {
    const result = await WebBrowser.openAuthSessionAsync(data.url, redirectTo);
    console.log("Auth session result:", result);

    if (result.type === "success" && result.url) {
      console.log("Redirected to:", result.url);
      return result; // return the auth result to React Query
    }
  }

  return null;
}

export function useGoogleSignIn() {
  return useMutation({
    mutationFn: signInWithGoogle,
    onError: (err: any) => {
      console.error("Google login failed:", err.message);
    },
    onSuccess: async (data) => {
      console.log("✅ Google login success:", data);
      const session = data?.url
        ? (await supabase.auth.getSession()).data.session
        : null;
      console.log("Restored session:", session);
      useAuthStore.getState().setAuth(true);
    },
  });
}
