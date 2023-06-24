var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");

const booksController = require("../controllers/booksController");

router.post("/add-book", async (req, res) => {
  data = req.body;
  data.book_id = uuidv4();
  booksController.create(data, (err, booksResponse) => {
    if (err) {
      return res.send({ response: err });
    }
    res.send({
      response: booksResponse,
    });
  });
});

router.post("/update-book", (req, res) => {
  let data = req.body;
  booksController.findOneAndUpdate(
    { book_id: req.body.book_id },
    data,
    (err, updatedBooks) => {
      if (err) {
        return res.send({ response: err });
      }
      res.send({
        response: updatedBooks,
      });
    }
  );
});

router.get("/find-book/:id", (req, res) => {
  booksController.find({ book_id: req.params.id }, (err, booksDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: booksDetails,
    });
  });
});

router.post("/delete-book", (req, res) => {
  booksController.findOneAndRemove(
    { book_id: req.body.book_id },
    (err, deletedBooks) => {
      if (err) {
        return res.send({ response: err });
      }

      res.send({
        response: deletedBooks,
      });
    }
  );
});

router.get("/find-all-books", (req, res) => {
  booksController.find({}, (err, allBooksDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allBooksDetails,
    });
  });
});

module.exports = router;
