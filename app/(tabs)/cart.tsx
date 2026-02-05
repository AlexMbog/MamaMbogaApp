import { ProductList } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

import { Text, View } from "react-native";
export default function Cart({ color = "#24a549" }) {
  const params = useLocalSearchParams();
  const router = useRouter();
  const { productId, category } = params;
  const product = productId
    ? // @ts-ignore
      ProductList.find((p) => p.id.toString() === productId.toString())
    : null;
  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="mt-10 mb-10 px-4 flex-row items-center gap-20">
        <View className="bg-gray-300 rounded-full p-2">
          <Ionicons
            name="arrow-back"
            size={24}
            color={color}
            onPress={() => router.back()}
          />
        </View>
        <Text className="text-lg font-bold">Shopping Cart</Text>
      </View>

      {/* Cart body */}
      <View className="flex-1 bg-white rounded-t-3xl -mt-6 p-6 shadow-gray-100">
        {!product ? (
          <View>
            <Text className="text-xl font-bold">Your cart is empty</Text>
            <Text className="text-gray-500 mt-2">
              Add items to your cart to see them here.
            </Text>
          </View>
        ) : (
          <View className="mt-6 flex-row  items-center  justify-between gap-6 border-gray-200 p-4 ml-2 w-44 ">
            <View className="flex-col">
              <Text className="text-base font-semibold">{product.name}</Text>
            </View>
            <View>
              <Text className="">Quantity: 1</Text>
              {/* Replace with real quantity if you have a cart system */}
            </View>
            <View>
              <Text className="font-semibold">ksh{product.price}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
