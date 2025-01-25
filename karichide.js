document.addEventListener("DOMContentLoaded", () => {

  const auth = document.querySelector(".auth");
  const savedName = localStorage.getItem("ism");

  if (savedName) {
    auth.innerHTML = `
      <span style="color: white;">Hello, ${savedName}</span>
      <button class="btn btn-outline-light m-2 exit">Logout</button>
    `;
  }


  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("exit")) {
      localStorage.clear();
      location.reload();
    }
  });


  const form = document.getElementById("authForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("ism").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("parol1").value;
    const confirmPassword = document.getElementById("parol2").value;

    if (!name || !email || !password || !confirmPassword) {
      alert("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Parolni tasdiqlang");
      return;
    }

    localStorage.setItem("ism", name);
    localStorage.setItem("email", email);
    localStorage.setItem("parol", password);

    alert("Sign-Up Successful!");
    location.reload();
  });
});
