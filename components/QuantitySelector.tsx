import { useState } from "react";
import { Pressable, Text, View } from "react-native";

type QuantitySelectorProps = {
  initialQuantity?: number;
  onChange?: (quantity: number) => void;
  color?: string;
};

export default function QuantitySelector({
  initialQuantity = 1,
  onChange,
  color = "#24a549",
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increase = () => {
    setQuantity((prev) => {
      const newQty = prev + 1;
      onChange?.(newQty);
      return newQty;
    });
  };

  const decrease = () => {
    setQuantity((prev) => {
      const newQty = prev > 1 ? prev - 1 : 1;
      onChange?.(newQty);
      return newQty;
    });
  };

  return (
    <View className="flex-row items-center mt-4">
      <Pressable
        onPress={decrease}
        className="bg-dark-100 p-4 py-2 rounded-full mr-2"
      >
        <Text className="text-lg font-bold text-white-100">-</Text>
      </Pressable>

      <View className="bg-white-100 px-6 py-1 border-gray-100 border">
        <Text className="text-lg font-semibold">{quantity}</Text>
      </View>

      <Pressable
        onPress={increase}
        className="bg-dark-100  p-4 py-2 rounded-full ml-2"
      >
        <Text className="text-lg font-bold text-white-100">+</Text>
      </Pressable>
    </View>
  );
}
