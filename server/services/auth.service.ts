import userModel from "../models/user.model";
import ApiError from "../utils/ApiError";
import bcrypt from "bcrypt"

export const registerUser = async (data: any) => {
  const existingEmail = await userModel.findOne({
    email: data.email,
  });

  if (existingEmail) {
    throw new ApiError(400, "Email already exists");
  }

  const existingUsername = await userModel.findOne({
    username: data.username,
  });

  if (existingUsername) {
    throw new ApiError(400, "Username already exists");
  }

  const user = await userModel.create(data);

  return user;
};

export const loginUser = async (
  email: string,
  password: string
) => {

  const user = await userModel
    .findOne({ email })
    .select("+password");
    console.log("User : ", user )

  if (!user) {
    throw new ApiError(401, "Invalid email or password");
  }

  console.log("Entered Password: ", password)
  console.log("Stored Hash : ", user.password)

  const isMatch = await bcrypt.compare(password, user.password)
  console.log("Direct Compare : ", isMatch)

//   const isMatch =
//     await user.comparePassword(password);
//     console.log("Password Match : ", isMatch)

  if (!isMatch) {
    throw new ApiError(401, "Invalid email or password");
  }

  user.lastLogin = new Date();

  await user.save();

  return user;
};