const {
  getAllThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thought-controllers.js");

const router = require("express").Router();

// /api/thought/
router.route("/").get(getAllThought).post(createThought);

// /api/thought/eds123123123sdgsgerger324safa
router
  .route("/:id")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:id/reactions").post(createReaction).delete(deleteReaction);

module.exports = router;
