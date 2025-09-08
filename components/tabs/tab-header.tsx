// components/TabHeader.tsx
import { Colors } from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View } from "react-native";
import PText from "../common/text-utils/ptext";

type TabHeaderProps = {
  title?: string;
  variant?: "default" | "menu"; // default = gear, menu = dots
};

export function TabHeader({
  title = "Tempo",
  variant = "default",
}: TabHeaderProps) {
  return (
    <View className="flex-row justify-between items-center px-4 bg-black">
      <PText className="text-graniteGray mb-1">{title}</PText>
      {variant === "menu" ? (
        <MaterialCommunityIcons
          name="dots-horizontal"
          size={20}
          color={Colors.graniteGray}
        />
      ) : (
        <FontAwesome name="gear" size={20} color={Colors.graniteGray} />
      )}
    </View>
  );
}
