"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadOnCloudinary = void 0;
const cloudinary_1 = require("cloudinary");
const fs_1 = __importDefault(require("fs"));
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath)
            return null;
        const response = await cloudinary_1.v2.uploader.upload(localFilePath, {
            resource_type: "auto",
        });
        console.log("file uploaded sucessfully", response.url);
        fs_1.default.unlinkSync(localFilePath);
        return response;
    }
    catch (error) {
        console.log(error, "=====>errorrooror");
        // fs.unlinkSync(localFilePath);
        return null;
    }
};
exports.uploadOnCloudinary = uploadOnCloudinary;
