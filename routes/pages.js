const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/home", (req, res) => {
  res.render("home");
});

router.get("/add", (req, res) => {
  res.render("add");
});

router.get("/edit", (req, res) => {
  res.render("edit");
});

router.get("/view", (req, res) => {
  res.render("view");
});

router.get("/calculator", (req, res) => {
  res.render("calculator");
});

router.get("/dataDPD", (req, res) => {
  res.render("dataDPD");
});

router.get("/dataRaben", (req, res) => {
  res.render("dataRaben");
});

router.get("/dataMat", (req, res) => {
  res.render("dataMat");
});

router.get("/editDPD", (req, res) => {
  res.render("editDPD");
});

router.get("/editRaben", (req, res) => {
  res.render("editRaben");
});

router.get("/editMaterials", (req, res) => {
  res.render("editMaterials");
});

router.get("/editformRab", (req, res) => {
  res.render("editformRab");
});

router.get("/rabenEdited", (req, res) => {
  res.render("rabenEdited");
});

router.get("/dpdEdited", (req, res) => {
  res.render("dpdEdited");
});

router.get("/matEdited", (req, res) => {
  res.render("matEdited");
});

router.get("/noDataFoundMat", (req, res) => {
  res.render("noDataFoundMat");
});

router.get("/viewDPD", (req, res) => {
  res.render("viewDPD");
});

router.get("/viewRaben", (req, res) => {
  res.render("viewRaben");
});

router.get("/viewMat", (req, res) => {
  res.render("viewMat");
});

module.exports = router;
