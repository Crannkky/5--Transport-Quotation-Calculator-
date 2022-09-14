let dbSelectBtn = document.getElementById("db-btn");
let dbSelect = document.getElementById("db-select");
let dpdForm = document.getElementById("dpd-form");
let rabenForm = document.getElementById("raben-form");
let materialForm = document.getElementById("material-form");

console.log(dbSelectBtn);
console.log(dbSelect);
console.log(dbSelect.value);

dbSelectBtn.onclick = () => {
  if (dbSelect.value === "dpd-local") {
    dpdForm.classList.remove("hide");
    rabenForm.classList.add("hide");
    materialForm.classList.add("hide");
  } else if (dbSelect.value === "raben-local") {
    rabenForm.classList.remove("hide");
    dpdForm.classList.add("hide");
    materialForm.classList.add("hide");
  } else {
    materialForm.classList.remove("hide");
    rabenForm.classList.add("hide");
    dpdForm.classList.add("hide");
  }
};
