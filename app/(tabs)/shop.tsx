import SearchBar from "@/components/Search";
import { AllProductsCategory, COLORS } from "@/constants";
import { useRouter } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const shop = () => {
  const router = useRouter();
  return (
    <View className="pt-4 bg-white flex-1">
      <SearchBar />
      <Text className="p-2 text-lg font-bold">All Products</Text>
      <FlatList
        data={AllProductsCategory}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => router.push(`/products?category=${item.category}`)}
            activeOpacity={0.8}
          >
            <View
              className="bg-white-200 mr-4 rounded-lg p-4
           shadow-md w-44  ml-2 mb-4"
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
              <View className="items-center">
                <Image
                  source={item.image}
                  className="w-28 h-28"
                  resizeMode="contain"
                />
              </View>
              <View className="mt-2 items-center justify-center flex-1">
                <Text className="text-sm font-semibold">{item.name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default shop;
