const mongoose = require('mongoose');

const productCategorySchema = new mongoose.Schema({
  name: String,
  desc: String,
  created_at: { type: Date, default: Date.now },
  modified_at: Date,
  deleted_at: Date
});

const productSchema = new mongoose.Schema({
  name: String,
  desc: String,
  SKU: String,
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductCategory'
  },
  inventory_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductInventory'
  },
  price: Number,
  discount_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Discount'
  },
  created_at: { type: Date, default: Date.now },
  modified_at: Date,
  deleted_at: Date
});

const productInventorySchema = new mongoose.Schema({
  quantity: Number,
  created_at: { type: Date, default: Date.now },
  modified_at: Date,
  deleted_at: Date
});

const discountSchema = new mongoose.Schema({
  name: String,
  desc: String,
  discount_percent: Number,
  active: Boolean,
  created_at: { type: Date, default: Date.now },
  modified_at: Date,
  deleted_at: Date
});

const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);
const Product = mongoose.model('Product', productSchema);
const ProductInventory = mongoose.model('ProductInventory', productInventorySchema);
const Discount = mongoose.model('Discount', discountSchema);

// Export the models
module.exports = {
  ProductCategory,
  Product,
  ProductInventory,
  Discount
};
