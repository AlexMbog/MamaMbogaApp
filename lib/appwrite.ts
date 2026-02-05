import { CreateUserParams, SignInParams } from "@/type";
import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
} from "react-native-appwrite";
export const appwriteConfig = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  platform: "com.MbogoNjiru.GrocerApp",
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  databaseId: "695e2b99003041243686",
  userCollectionId: "users",
  vendorCollectionId: "vendors",
};
export const client = new Client();
client
  .setEndpoint(appwriteConfig.endpoint!)
  .setProject(appwriteConfig.projectId!)
  .setPlatform(appwriteConfig.platform!);

export const account = new Account(client);
export const databases = new Databases(client);
const avatars = new Avatars(client);

export const createUser = async ({
  email,
  password,
  firstname,
  lastname,
}: CreateUserParams) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstname} ${lastname}`
    );

    if (!newAccount) throw Error("Account creation failed");
    await signIn({ email, password });
    const avatarUrl = avatars.getInitialsURL(`${firstname} ${lastname}`);

    return await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        firstname,
        secondname: lastname,
        category: "normalUser",
        accountId: newAccount.$id,
        email,
        avatar: avatarUrl,
      }
    );
  } catch (error) {
    throw new Error(error as string);
  }
};
export const signIn = async ({ email, password }: SignInParams) => {
  try {
    await account.createEmailPasswordSession(email, password);
  } catch (error: any) {
    // Ignore the session exists error (Appwrite error code 409)
    if (error?.code === 409) {
      console.log("Session already exists. Skipping login.");
      return;
    }
    throw new Error(error.message || "Sign in failed");
  }
};
export const getCurrentUser = async () => {
  try {
    await new Promise((res) => setTimeout(res, 100));

    const currentAccount = await account.get();

    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );
    if (currentUser.documents.length === 0) return null;
    return currentUser.documents[0];
  } catch (error) {
    if ((error as any)?.code === 401) {
      return null;
    }
    console.log("getCurrentUser error", error);
    throw new Error(error as string);
  }
};
export const signOut = async () => {
  try{
     await account.deleteSession("current");
  } catch (error) {
    console.log("Logout error:", error);
  }
};