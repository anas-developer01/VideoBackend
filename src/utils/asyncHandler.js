const asyncHandler = (reqestHandler) => {
  return (req, res, next) => {
    Promise.resolve(reqestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};
export { asyncHandler };

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
