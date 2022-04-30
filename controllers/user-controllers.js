const { User, Thought } = require("../models");

module.exports = {
  getAllUser: (req, res) => {
    console.log(User);
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

  addFriend({ params, body }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $push: { friends: params.friendId } },
      { new: true }
    ).then((reactionData) => {
      res.json(reactionData);
    });
  },
  deleteFriend({ params, body }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      {
        $pull: {
          friends: params.friendId,
        },
      },
      { new: true }
    ).then((reactionData) => {
      res.json(reactionData);
    });
  },
};
