import { Request, Response, NextFunction } from 'express';
import { ApiError } from "@/utils/apiError";
import { asyncHandler } from "@/utils/asyncHandler";
import { User } from "@/models/user.model";
import { Document } from 'mongoose';
import jwt, { JwtPayload } from "jsonwebtoken";

interface UserDocument extends Document {
    username: string;
    email: string;
    fullName: string;
    avatar: string;
    coverImage?: string;
    password: string;
    refreshToken?: string;
    isPasswordCorrect(password: string): Promise<boolean>;
    generateAccessToken(): string;
    generateRefreshToken(): string;
}

interface RequestWithUser extends Request {
  user?: UserDocument;
}

export const verifyJWT = asyncHandler(async (req: RequestWithUser, _: Response, next: NextFunction) => {
    try {
      const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
      if (!token) {
        throw new ApiError(401, "Unauthorized request");
      }
  
      const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string);
  
      if (typeof decodedToken === 'object' && '_id' in decodedToken) {
        const user = await User.findById((decodedToken as JwtPayload)._id).select("-password -refreshToken");
  
        if (!user) {
          throw new ApiError(401, "Invalid Access Token");
        }
  
        req.user = user;
        next();
      } else {
        throw new ApiError(401, "Invalid token");
      }
    } catch (error: any) {
      throw new ApiError(401, error?.message || "Invalid access token");
    }
  });

export default verifyJWT;