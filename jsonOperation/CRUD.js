const fs = require("fs");
const filePath = "../jsonOperation/data.json";

exports.createRecord = function (newRecord, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return callback(err);
    }
    const records = JSON.parse(data);
    records.push(newRecord);

    fs.writeFile(filePath, JSON.stringify(records, null, 2), "utf8", (err) => {
      if (err) {
        return callback(err);
      }
      callback(null, "Record created successfully");
    });
  });
};

exports.getAllRecords = function (callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return callback(err);
    }
    const records = JSON.parse(data);
    callback(null, records);
  });
};

exports.updateRecord = function (id, updatedRecord, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return callback(err);
    }
    let records = JSON.parse(data);
    records = records.map((record) =>
      record.id === id ? { ...updatedRecord } : record
    );
    fs.writeFile(filePath, JSON.stringify(records, null, 2), "utf8", (err) => {
      if (err) {
        return callback(err);
      }
      callback(null, "Record updated successfully...");
    });
  });
};

exports.deleteRecord = function (id, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return callback(err);
    }
    let records = JSON.parse(data);
    records = records.filter((record) => record.id !== id);

    fs.writeFile(filePath, JSON.stringify(records, null, 2), (err) => {
      if (err) {
        return callback(err);
      }
      callback(null, "Record deleted successfully....");
    });
  });
};
