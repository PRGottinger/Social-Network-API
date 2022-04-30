const req = require("express/lib/request");
const { User, Thought } = require("../models");

module.exports = {
  getAllThought: (req, res) => {
    console.log(Thought);
    Thought.find().then((thoughtData) => {
      res.json(thoughtData);
    });
  },
  getSingleThought: (req, res) => {
    Thought.findOne({ _id: req.params.id }).then((thoughtData) => {
      res.json(thoughtData);
    });
  },
  createThought: (req, res) => {
    Thought.create(req.body).then((thoughtData) => {
      res.json(thoughtData);
    });
  },
  updateThought: (req, res) => {
    Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    ).then((thoughtData) => {
      res.json(thoughtData);
    });
  },
  deleteThought: (req, res) => {
    Thought.findOneAndDelete({ _id: req.params.id }).then((thoughtData) => {
      res.json(thoughtData);
    });
  },

  createReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.id },
      { $push: { reactions: body } },
      { new: true }
    ).then((reactionData) => {
      res.json(reactionData);
    });
  },
  deleteReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.id },
      {
        $pull: {
          reactions: {
            _id: body.reactionId,
          },
        },
      },
      { new: true }
    ).then((reactionData) => {
      res.json(reactionData);
    });
  },
};
