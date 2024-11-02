function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "" || password === "") {
      alert("Please fill out both fields.");
    } else {
      alert("Invalid!!");
    }
  }
  