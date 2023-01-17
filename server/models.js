const pool = require('./db.js');

const getProducts = async () => {
  try {
    const { rows } = await pool.query('SELECT * FROM product LIMIT 5')
    return rows;
  } catch (e) {
    return e;
  }
}

const getOneProduct = async (id) => {
  try {
    const data = await pool.query('SELECT * FROM product WHERE id = ' + id);
    return data.rows;
    
  } catch (e) {
    return e;
  }
};

const getStyles = async (id) => {
  try {
    const { rows } = await pool.query('SELECT * FROM styles WHERE productid = ' + id);
    
    let output = {
      product_id: id,
      results: []
    };

    rows.forEach((row) => {
      let oneStyle = {
        style_id: row.id,
        name: row.name,
        original_price: row.original_price,
        "default?": row.default_style === 1 ? true : false,
        // photos: [],
        // skus: {}
      };

      output.results.push(oneStyle);
    })

    return output;
    
  } catch (e) {
    return e;
  }
};

const getRelated = async (id) => {
  try {
    const data = await pool.query('SELECT * FROM related WHERE current_product_id = ' + id);
    // console.log(data);
    return data.rows;
    
  } catch (e) {
    return e;
  }
};


module.exports = { getProducts, getOneProduct, getStyles, getRelated };