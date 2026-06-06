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
