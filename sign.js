document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#authForm").addEventListener("submit", (e) => {
      e.preventDefault();
  
      let ism = document.querySelector("#ism").value.trim();
      let email = document.querySelector("#email").value.trim();
      let paroll = document.querySelector("#parol1").value.trim();
      let parol2 = document.querySelector("#parol2").value.trim();
  
      if (ism && email && paroll === parol2 && paroll.length >= 5) {
        localStorage.setItem("email", email);
        localStorage.setItem("parol", paroll);
        localStorage.setItem("ism", ism);
        window.location.href = "index.html";
      } else {
        alert(`Qaytadan urining ${ism}`);
      }
    });
  });
  