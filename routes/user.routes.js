const express = require("express");
const userMiddleware = require("../middlewares/user.middleware.js");
const userController = require("../controllers/user.controller.js");
const userUtil = require("../utils/user.util.js");
const authMiddleware = require("../middlewares/auth.middleware.js");

const router = express.Router();

router.get("/all-users", userController.getAllUsers);
router.get("/user-info", authMiddleware.authenticateToken, userController.userInfo);
router.post("/signup", userUtil.validateSignUpSignUp, userMiddleware.checkUserExistsSignUp, userController.signUp);
router.post("/login", userMiddleware.checkUserExistLogin, userController.login);
router.post("/refresh-token", userController.refreshToken);
router.post("/logout", authMiddleware.authenticateToken, userController.logout);
router.patch("/update-user", authMiddleware.authenticateToken, userController.updateUser);
router.delete("/delete", authMiddleware.authenticateToken, userController.deleteUser);
router.post("/sendOTP", userController.sendOTP);
// Lấy tất cả user
router.get("/all", authMiddleware.authenticateToken, userController.getAllUsers);

// Tìm kiếm user
router.get("/search", authMiddleware.authenticateToken, userController.searchUsers);

module.exports = router;