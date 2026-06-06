// Get current year
const year=new Date().getFullYear();
document.getElementById("currentyear").textContent=year;

// Get last modified date
const lastModified=document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;


// Product array

const productSelect = document.querySelector('#product');
const products = [
  {
    id: "fc-1888",
    name: "Flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "Power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "Time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "Low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "Warp equalizer",
    averagerating: 5.0
  }
];

products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});


// Review counter using localStorage
document.addEventListener("DOMContentLoaded", () => {
    // Get current count from localStorage
    let reviewCount = localStorage.getItem("reviewCount");

    // If nothing exists yet, start at 0
    if (!reviewCount) {
        reviewCount = 0;
    }

    // Convert to number and increment
    reviewCount = Number(reviewCount) + 1;

    // Save back to localStorage
    localStorage.setItem("reviewCount", reviewCount);

    // Optional: display it on the page (if you want)
    const counterDisplay = document.getElementById("reviewCounter");
    if (counterDisplay) {
        counterDisplay.textContent = reviewCount;
    }
});