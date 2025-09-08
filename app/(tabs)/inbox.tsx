import H6Text from "@/components/common/text-utils/h6text";
import SmallText from "@/components/common/text-utils/smalltext";
import { ScrollView, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "@/constants/Colors";

export default function InboxScreen() {
  return (
    <View className="flex-1 bg-black p-4">
      <H6Text className="text-white mb-4">Inbox</H6Text>
      <ScrollView className="bg-black" contentContainerStyle={{ flex: 1 }}>
        <View className="flex-1 items-center justify-center">
          <FontAwesome name="inbox" size={200} color={Colors.graniteGray} />
          <SmallText className="text-graniteGray">No notifications</SmallText>
        </View>
      </ScrollView>
    </View>
  );
}
