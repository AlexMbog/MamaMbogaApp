import SearchBar from "@/components/Search";
import { COLORS, ProductList ,} from "@/constants";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
export default function ProductsList({ color = "#24a549" }) {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // Filter products based on category
  const { category } = useLocalSearchParams();

  // Filter products
  const filteredProducts = ProductList.filter((p) => p.category === category);

  return (
    <View className="flex-1 bg-white">
      <View className="mt-10 mb-4 ml-2 flex-row items-center gap-20 border-b border-b-white-100 pb-2 shadow-b-gray-100">
        <Ionicons
          name="arrow-back"
          size={28}
          color={color}
          className=" bg-gray-300 rounded-full p-2"
          onPress={() => router.back()}
        />
        <Text className="text-lg font-bold">{}</Text>
      </View>
      <View>
        <SearchBar />
      </View>

      <View className="flex-1 mt-6 ml-2">
        <FlatList
          data={filteredProducts}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => router.push(`/products/${item.id}`)}
              activeOpacity={0.8}
            >
              <View
                className="bg-white-200 mr-4 rounded-lg p-4
               shadow-md w-44   mb-4"
                style={{
                  borderWidth: 1,
                  borderColor: COLORS[index % COLORS.length],

                  // Shadows
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 3 },
                  shadowOpacity: 0.2,
                  shadowRadius: 5,
                  elevation: 5,
                }}
              >
                <MaterialCommunityIcons
                  name="heart-outline"
                  size={24}
                  color="text-gray-100"
                  className="absolute right-2 top-2 z-10"
                />
                <View className="items-center mt-4">
                  <Image
                    source={item.image}
                    className="w-28 h-28"
                    resizeMode="contain"
                  />
                </View>
                <View className="flex-row">
                  <View className="mt-2  flex-1">
                    <Text className="text-sm font-semibold">{item.name}</Text>
                    <Text className="text-green-700 font-bold mt-1">
                      KES {item.price}
                    </Text>
                  </View>
                  <View className="bg-green-600 rounded-full w-8 h-8 items-center justify-center mt-2 self-end">
                    <Pressable onPress={() => router.push(`/(tabs)/cart?productId=${item.id}`)}>
                      <Ionicons name="add" size={20} color="white" />
                    </Pressable>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
