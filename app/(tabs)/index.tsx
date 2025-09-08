import H6Text from "@/components/common/text-utils/h6text";
import { ScrollView, View } from "react-native";
import PText from "@/components/common/text-utils/ptext";
import { Collapsible } from "@/components/Collapsible";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-black">
      <ScrollView className="p-4">
        <H6Text className="text-white mb-4">Home</H6Text>
        <Collapsible title="Favorites" className="mb-5">
          <PText className="text-graniteGray mt-2">
            Your favorites will appear here.
          </PText>
        </Collapsible>
        <Collapsible title="Teams">
          <PText className="text-white mt-2">
            Tempo
          </PText>
        </Collapsible>
      </ScrollView>
    </View>
  );
}
