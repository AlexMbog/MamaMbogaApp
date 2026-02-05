import QuantitySelector from "@/components/QuantitySelector";
import { ProductList } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { FlatList, Image, Pressable, Text, View } from "react-native";
export default function ProductsDetails({ color = "#24a549" }) {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const product = ProductList.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-xl font-bold">Product not found</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white ">
      <View className=" h- bg-green-600">
        <View className="mt-8 m-2 flex-row items-center justify-between">
          <Ionicons
            name="arrow-back"
            size={28}
            color={color}
            className=" bg-gray-300 rounded-full  p-2"
            onPress={() => router.back()}
          />
          <Ionicons
            name="cart"
            size={28}
            color={color}
            className=" bg-gray-300 rounded-full p-2"
          />
        </View>
        <Image
          source={product.image}
          className="w-full h-64 mb-6 rounded-lg"
          resizeMode="contain"
        />
      </View>
      <View className="flex-1 bg-white rounded-t-3xl -mt-6 p-6 bg-">
        <View className="flex-row justify-between items-center">
          <Text className="text-2xl font-bold">{product.name}</Text>

          <Text className="text-xl font-semibold text-green-700">
            KES {product.price ?? "120"}/<Text className="text-sm">Kg</Text>
          </Text>
        </View>
        <View className="pt-2">
          <Text className="text-green-700">{product.rating} Rating</Text>
        </View>
        <View className="flex-row justify-between mt-2">
          <View className="items-center  bg-green-400 p-4 rounded-lg">
            <Text className="text-gray-500 text-sm ">Calories</Text>
            <Text className="text-lg font-semibold">
              {product.calories ?? "120"}
            </Text>
          </View>
          <View className="items-center bg-green-700 p-4 rounded-lg">
            <Text className="text-gray-500 text-sm  ">Protein</Text>
            <Text className="text-lg font-semibold">
              {product.protein ?? "8g"}
            </Text>
          </View>
          <View className="items-center bg-green-300 p-4 rounded-lg">
            <Text className="text-gray-500 text-sm">Fats</Text>
            <Text className="text-lg font-semibold">
              {product.rating ?? "4.5"}
            </Text>
          </View>
        </View>
        <View className="pt-4 mt-2">
          <Text className="text-lg font-quicksand-semibold">Description</Text>
          <Text className="text-gray-200 text-base font-quicksand-medium">
            {product.description ||
              "Fresh vegetables are packed with nutrients, flavor, and vibrant color, making them a healthy choice for any meal."}
          </Text>
        </View>
        <View className="mt-2">
          <Text>More Fruits</Text>
          <FlatList
            data={ProductList.filter((p) => p.id !== product.id)}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            className="mt-2"
            renderItem={({ item }) => (
              <View className="mr-4 bg-white rounded-lg shadow-md p-4 w-24 h-20">
                <Image
                  source={item.image}
                  className="w-full h-16 rounded-lg"
                  resizeMode="contain"
                />
                <Text className="mt-2 font-quicksand-semibold">
                  {item.name}
                </Text>
                <Text className="text-green-700 font-quicksand-medium">
                  KES {item.price}/Kg
                </Text>
              </View>
            )}
          />
        </View>
        <View className="flex-row justify-between items-center">
          <QuantitySelector />
          <Pressable className="bg-green-600 px-14 py-3  rounded-2xl">
            <Text className="text-white-100 font-quicksand-semibold">
              Add to Cart
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
