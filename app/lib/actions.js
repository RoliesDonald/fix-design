import { revalidatePath } from "next/cache";
import { User } from "./models";
import { connectToDB } from "./utils";

import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export const addUser = async (formData) => {
  "use server";
  const {
    username,
    email,
    password,
    isAdmin,
    isActive,
    lastname,
    firstname,
    phone,
    address,
    id,
  } = Object.fromEntries(formData);

  try {
    connectToDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      isAdmin,
      isActive,
      lastname,
      firstname,
      phone,
      address,
      id,
    });
    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/home/employee");
  redirect("/home/employee");
};
