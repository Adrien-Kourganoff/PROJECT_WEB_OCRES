const Note = require("../models/Note");
const mongoose = require("mongoose");

//Get all Notes
const getallNotes = async (req, res) => {
  try {
    const notes = await Note.find({}).sort({ creteadAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single Note
const getNote = async (req, res) => {
  //get id of the Note
  const { id } = req.params;

  //Check if the id has been created by MongoDB
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid id" });
  }

  const note = await Note.findById(id);

  // Check if the note id exists in the DB
  if (!note) {
    return res.status(404).json({ error: "Note not found" });
  }

  res.status(200).json(note);
};

// Create a new Note
const createNote = async (req, res) => {
  const { title, content } = req.body;

  // Create Customs Error for missing fields
  let emptyField = [];

  if (!title) emptyField.push("Title");
  if (!content) emptyField.push("Content");

  // If the list is not empty then some fields required are missing
  if (emptyField.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill all the fields", emptyField });
  }

  // Add the note to the DB
  try {
    const note = await Note.create({ title, content });
    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a Note
const deleteNote = async (req, res) => {
  //get id of the Note
  const { id } = req.params;

  //Check if the id has been created by MongoDB
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid id" });
  }

  try {
    const note = await Note.findByIdAndDelete(id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(200).json({ note });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createNote,
  getallNotes,
  getNote,
  deleteNote,
};
