import { View, Text, Image, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { AllProductsCategory } from "@/constants";

const Modal = () => {
  return (
    <View>
  <Image
        source={product.image}
        className="w-full h-64 rounded-lg"
        resizeMode="contain"
      />

      <Text className="text-2xl font-bold mt-4">{product.name}</Text>

      <Text className="text-green-700 text-xl font-semibold mt-2">
        KES {product.price ?? "120"}
      </Text>

      <Text className="text-gray-600 mt-4">
        This is where you add product description, nutritional info,
        benefits, or anything you want.
      </Text>
    </View>
  )
}

export default Modal