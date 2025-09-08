import TextInputField from "@/components/common/text-input-field";
import PText from "@/components/common/text-utils/ptext";
import SmallText from "@/components/common/text-utils/smalltext";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { ScrollView, View } from "react-native";

export default function SearchScreen() {
  return (
    <View className="flex-1 bg-black">
      <ScrollView className="p-4">
        <TextInputField
          placeholder="Search..."
          icon={
            <IconSymbol size={28} name="magnifyingglass" color={Colors.white} />
          }
          placeholderTextColor={Colors.graniteGray}
        />

        {/* Recently viewed  */}
        <View className="mt-6">
          <SmallText className="text-graniteGray mt-4">
            Recently Viewed
          </SmallText>
          <View className="mt-3 flex-row gap-2">
            <Feather name="circle" size={14} color={Colors.white} />
            <PText className="text-white">Get familiar with Linear (1)</PText>
          </View>
        </View>

        {/* Teams */}
        <View className="mt-6">
          <SmallText className="text-graniteGray mt-4">Teams</SmallText>
          <View className="mt-3 flex-row gap-2">
            <FontAwesome name="users" size={14} color={Colors.feldgrau} />
            <PText className="text-white">Tempo</PText>
          </View>
        </View>

        {/* navigate */}
        <View className="mt-6">
          <SmallText className="text-graniteGray mt-4">Navigate</SmallText>
          <View className="mt-4 flex-row gap-3 items-center">
            <MaterialIcons name="home-filled" size={20} color={Colors.white} />
            <Link href={"/(tabs)"} className="text-white">
              Home
            </Link>
          </View>
          <View className="mt-4 flex-row gap-3 items-center">
            <FontAwesome name="inbox" size={20} color={Colors.white} />
            <Link href={"/(tabs)/inbox"} className="text-white">
              Inbox
            </Link>
          </View>
          <View className="mt-4 flex-row gap-3 items-center">
            <MaterialIcons
              name="center-focus-strong"
              size={20}
              color={Colors.white}
            />
            <Link href={"/(tabs)/issues"} className="text-white">
              My Issues
            </Link>
          </View>
          <View className="mt-4 flex-row gap-3 items-center">
            <FontAwesome name="gear" size={20} color={Colors.white} />
            <Link href={"/(tabs)"} className="text-white">
              Settings
            </Link>
          </View>
        </View>

        {/* commands */}
        <View className="mt-6">
          <SmallText className="text-graniteGray mt-4">Commands</SmallText>
          <View className="mt-4 flex-row gap-3 items-center">
            <Ionicons name="create-outline" size={20} color={Colors.white} />
            <Link href={"/(tabs)/issues"} className="text-white">
              Create Issue
            </Link>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
