const orm = require("../config/orm.js");

const burger = {
  selectAll: function (cb) {
    orm.all("burgers", function (result) {
      cb(result);
    });
  },
  insertOne: function (cols, name, cb) {
    orm.create("burgers", cols, name, function (result) {
      cb(result);
    });
  },
  updateOne: function (id, cb) {
    orm.update(id, function (result) {
      cb(result);
    });
  },
  deleteOne: function (id, cb) {
    orm.delete(id, function (result) {
      cb(result);
    });
  }
};

module.exports = burger;