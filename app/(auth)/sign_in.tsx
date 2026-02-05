import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { signIn } from "@/lib/appwrite";
import useAuthStore from "@/store/auth.store";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const {fetchAuthenticatedUser} = useAuthStore()
  const submit = async () => {
    const { email, password } = form;

    if (!email || !password) {
    Alert.alert("Error", " Please enter a valid email or Password");
   return
  }
    setIsSubmitting(true);
    try {
      // call Appwrite sign in function

      await signIn({ email, password });

      await fetchAuthenticatedUser();

      router.replace("/");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="flex-1 bg-white px-6 py-10 justify-center">
      <Text className="text-4xl font-bold text-center text-black mb-8">
        Lets Get you Signed In
      </Text>

      <CustomInput
        label="Email"
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        placeholder="Enter your email"
        keyboardType="email-address"
        leftIcon={<EvilIcons name="envelope" size={24} color="green" />}
      />

      <CustomInput
        label="Password"
        value={form.password}
        onChangeText={(text) =>
          setForm((prev) => ({ ...prev, password: text }))
        }
        placeholder="Enter your password"
        secureTextEntry={true}
        leftIcon={<Ionicons name="lock-closed" size={20} color="green" />}
      />
      <CustomButton title="Sign In" isLoading={isSubmitting} onPress={submit} />

      <View className="flex-row justify-center mt-6">
        <Text className="text-gray-500">Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.push("./sign_up")}>
          <Text className="text-green-700 font-semibold">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
