import {Router} from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  // refreshAccessToken
} from "@/controllers/user.controller";
import { upload } from "@/middlewares/multer.middleware";
import { verifyJWT } from "@/middlewares/auth.middleware";
 
const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logoutUser);

// router.route("/refresh-token").post(refreshAccessToken);

export default router;
