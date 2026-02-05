import { AllProductsCategory } from "@/constants";
import { Image, Text, View } from "react-native";

export default function Products() {
  return (
    <View>
      <Text className="text-lg font-bold mb-4"></Text>
      <View className="flex-row flex-wrap justify-between">
        {AllProductsCategory.map((product) => (
          <View
            key={product.id}
            className="w-40 bg-white rounded-lg shadow-md mb-4"
          >
            <Image
              source={product.image}
              className="w-full h-40 rounded-t-lg"
              resizeMode="cover"
            />
            <View className="p-2">
              <Text className="text-base font-semibold">{product.name}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
