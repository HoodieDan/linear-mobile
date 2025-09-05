import { ThemedText } from "@/components/ThemedText";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IssuesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView className="p-4">
        <ThemedText className="text-2xl font-bold text-red-500">
          This is the issues screen.
        </ThemedText>
      </ScrollView>
    </SafeAreaView>
  );
}
