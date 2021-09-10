const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

// Step 1.2 Catogory Schema 
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32,
    unique: true,
  },
});
// Step 1.3 Image Schema
const imageSchema = new mongoose.Schema({
  require: true,
  img: {
    data: Buffer,
    contentType: String,
  },
  timestamps: true,
});

// Step 1.4 Ingredients Schema 
const ingredientSchema = new mongoose.Schema({
  ingredientName: {
    type: String,
    maxlength: 25,
  },
  quantity: {
    type: Number,
    default: 0,
    min: 0,
    max: 9999,
  },
  type: {
    type: String,
    trim: true,
    required: true,
    maxlength: 10,
  },
});
// Step 1.5 Method/ prepare Schema
const instructionSchema = new mongoose.Schema({
  order: Number,
  step: {
    type: String,
    required: true,
    maxlength: 2000,
  },
});

const recipeSchema = new mongoose.Schema(
  {
    nameOfRecipe: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    description: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    category: [categorySchema],
    images: [imageSchema],
    ingredient: [ingredientSchema],
    instructions: [instructionSchema],
    people: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeSchema);
