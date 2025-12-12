document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let errorMsg = document.getElementById("errorMsg");
  let form = document.getElementById("myForm");

  if (username === "" || email === "" || password === "") {
    errorMsg.textContent = "All fields are required!";
    errorMsg.style.color = "red";
    return;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    errorMsg.textContent = "Invalid email format!";
    errorMsg.style.color = "red";
    return;
  }

  if (password.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters!";
    errorMsg.style.color = "red";
    return;
  }

  form.style.display = "none";
  errorMsg.textContent = "✅ Submitted successfully!";
  errorMsg.style.color = "green";
});
