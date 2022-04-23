const {
  getAllUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controllers.js");

const router = require("express").Router()

// /api/users/
router.route('/').get(getAllUser).post(createUser);

// /api/users/eds123123123sdgsgerger324safa
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;

