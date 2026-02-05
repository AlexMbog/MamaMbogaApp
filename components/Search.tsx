import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
export default function SearchBar({ color = "#181C2E" }) {
  return (
    <View className="flex-row items-center justify-between mt-2 px-2">
      <View className="flex-row items-center w-[300px] h-12 bg-[#F3F4F7] rounded-lg px-3 border border-green-700">
        <Ionicons name="search-outline" size={22} color={color} />
        <TextInput
          className="flex-1 ml-2 text-base font-medium text-[#C8D5B9]"
          placeholder="Search vegetables, fruits, etc"
          placeholderTextColor="#181C2E"
        />
      </View>
      <View className="ml-3 bg-[#24a549] p-2 rounded-lg">
        <FontAwesome6 name="sliders" size={20} color="white" />
      </View>
    </View>
  );
}
