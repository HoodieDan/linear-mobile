import { ThemedText } from "@/components/ThemedText";
import { ScrollView, View } from "react-native";

export default function IssuesScreen() {
  return (
    <View className="flex-1 bg-black">
      <ScrollView className="p-4">
        <ThemedText className="text-2xl font-bold text-red-500">
          This is the issues screen.
        </ThemedText>
      </ScrollView>
    </View>
  );
}
