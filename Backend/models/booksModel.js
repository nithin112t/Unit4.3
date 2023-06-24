var mongoose = require("mongoose");

var booksSchema = mongoose.Schema({
  book_id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  author_name: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    required: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Books = mongoose.model("Books", booksSchema);
module.exports = Books;
