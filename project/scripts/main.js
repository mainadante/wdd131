// Get current year
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

// Get last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;

// Mobile menu toggle

const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", function () {
        navMenu.classList.toggle("open");

        if (navMenu.classList.contains("open")) {
            menuBtn.textContent = "✖";
        } else {
            menuBtn.textContent = "☰";
        }
    });
}

/* DESTINATIONS PAGE CODE */

const destinations = [
    {
        name: "Paris",
        region: "Europe",
        description: "Visit the Eiffel Tower and enjoy French cuisine."
    },
    {
        name: "Rio de Janeiro",
        region: "South America",
        description: "Explore beaches and Christ the Redeemer."
    },
    {
        name: "Tokyo",
        region: "Asia",
        description: "Experience modern technology and culture."
    }
];

function renderDestinations(region = "all") {

    const container = document.querySelector("#destinationContainer");

    if (!container) return;

    const filtered =
        region === "all"
            ? destinations
            : destinations.filter(destination =>
                destination.region === region
            );

    container.innerHTML = "";

    filtered.forEach(destination => {

        container.innerHTML += `
            <div class="card-destination">
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
                <button onclick="saveFavorite('${destination.name}')">
                    Save Favorite
                </button>
            </div>
        `;
    });
}

function saveFavorite(destinationName) {

    let favorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

    if (!favorites.includes(destinationName)) {
        favorites.push(destinationName);
    }

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    displayFavorites();
}

function displayFavorites() {

    const list = document.querySelector("#favoritesList");

    if (!list) return;

    const favorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

    list.innerHTML = favorites
        .map(item => `<li>${item}</li>`)
        .join("");
}

const filter = document.querySelector("#filter");

if (filter) {

    renderDestinations();
    displayFavorites();

    filter.addEventListener("change", () => {
        renderDestinations(filter.value);
    });
}