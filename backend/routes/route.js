const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel.js");

router.post("/book", async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;
    if (!title || !author || !publishYear) {
      return res.send("send all required field");
    }

    const newBook = {
      title,
      author,
      publishYear,
    };

    const book = await Book.create(newBook);

    return res.status(201).json(book);
  } catch (e) {
    console.error(e);
    return res.status(500).send("Internal Server Error");
  }
});

router.get("/allbooks", async (req, res) => {
  try {
    const book = await Book.find();
    res.send(book);
  } catch (e) {
    console.log(e.message);
  }
});

router.get("/book/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.send(book);
  } catch (e) {
    console.log(e.message);
  }
});

router.put("/book/:id", async (req, res) => {
  const { title, author, publishYear } = req.body;
  if (!title || !author || !publishYear) {
    return res.send("send all required field");
  }
  const { id } = req.params;

  const result = await Book.findByIdAndUpdate(id, req.body);
  res.json({ message: "Book updated Successfully", result });
});

router.delete("/book/:id", async (req, res) => {
  const { id } = req.params;

  const result = await Book.findByIdAndDelete(id, req.body);

  if (!result) {
    return res.send("No Book Data");
  }
  res.json({ message: "Book deleted Successfully", result });
});

module.exports = router;
