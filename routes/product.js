const asyncHandler = require("express-async-handler");
const productRouter = require("express").Router();

const {
  handleproductGetAll,
  handleproductGetOne,
  handleproductPost,
  handleproductPutOne,
  handleproductDeleteOne,
  handleGetCategory
} = require("../controllers/product");

productRouter.get("/", asyncHandler(handleproductGetAll));
productRouter.get("/:id", asyncHandler(handleproductGetOne));
productRouter.get("/category/:category", asyncHandler(handleGetCategory));
productRouter.post("/", asyncHandler(handleproductPost));
productRouter.put("/:id", asyncHandler(handleproductPutOne));
productRouter.delete("/:id", asyncHandler(handleproductDeleteOne));

module.exports = productRouter;
