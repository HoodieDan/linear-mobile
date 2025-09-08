import { useAuthStore } from "@/store/auth";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Onboarding() {
  const setOnboarded = useAuthStore((s) => s.setOnboarded);
  const router = useRouter();

  const handleGetStarted = () => {
    setOnboarded();
    router.push("/auth");
  };

  return (
    <View className="flex-1 bg-black items-center justify-between px-6 py-12">
      {/* Top Section */}
      <View className="items-center mt-10">
        <Text className="text-white text-3xl font-bold mb-2">
          Welcome to Tempo
        </Text>
        <Text className="text-gray-300 text-center text-base max-w-md">
          Your goto app for project and issue management. Stay organized and
          productive with Tempo.
        </Text>
      </View>

      {/* Illustration / Image */}
      <Image
        source={{
          uri: "https://bookface-images.s3.amazonaws.com/logos/ff8bfbe7f9c95f7c25964818baaac1b5bb2cbd5e.png?1686587742",
        }}
        className="w-64 h-64 rounded-2xl"
        resizeMode="contain"
      />

      {/* CTA */}
      <View className="w-full items-center">
        <TouchableOpacity
          onPress={handleGetStarted}
          className="bg-white rounded-2xl px-8 py-4 w-full max-w-sm"
        >
          <Text className="text-black text-center font-semibold text-lg">
            Get Started
          </Text>
        </TouchableOpacity>

        <Text className="text-gray-400 text-xs text-center mt-4 px-6">
          By continuing, you agree to Tempo’s Terms of Service and Privacy
          Policy.
        </Text>
      </View>
    </View>
  );
}
