import { ImageSliderOffers } from "@/constants";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const { width } = Dimensions.get("window");
export default function ImageSlider({ color = "#24a549" }) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  const flatListRef = useRef<FlatList<any>>(null);

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      let nextIndex = currentIndex + 1;

      if (nextIndex >= ImageSliderOffers.length) {
        nextIndex = 0; // Loop back to start
      }

      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 4000); // every 4 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <View className="mt-4">
      <FlatList
        horizontal
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        data={ImageSliderOffers}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled
        onMomentumScrollEnd={(e) => {
          // Set index after manual swipe
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => (
          <View className="flex-row left-0 right-0 mx-auto top-0 w-[335px] px-2 mb-2  bg-[#D4E8C5]  rounded-lg ml-2 items-center justify-between">
            {/* Left Side */}
            <View className="flex-col w-[170px]">
              <Text className="text-blue-900 text-lg font-semibold">
                {item.header}
              </Text>
              <Text className="text-green-700 mt-1">{item.subheader}</Text>

              <TouchableOpacity
                onPress={() => {}}
                className="mt-3 bg-green-600 px-4 py-2 rounded-lg self-start"
              >
                <Text className="text-white font-semibold">Shop Now</Text>
              </TouchableOpacity>
            </View>

            {/* Right Image */}
            <View>
              <Image
                source={item.image}
                className="w-40 h-40"
                resizeMode="cover"
              />
            </View>
          </View>
        )}
      />
      <View className="flex-row justify-center mt-3">
        {ImageSliderOffers.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 16, 8],
            extrapolate: "clamp",
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={index}
              style={{
                width: dotWidth,
                height: 8,
                borderRadius: 4,
                backgroundColor: "green",
                marginHorizontal: 4,
                opacity,
              }}
            />
          );
        })}
      </View>
    </View>
  );
}
