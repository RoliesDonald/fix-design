import { Part, User } from "./models";
import { connectToDB } from "./utils";

export const fectUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  console.log(q);

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetchUsers!");
  }
};

export const fectParts = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;
  console.log(q);
  try {
    connectToDB();
    const count = await Part.find({ partName: { $regex: regex } }).count();
    const part = await Part.find({ partName: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, part };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetchParts!");
  }
};
