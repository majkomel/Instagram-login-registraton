
const passwordInput = document.getElementById("passwordInput");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {
  const isPassword = passwordInput.type === "password";

  passwordInput.type = isPassword ? "text" : "password";

  // switch the icons
  togglePassword.src = isPassword
    ? "images/eye-open.svg"
    : "images/eye-closed.svg";
});



document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const number = document.querySelector("#number input").value.trim();
  const password = document.querySelector("#password input").value.trim();
  const name = document.querySelector("#name input").value.trim();
  const username = document.querySelector("#username input").value.trim();

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (number === "" || password === "" || name === "" || username === "") {
    Swal.fire({
      icon: "error",
      title: "Attention!",
      text: "Please fill in all fields before continuing.",
      confirmButtonColor: "#808DFB"
    });
    return;
  }

  if (!passwordPattern.test(password)) {
    Swal.fire({
      icon: "error",
      title: "Weak password",
      text: "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter and one number.",
      confirmButtonColor: "#808DFB"
    });
    return;
  }

  Swal.fire({
    icon: "success",
    title: "Sign up successful",
    text: "You can now log in",
    confirmButtonColor: "#808DFB"
  }).then(() => {
    window.location.href = "index.html";
  });
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