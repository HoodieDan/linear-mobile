import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import clsx from "clsx";
import { PropsWithChildren, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import SmallText from "./common/text-utils/smalltext";

type CollapsibleProps = PropsWithChildren<{
  title: string;
  className?: string;
  headingClassName?: string;
  contentClassName?: string;
}>;

export function Collapsible({
  children,
  title,
  className = "",
  headingClassName = "",
  contentClassName = "",
}: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View className={clsx(className)}>
      <TouchableOpacity
        className={clsx(
          "flex-row items-center justify-between gap-1.5",
          headingClassName
        )}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}
      >
        <SmallText className="text-graniteGray">{title}</SmallText>
        <Ionicons
          name="chevron-expand-outline"
          size={12}
          color={Colors.graniteGray}
        />
      </TouchableOpacity>

      {isOpen && (
        <View className={clsx("mt-3 mb-3", contentClassName)}>{children}</View>
      )}
    </View>
  );
}
