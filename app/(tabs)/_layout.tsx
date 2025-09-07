import { HapticTab } from "@/components/HapticTab";
import { TabHeader } from "@/components/tabs/tab-header";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.graniteGray,
        headerShown: true,
        header: () => <TabHeader />,
        tabBarShowLabel: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: Colors.black,
          borderTopWidth: 0,
          height: 50,
          paddingTop: 10,
          ...Platform.select({
            ios: {
              position: "absolute",
              backgroundColor: Colors.black,
            },
          }),
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home-filled" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          header: () => <TabHeader variant="menu" />,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="inbox" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <View className="items-center justify-center p-3 bg-[#808080]/50 rounded-xl">
              <IconSymbol size={28} name="magnifyingglass" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="issues"
        options={{
          title: "Issues",
          header: () => <TabHeader variant="menu" />,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="center-focus-strong" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ color }) => (
            <Ionicons name="create-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
