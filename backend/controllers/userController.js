import User from "../modals/userModal.js";
import AsyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

const authUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invlaid error");
  }

  res.send({ email, password });
});

const registerUser = AsyncHandler(async (req, res) => {
  const { email, name, password } = req.body;

  const user = await User.findOne({ email: email });

 if (user) {
    res.status(400);
    throw new Error("User exists")
 }

 const newUser = await User.create({
    name,
    email,
    password
 })

 if (newUser) {
    res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        token: generateToken(newUser._id),
    })
 }else {
    res.status(400)
    throw new Error('Invalid userData')
 }

  res.send({ email, password });
});

const getUserProfile = AsyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("User not Found");
  }
});

export { authUser, getUserProfile, registerUser };
