const BaseController = require("./baseController");
const BooksModel = require("../models/booksModel");
class Books extends BaseController {
  constructor() {
    super(BooksModel, Books);
  }
}
module.exports = new Books();
