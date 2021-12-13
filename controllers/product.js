const {
  getAllproduct,
  findById,
  postOneproduct,
  putOneproduct,
  deleteOneproduct,
  findByCat,
} = require("../models/product");

module.exports.handleGetCategory = async (req, res) => {
  const rawData = await findByCat(req.params.category);
  res.send(rawData);
};

module.exports.handleproductGetAll = async (req, res) => {
  const rawData = await getAllproduct();
  res.send(rawData);
};

module.exports.handleproductGetOne = async (req, res) => {
  res.send(await findById(req.params.id));
};

module.exports.handleproductPost = async (req, res) => {
  const { name, price, description, image, category } = req.body;
  const data = await postOneproduct({
    name,
    image,
    price,
    description,
    category,
  });
  return res.status(201).send(data);
};

module.exports.handleproductPutOne = async (req, res) => {
  const { name, image, price, description } = req.body;
  const attribute = {
    name,
    image,
    price,
    description,
  };
  const data = await putOneproduct(req.params.id, attribute);
  res.send(data);
};

module.exports.handleproductDeleteOne = async (req, res) => {
  await deleteOneproduct(req.params.id);
  res.sendStatus(204);
};
