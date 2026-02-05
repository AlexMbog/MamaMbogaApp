import CustomInput from "@/components/CustomInput";
import { appwriteConfig, databases } from "@/lib/appwrite";
import useAuthStore from "@/store/auth.store";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
export default function userProfile() {
  const { user, setUser } = useAuthStore();

  const [form, setForm] = useState({
    firstname: "",
    secondname: "",
    email: "",
    phone: "",
    location: "",
  });

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (user) {
      setForm({
        firstname: user.firstname ?? "",
        secondname: user.secondname ?? "",
        email: user.email ?? "",
        phone: user.phone ?? "",
        location: user.location ?? "",
      });
    }
  }, [user]);

  const saveProfile = async () => {
    if (!user) return;

    try {
      setSaving(true);

      const updatedUser = await databases.updateDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        user.$id,
        {
          firstname: form.firstname,
          secondname: form.secondname,
          phone: form.phone,

          location: form.location,
        }
      );

      // Update Zustand
      setUser(updatedUser as any);

      router.back();
    } catch (error) {
      console.error("Update profile error:", error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex-row justify-between items-center px-4 py-4 pt-14 ">
        <View>
          <Ionicons
            name="arrow-back"
            size={24}
            color="green"
            onPress={() => router.back()}
          />
        </View>
        <View>
          <Text className="text-lg font-bold text-gray-100">Edit Profile</Text>
        </View>
        <TouchableOpacity onPress={saveProfile} disabled={saving}>
          <Text className="text-green-600 font-semibold">
            {saving ? "Saving..." : "Save"}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <View className=" items-center my-6">
          <Image
            source={{ uri: user?.avatar }}
            className="rounded-full w-40 h-40"
          />
        </View>
      </TouchableOpacity>
      <ScrollView>
        <View className="px-6 space-y-4">
          <CustomInput
            label="First Name"
            value={form.firstname}
            onChangeText={(t) => setForm({ ...form, firstname: t })}
          />
          <CustomInput
            label="Last Name"
            value={form.secondname}
            onChangeText={(t) => setForm({ ...form, secondname: t })}
          />
          <CustomInput
            label="Email"
            value={form.email}
            onChangeText={(t) => setForm({ ...form, email: t })}
          />
          <CustomInput
            label="Phone Number"
            keyboardType="phone-pad"
            value={form.phone}
            onChangeText={(t) => setForm({ ...form, phone: t })}
          />
          <CustomInput
            label="Location"
            value={form.location}
            onChangeText={(t) => setForm({ ...form, location: t })}
          />
        </View>
      </ScrollView>
    </View>
  );
}
