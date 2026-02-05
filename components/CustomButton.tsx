import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
type CustomButtonProps = {
  onPress?: () => void;
  title?: string;
  style?: string;
  leftIcon?: React.ReactNode;
  textStyle?: string;
  isLoading?: boolean;
};
export default function CustomButton({
  onPress,
  title,
  style,
  leftIcon,
  textStyle,
  isLoading = false,
}: CustomButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} className="bg-green-700 rounded-md p-4 mt-6 flex-row justify-center items-center  {style}">
      {leftIcon}
      <View className="flex-center flex-row ">
        {isLoading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text className="text-white">{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
