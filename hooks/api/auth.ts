// hooks/mutations/useGoogleSignIn.ts
import supabase from "@/lib/supabase";
import { useAuthStore } from "@/store/auth";
import { useMutation } from "@tanstack/react-query";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

async function signInWithGoogle() {
  const redirectTo = Linking.createURL("/");
  console.log("Redirect URI:", redirectTo);

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo },
  });

  if (error) throw error;

  // Just open the auth URL, don’t wait for a result
  if (data?.url) {
    await WebBrowser.openAuthSessionAsync(data.url, redirectTo);
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
      useAuthStore.getState().setAuth(true);
    },
  });
}
