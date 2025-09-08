import { useGoogleSignIn } from "@/hooks/api/auth";
import { useAuthStore } from "@/store/auth";
import { Redirect } from "expo-router";
import {
  Alert,
  Image,
  Text,
  TextInput,
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
    <View className="flex-1 bg-black items-center justify-center px-6 py-12">
      {/* Header */}
      <View className="items-center mb-10">
        <Text className="text-white text-3xl font-bold mb-2">
          Welcome Back 👋
        </Text>
        <Text className="text-gray-300 text-center text-base">
          Sign in to continue your Tempo journey
        </Text>
      </View>

      {/* Login Form (not functional yet) */}
      <View className="w-full max-w-sm mb-6">
        <TextInput
          placeholder="Email"
          placeholderTextColor="#999"
          className="bg-gray-800 text-white rounded-xl px-4 py-3 mb-4"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          className="bg-gray-800 text-white rounded-xl px-4 py-3 mb-2"
        />
        <TouchableOpacity className="items-end mb-4">
          <Text className="text-gray-400 text-sm">Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white rounded-xl py-3 mb-6">
          <Text className="text-black text-center font-semibold">Login</Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View className="flex-row items-center mb-6 w-full max-w-sm">
        <View className="flex-1 h-px bg-gray-700" />
        <Text className="text-gray-400 mx-4">or</Text>
        <View className="flex-1 h-px bg-gray-700" />
      </View>

      {/* Google Login */}
      <TouchableOpacity
        onPress={handleGoogleLogin}
        className="flex-row items-center bg-white rounded-xl px-6 py-3 w-full max-w-sm justify-center"
      >
        <Image
          source={{
            uri: "https://commons.wikimedia.org/wiki/File:Google_%22G%22_logo.svg",
          }}
          className="w-5 h-5 mr-3"
        />
        <Text className="text-black font-semibold">Continue with Google</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text className="text-gray-400 text-sm text-center mt-6">
        Don’t have an account? <Text className="text-white">Sign up</Text>
      </Text>
    </View>
  );
}
