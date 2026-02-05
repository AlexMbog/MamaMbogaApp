import Section from "@/components/Section";
import { signOut } from "@/lib/appwrite";
import useAuthStore from "@/store/auth.store";
import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
export default function Profile() {
  const { user } = useAuthStore();
  const { setUser, setIsAuthenticated } = useAuthStore();
  const handlesignOut = async () => {
    await signOut(); // 1️⃣ delete session
    setUser(null); // 2️⃣ clear user
    setIsAuthenticated(false); // 3️⃣ auth false
    router.replace("/sign_in"); // 4️⃣ reset navigation
  };
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="flex-row justify-between items-center px-4 py-4 pt-14 ">
          <View>
            <Ionicons name="arrow-back" size={24} color="green" />
          </View>
          <View>
            <Text className="text-lg font-bold text-gray-100">My Profile</Text>
          </View>
          <View>
            <Feather name="settings" size={24} color="green" />
          </View>
        </View>
        <View className="flex-row pl-4 ">
          <TouchableOpacity>
            <View className="rounded-full w-32 p-2 justify-center items-center ml-4">
              <Image
                source={{ uri: user?.avatar }}
                className="rounded-full w-40 h-40"
              />
            </View>
          </TouchableOpacity>

          <View className="ml-6  mt-4 pl-4">
            <Text className="text-black text-2xl font-bold">
              {user?.firstname} {user?.secondname}
            </Text>
            <Text className="text-gray-200">@{user?.email}</Text>
            <TouchableOpacity
              className="p-4 rounded-lg bg-green-600 justify-center items-center mt-4 w-32 text-white-100"
              onPress={() => router.push("/user/userProfile")}
            >
              <Text className="text-white">Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View className="border-b border-gray-300">
            <Section title="My Orders" icon="luggage-cart" />
            <Section title="Favorites" icon="heart" />
            <Section title="Downloads" icon="download" />
          </View>
          <Section title="Language" icon="globe" />
          <Section title="My Orders" icon="globe" />
          <Section title="My Orders " icon="globe" />
          <TouchableOpacity onPress={handlesignOut}>
            <Section title="Log out" icon="sign-out-alt" danger />
          </TouchableOpacity>
        </View>
        <Text></Text>
      </View>
    </ScrollView>
  );
}
