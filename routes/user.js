const router = require("express").Router();
const authController = require("../controllers/authContoller");
const userController = require("../controllers/userController");
const { verifyAndAuthorization, verifyToken } = require("../middleware/verifyToken");


// UPDATE USER

router.put("/:id", verifyAndAuthorization, userController.updateUser);




module.exports = router