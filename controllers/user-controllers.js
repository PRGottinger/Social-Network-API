const { User, Thought } = require("../models");

module.exports = {
  getAllUser: (req, res) => {
      console.log(User)
    User.find().then((userData) => {
      res.json(userData);
    });
  },
  getSingleUser: (req, res) => {
    User.findOne({ _id: req.params.id }).then((userData) => {
      res.json(userData);
    });
  },
  createUser: (req, res) => {
    User.create(req.body).then((userData) => {
      res.json(userData);
    });
  },
  updateUser: (req, res) => {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    ).then((userData) => {
      res.json(userData);
    });
  },
  deleteUser: (req, res) => {
    User.findOneAndDelete({ _id: req.params.id }).then((userData) => {
      res.json(userData);
    });
  },
};
