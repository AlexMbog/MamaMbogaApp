import BestDeals from "@/components/BestDeals";
import ImageSlider from "@/components/ImageSlider";
import SearchBar from "@/components/Search";
import { Categories } from "@/constants";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
export default function App({ color = "#24a549" }) {
  const [selectedLocation, setSelectedLocation] = useState(1);

  return (
    <View className="pt-10 bg-white flex-1">
      <View className="px-4">
        <Text className="text-lg font-bold text-gray-100">Deliver to</Text>
        <View className="flex-row  items-center justify-between">
          <View className="flex-1">
            <TouchableOpacity className="flex-row items-center mt-1">
              <Entypo name="location-pin" size={18} color={color} />
              <Text className="text-base font-semibold ml-1">
                Nairobi , Kenya
              </Text>
              <Ionicons name="chevron-down" size={18} color="black" />
            </TouchableOpacity>
            <View>
              {/* 
            <Picker
              selectedValue={selectedLocation}
              onValueChange={(itemValue) => console.log("Selected:", itemValue)}
            >
              <Picker.Item label="-- Select Location --" value={0} />
              {Locations.map((loc) => (
              <Picker.Item key={loc.id} label={loc.name} value={loc.id} />
              ))}
            </Picker>
            */}
            </View>
          </View>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="bell-badge"
              size={18}
              color={color}
              className=" bg-gray-300 rounded-full p-2"
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mt-2 p">
          <SearchBar />
        </View>

        <View>
          <ImageSlider />
        </View>
        <View className="ml-2 mt-6">
          <View className="flex-row justify-between items-center mr-2">
            <Text className="text-lg font-bold">Categories</Text>
            <Text className=" text-green-700 ">See All</Text>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={Categories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View className="items-center mr-6">
                <View className="items-center bg-gray-300 rounded-full m-2 justify-center">
                  <Image
                    source={item.image}
                    className="w-10 h-10 rounded-full m-3"
                    resizeMode="cover"
                  />
                </View>
                <Text className="text-green-700 text-lg font-bold">
                  {item.title}
                </Text>
              </View>
            )}
          />
        </View>
        <View className="ml-2 mt-4">
          <View className="flex-row justify-between items-center mr-2">
            <Text className="text-lg font-bold">Flash Sales</Text>
            <Text className=" text-green-700 ">See All</Text>
          </View>
          {/* Flash Sale Component */}
          <BestDeals />
        </View>
      </ScrollView>
    </View>
  );
}
