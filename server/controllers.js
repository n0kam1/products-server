const models = require('./models.js');

const getProducts = async (req, res) => {
  try {
    const data = await models.getProducts()
    // console.log(data);
    res.send(data);
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
};

const getOneProduct = async (req, res) => {
  try {
    const data = await models.getOneProduct(req.params.product_id);
    res.send(data);
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
};

const getStyles = async (req, res) => {
  try {
    const data = await models.getStyles(req.params.product_id);
    res.send(data);
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
};

const getRelated = async (req, res) => {
  try {
    const data = await models.getRelated(req.params.product_id);
    res.send(data);
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
};

module.exports = { getProducts, getOneProduct, getStyles, getRelated };