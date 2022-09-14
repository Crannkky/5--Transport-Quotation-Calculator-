const logOut = document.getElementById("log-out-btn");
console.log(logOut);
logOut.addEventListener("click", () => {
  location.href = "/login";
});
