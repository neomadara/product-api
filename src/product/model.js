const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: String,
        quantity: Number,
        categories: [ {type: String} ],
        sku: { type: String, unique: true }
    }
)

module.exports = mongoose.model('Product', productSchema)
