const express = require("express");
const authController = require("../controllers/auth");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/add");
router.post("/dataDPD", authController.addDPD);
router.post("/dataRaben", authController.addRaben);
router.post("/dataMat", authController.addMat);
router.post("/editDPD", authController.searchResultDPD);
router.post("/editRaben", authController.searchResultRaben);
router.post("/editMaterials", authController.searchResultMat);
router.post("/rabenEdited", authController.editedRaben);
router.post("/dpdEdited", authController.editedDPD);
router.post("/matEdited", authController.editedMat);
router.post("/viewDPD", authController.viewDPD);

module.exports = router;
