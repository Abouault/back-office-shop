const db = require("../db.js");
const { RecordNotFoundError } = require("../error-types");
const definedAttributesToSqlSet = require("../helpers/definedAttributesToSQLSet.js");

const findById = async (id, failIfNotFound = true) => {
  const rows = await db.query("SELECT * FROM products WHERE id = ?", [id]);
  if (rows.length) {
    return rows[0];
  }
  if (failIfNotFound) throw new RecordNotFoundError();
  return null;
};

const findByCat = async (category, failIfNotFound = true) => {
  const rows = await db.query("SELECT * FROM products WHERE category = ?", [
    category,
  ]);
  if (rows.length) {
    return rows;
  }
  if (failIfNotFound) throw new RecordNotFoundError();
  return null;
};

const getAllproduct = async () => {
  return db.query("SELECT * FROM products");
};

const postOneproduct = async (formData) => {
  return db
    .query(
      `INSERT INTO products SET ${definedAttributesToSqlSet(formData)}`,
      formData
    )
    .then((res) => findById(res.insertId));
};

const putOneproduct = async (id, formData) => {
  const attribute = definedAttributesToSqlSet(formData);
  return db
    .query(`UPDATE products SET ${attribute} WHERE id = :id`, {
      ...formData,
      id,
    })
    .then(() => findById(id));
};

const deleteOneproduct = async (id) => {
  await db.query("DELETE FROM products WHERE id = ?", id);
};

module.exports = {
  getAllproduct,
  findById,
  postOneproduct,
  putOneproduct,
  deleteOneproduct,
  findByCat,
};
