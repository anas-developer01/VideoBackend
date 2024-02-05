"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncHandler = void 0;
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error));
    };
};
exports.asyncHandler = asyncHandler;
// const asyncHandler = () => async(fun) => {
//     try {
//         await(req,res,next)
//     } catch (error) {
//         req.status(error.code||500).json({
//             success : false,
//             message:error.message
//         })
//     }
// }
// export {asyncHandler}
