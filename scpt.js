document.addEventListener("DOMContentLoaded", function () {
    let row = document.querySelector(".row");
    let searchInput = document.querySelector("#search");

    function displayClothes(clothesToDisplay) {
        row.innerHTML = ""; // Oldingi kontentni tozalash
        clothesToDisplay.forEach((item) => {
            let div = document.createElement("div");
            div.classList.add("col-3", "mt-2");
            div.innerHTML = `
                <div class="card">
                    <img src="${item.rasmi[0]}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.nomi || "No name"}</h5>
                        <p class="card-text">${item.narxi} $</p>
                        <a href="product.html?id=${item.id}" class="btn btn-primary">Buy</a>
                    </div>
                </div>
            `;
            row.append(div);
        });
    }

    // Boshida barcha kiyimlarni ko'rsatish
    displayClothes(clothes);

    // Navbar'ga "Create" link qo'shish
    let navbar = document.querySelector("#navbarColor01");
    let li = document.createElement("li");
    li.classList.add("nav-item");
    li.innerHTML = `<a class="nav-link" href="create.html">Create</a>`;
    navbar.appendChild(li);

    // Qidiruv funksiyasi
    searchInput.addEventListener("input", function (e) {
        let inpval = e.target.value.trim().toLowerCase();
        let filteredClothes = clothes.filter((item) =>
            (item.nomi || "").toLowerCase().includes(inpval)
        );
        displayClothes(filteredClothes);
    });
});
