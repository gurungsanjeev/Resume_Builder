import User from '../model/user.model.js'

import bcrypt from "bcrypt";

export const Signup = async (req, res) => {
  try {
    let { name, email, password, confirmPassword } = req.body;

    // checking the all the input field
    if (!email || !password || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Please enter all the field",
      });
    }

    // converting the password into the string
    password = String(password);
    confirmPassword = String(confirmPassword);

    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "password and confirm password doesnot match",
      });
    }

    //checking if user already exist or not
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        success: "false",
        message: "User already exist, please use another email",
      });
    }

    // converting the password into the hashing
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await new User({
      name,
      email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
    });

    await newUser.save();

    res.status(200).json({
      success: true,
      message: "User register successfully",
      newUser,
    });
  } catch (error) {
    console.log("Error in signup controller", error);
  }
};

// # login controllers

export const Login = async (req, res) => {
  try {
    let { email, password } = req.body;

    // checking if the input field is empty or not
    if (!email || !password) {
      return req.status(400).json({
        success: false,
        message: "Credientials doesn't match",
      });
    }

    // converting the password into the string
    password = String(password);

    // finding the user

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(200).json({
        success: false,
        message: "User doesn't exist please signup",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Password and confirm password doesnot match",
      });
    }

    res.status(200).json({
      success: true,
      message: "User login successfully",
      user
    });
  } catch (error) {
    console.log("Error in login controller");
  }
};
