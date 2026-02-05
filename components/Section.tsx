import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface SectionItem {
  title: string;
  icon: any;
  danger?: boolean;
}

export default function Section({ title, icon, danger }: SectionItem) {
  return (
    <TouchableOpacity className="flex-row items-center justify-between px-4 py-4 mt-1 mb-1">
      <View className="flex-row items-center ">
        <FontAwesome5
          name={icon}
          size={18}
          color={danger ? "#dc2626" : "#16a34a"}
        />
        <Text
          className={`ml-3 text-base ${
            danger ? "text-red-600" : "text-gray-800"
          }`}
        >
          {title}
        </Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={20}
        color={danger ? "#dc2626" : "#9ca3af"}
      />
    </TouchableOpacity>
  );
}
