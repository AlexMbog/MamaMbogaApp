import cn from "clsx";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
type CustomInputProps = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  label: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  leftIcon?: React.ReactNode;
};
export default function CustomInput({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  leftIcon,
  label,
}: CustomInputProps) {
  const [isFocused, setisFocused] = useState(false);
  return (
    <View className="w-full">
      <Text className="text-lg font-quicksand-bold">{label}</Text>
      <View
        className={cn(
          "flex-row items-center border rounded-lg px-3 py-2 bg-white",
          isFocused ? "border-green-500" : "border-gray-300"
        )}
      >
        {/* Left Icon */}
        {leftIcon && <View className="mr-2">{leftIcon}</View>}

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={placeholder}
          value={value}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          onFocus={() => setisFocused(true)}
          onBlur={() => setisFocused(false)}
          placeholderTextColor="#888"
          className={cn(
            "input",
            isFocused ? "border-green-500" : "border-gray-300"
          )}
        />
      </View>
    </View>
  );
}
