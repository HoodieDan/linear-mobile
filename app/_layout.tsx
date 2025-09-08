import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ThemedText } from "@/components/ThemedText";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    // Check for required environment variables
    if (!process.env.EXPO_PUBLIC_SUPABASE_URL) {
      console.error("Missing EXPO_PUBLIC_SUPABASE_URL environment variable");
    }
    if (!process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY) {
      console.error(
        "Missing EXPO_PUBLIC_SUPABASE_ANON_KEY environment variable",
      );
    }
  }, []);

  const handleError = (error: Error, errorInfo: any) => {
    console.error("Global error caught:", error);
    console.error("Error info:", errorInfo);
    // In a production app, you might want to send this to a crash reporting service
  };

  const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
    return (
      <SafeAreaView className="flex-1 bg-black justify-center items-center p-4">
        <ThemedText type="title" className="text-red-500 mb-4">
          Something went wrong
        </ThemedText>
        <ThemedText className="text-center mb-4">
          {error?.message || "An unexpected error occurred"}
        </ThemedText>
        <ThemedText
          className="text-blue-400 underline"
          onPress={resetErrorBoundary}
        >
          Try again
        </ThemedText>
      </SafeAreaView>
    );
  };

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={handleError}>
      <SafeAreaView className="flex-1 bg-black">
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="light" />
      </SafeAreaView>
    </ErrorBoundary>
  );
}
