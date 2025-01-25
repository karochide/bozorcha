document.addEventListener("DOMContentLoaded", () => {
  const authForm = document.querySelector("#authForm");

  authForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Barcha form elementlarini olish
    const ism = document.querySelector("#ism");
    const email = document.querySelector("#email");
    const parol1 = document.querySelector("#parol1");
    const parol2 = document.querySelector("#parol2");

    // Formani validatsiya qilish
    let isValid = true;

    if (!ism.value.trim()) {
      ism.classList.add("is-invalid");
      isValid = false;
    } else {
      ism.classList.remove("is-invalid");
      ism.classList.add("is-valid");
    }

    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.classList.add("is-invalid");
      isValid = false;
    } else {
      email.classList.remove("is-invalid");
      email.classList.add("is-valid");
    }

    if (parol1.value.length < 6) {
      parol1.classList.add("is-invalid");
      isValid = false;
    } else {
      parol1.classList.remove("is-invalid");
      parol1.classList.add("is-valid");
    }

    if (parol2.value !== parol1.value) {
      parol2.classList.add("is-invalid");
      isValid = false;
    } else {
      parol2.classList.remove("is-invalid");
      parol2.classList.add("is-valid");
    }

    if (isValid) {
      // Agar hamma ma'lumot to'g'ri bo'lsa, localStorage'ga yozish
      localStorage.setItem("ism", ism.value.trim());
      localStorage.setItem("email", email.value.trim());
      localStorage.setItem("parol", parol1.value.trim());
      window.location.href = "index.html";
    }
  });
});
