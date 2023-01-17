const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/sdc`);

const Schema = mongoose.Schema;

const productsSchema = new Schema(
  {
    id: Number,
    name: String,
    slogan: String,
    description: String,
    category: String,
    default_price: Number,
    created_at: Date,
    updated_at: Date,
    features: Array,
    related: Array,
    styles: mongoose.Schema.Types.ObjectID
  }
);

const styleSchema = new Schema(
  {
    style_id: Number,
    name: String,
    original_price: String,
    sale_price: Number,
    default: Boolean,
    photos: Array,
    skus: mongoose.Schema.Types.ObjectID
  }
)

const skusSchema = new Schema(
  {
    sku_id: Number,
    quantity: Number,
    size: String
  }
)

const products = new mongoose.model('Products', productsSchema);
const style = new mongoose.model('Style', styleSchema);
const skus = new mongoose.model('Skus', skusSchema);