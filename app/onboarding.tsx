import { useAuthStore } from "@/store/auth";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Onboarding() {
  const setOnboarded = useAuthStore((s) => s.setOnboarded);
  const router = useRouter();

  const handleGetStarted = () => {
    setOnboarded();
    router.push("/auth");
  };

  return (
    <View className="flex-1 bg-black items-center justify-center p-6">
      <Text className="text-white text-2xl font-bold mb-4">
        Welcome to Tempo
      </Text>
      <TouchableOpacity
        onPress={handleGetStarted}
        className="bg-white rounded-xl px-6 py-3"
      >
        <Text className="text-black font-semibold">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
