import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { createUser } from "@/lib/appwrite";
const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
const {firstName,lastName, email, password} =form
  const submit = async () => {
    if (!firstName || !lastName || !email || !password) return

    setIsSubmitting(true);
    try {

      await createUser({
        email,
        password,
        firstname: firstName,
        lastname: lastName,
      })
      // call Appwrite sign in function
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
        Lets Get you Signed Up
      </Text>

      <CustomInput
        label="first name"
        value={form.firstName}
        onChangeText={(text) =>
          setForm((prev) => ({ ...prev, firstName: text }))
        }
        placeholder="Enter your first name"
        keyboardType="default"
        leftIcon={<EvilIcons name="user" size={24} color="green" />}
      />
      <CustomInput
        label="last name"
        value={form.lastName}
        onChangeText={(text) =>
          setForm((prev) => ({ ...prev, lastName: text }))
        }
        placeholder="Enter your last name"
        keyboardType="default"
        leftIcon={<EvilIcons name="user" size={24} color="green" />}
      />

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
        onChangeText={(text) => setForm((prev) => ({ ...prev, password: text }))}
        placeholder="Enter your password"
        secureTextEntry={true}
        leftIcon={<Ionicons name="lock-closed" size={20} color="green" />}
      />
      <CustomButton title="Sign Up" isLoading={isSubmitting} onPress={submit} />

      <View className="flex-row justify-center mt-6">
        <Text className="text-gray-500">Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push("./sign_in")}>
          <Text className="text-green-700 font-semibold">Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
