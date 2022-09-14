let returnBtn = document.getElementById("return-btn");
console.log(returnBtn);
if (returnBtn !== null) {
  returnBtn.addEventListener("click", () => {
    console.log("click");
    location.href = "/home";
  });
}

let dpdEdit = document.getElementById("db-select-1");
if (dpdEdit !== null) {
  dpdEdit.addEventListener("click", () => {
    location.href = "/editDPD";
  });
}

let rabenEdit = document.getElementById("db-select-2");
if (rabenEdit !== null) {
  rabenEdit.addEventListener("click", () => {
    location.href = "/editRaben";
  });
}

let materialEdit = document.getElementById("db-select-3");
if (materialEdit !== null) {
  materialEdit.addEventListener("click", () => {
    location.href = "/editMaterials";
  });
}

let addBtn = document.getElementById("add-btn");
if (addBtn !== null) {
  addBtn.addEventListener("click", () => {
    location.href = "/add";
  });
}

let editBtn = document.getElementById("edit-btn");
if (editBtn !== null) {
  editBtn.addEventListener("click", () => {
    location.href = "/edit";
  });
}

let viewBtn = document.getElementById("view-btn");
if (viewBtn != null) {
  viewBtn.addEventListener("click", () => {
    location.href = "/view";
  });
}

let calcBtn = document.getElementById("calc-btn");
if (calcBtn != null) {
  calcBtn.addEventListener("click", () => {
    location.href = "/calculator";
  });
}

let homeReturn = document.getElementById("home-return");
if (homeReturn != null) {
  homeReturn.addEventListener("click", () => {
    location.href = "/home";
  });
}

let editAnother = document.getElementById("edit-another");
if (editAnother != null) {
  editAnother.addEventListener("click", () => {
    location.href = "/edit";
  });
}

let viewDPD = document.getElementById("db-view-1");
if (viewDPD != null) {
  viewDPD.addEventListener("click", () => {
    location.href = "/viewDPD";
  });
}

let viewRaben = document.getElementById("db-view-2");
if (viewRaben != null) {
  viewRaben.addEventListener("click", () => {
    location.href = "/viewRaben";
  });
}

let viewMat = document.getElementById("db-view-3");
if (viewMat != null) {
  viewMat.addEventListener("click", () => {
    location.href = "/viewMat";
  });
}
