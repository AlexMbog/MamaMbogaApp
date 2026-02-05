import { Models } from "react-native-appwrite";
export interface User extends Models.Document {
    $id: string;
  accountId: string;

  firstname: string;
  secondname: string;
  email: string;
  avatar: string;
  category?: string;

  phone?: string;
  location?: string;
}

interface CreateUserParams {
  email: email;
  password: string;
  firstname: string;
  lastname: string;
}
interface SignInParams {
  email: string;
  password: string;
}
