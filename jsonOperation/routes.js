const express = require("express");
const router = express.Router();

const {
  createRecord,
  getAllRecords,
  updateRecord,
  deleteRecord,
} = require("../jsonOperation/CRUD");

//create new record

router.post("/createRecord", (req, res) => {
  const newRecord = req.body;
  createRecord(newRecord, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json({
        message: "record created successfully...",
      });
    }
  });
});

router.get("/records", (req, res) => {
  getAllRecords((err, records) => {
    if (err) {
      res.status(500).send(err).json({
        message: err.message,
      });
    } else {
      res.status(200).json({
        message: records,
      });
    }
  });
});

router.put("/updateRecord/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const updatedRecord = req.body;
  updateRecord(id, updatedRecord, (err, message) => {
    if (err) {
      return res.status(500).send(err).json({ message: err.message });
    } else {
      res.send(message).json({ message: "Record Updated successfully..." });
    }
  });
});

router.delete("/deleteRecord/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  deleteRecord(id, (err, message) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    } else {
      return res
        .status(200)
        .json({ message: "Record deleted successfully..." });
    }
  });
});
//exports
module.exports = router;
