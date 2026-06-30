import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import { registerSchema, loginSchema } from "../validators/auth.validator";
import { registerUser, loginUser } from "../services/auth.service";
import ApiResponse from "../utils/ApiResponse";

export const register = asyncHandler(async (req: Request, res: Response) => {
  const data = registerSchema.parse(req.body);

  const user = await registerUser(data);

  const token = user.generateAccessToken();

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return res.status(201).json(
    new ApiResponse(true, "User registered successfully", {
      user,
      token,
    })
  );
});

export const login = asyncHandler(async (req, res) => {

    const { email, password } =
        loginSchema.parse(req.body);

    const user =
        await loginUser(email, password);

    const token =
        user.generateAccessToken();

    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(200).json(
        new ApiResponse(
            true,
            "Login Successful",
            {
                user: {
                    id: user._id,
                    fullName: user.fullName,
                    username: user.username,
                    email: user.email,
                    role: user.role
                }
            }
        )
    );

});


export const logout = asyncHandler(async (req, res) => {

    res.clearCookie("token", {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    });

    return res.status(200).json(
        new ApiResponse(
            true,
            "Logout Successful"
        )
    );

});

export const getMe = asyncHandler(async (req, res) => {
  return res.status(200).json(
    new ApiResponse(true, "User Profile", req.user)
  );
});