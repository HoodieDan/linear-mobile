import { useGoogleSignIn } from "@/hooks/api/auth";
import { useAuthStore } from "@/store/auth";
import { Redirect } from "expo-router";
import {
  // ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function AuthPage() {
  const { isAuthenticated } = useAuthStore();
  const { mutate: signInWithGoogle } = useGoogleSignIn();

  const handleGoogleLogin = () => {
    try {
      signInWithGoogle();
    } catch (err: any) {
      Alert.alert("Login failed", err.message);
    }
  };

  if (isAuthenticated) {
    return <Redirect href="/(tabs)" />;
  }

  return (
    <View className="flex-1 bg-black items-center justify-center p-6">
      <Text className="text-white text-2xl font-bold mb-4">
        Sign in to Tempo
      </Text>
      <TouchableOpacity
        onPress={handleGoogleLogin}
        className="bg-white rounded-xl px-6 py-3"
      >
        <Text className="text-black font-semibold">Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
}
