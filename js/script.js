document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prepreči privzeto obnašanje brskalnika

  const username = document.querySelector("#username input").value.trim();
  const password = document.querySelector("#password input").value.trim();


  if (username === "" || password === "") {
    Swal.fire({
      icon: "error",
      title: "Attention!",
      text: "Please fill in all fields before logging in.",
      confirmButtonText: "OK",
      confirmButtonColor: "#808DFB"
    });
    return;
  }

  //preveri če je pravilna kombinacija test/test
  if (username === "username2025" && password === "Password2025") {
    Swal.fire({
      icon: "success",
      title: "Login successful",
      text: "Welcome back!",
      confirmButtonText: "OK",
      confirmButtonColor: "#808DFB"
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Login failed",
      text: "Incorrect username and password combination",
      confirmButtonText: "OK",
      confirmButtonColor: "#808DFB"
    });
  }
});
togglePassword.addEventListener("click", function () {
  const isPassword = passwordInput.type === "password";

  passwordInput.type = isPassword ? "text" : "password";

  // switch the icons
  togglePassword.src = isPassword
    ? "images/eye-open.svg"
    : "images/eye-closed.svg";
});
function credits(){
	Swal.fire({
      icon: "question",
      title: "Credits:",
      text: "Maj Komel, 4.RA",
	  
      confirmButtonText: "OK",
      confirmButtonColor: "#808DFB"
    });
}

