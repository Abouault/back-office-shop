const productRouter= require('./product');

module.exports = (app) => {
  app.use('/product', productRouter);
};