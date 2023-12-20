import User from "../model/User.js";
import bcrypt from "bcryptjs";

const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (e) {
    console.log(e, "db operation failed");
  }
  if (!users) {
    res.status(404).json({ message: "No users found" });
  } else {
    res.status(200).json({ users });
  }
};

export const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (e) {}
  if (existingUser) {
    return res.status(400).json({ msg: "User already available" });
  } else {
    const user = new User({
      name,
      email,
      password: bcrypt.hashSync(password),
    });
    try {
      user.save();
    } catch (e) {
      console.log(e, "error-----35");
    }

    return res.status(201).json({ user });
  }
};

export const login = async (req, res, next) => {
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (e) {
    console.log(e, "LLLLLL");
  }
  if (!existingUser) {
    return res.status(404).json({ msg: "User not found" });
  }
  const ispwdCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!ispwdCorrect) {
    return res.status(400).json({ msg: "Incorrect details" });
  }
  return res.status(200).json({ msg: "Login success" });
};

export { getAllUsers };
