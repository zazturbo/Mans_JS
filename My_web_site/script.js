let navShoppingCart = document.querySelector(".fa-cart-shopping");
let navMenu = document.querySelector(".showcase-container");

//Car selectors
let carSelector1 = document.getElementById("car-selector-1");
let carSelector2 = document.getElementById("car-selector-2");
let carSelector3 = document.getElementById("car-selector-3");
let carSelector4 = document.getElementById("car-selector-4");
let carSelector5 = document.getElementById("car-selector-5");
let carSelector6 = document.getElementById("car-selector-6");
let carSelector7 = document.getElementById("car-selector-7");
let carSelector8 = document.getElementById("car-selector-8");
let carSelector9 = document.getElementById("car-selector-9");

//Checkout Icon
let checkoutIcon = document.getElementById("checkout");

//Displaying the main menu
navShoppingCart.addEventListener("click", function () {
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "block";
  }
});

//List element
var listElement = document.createElement("li");

//Setting up each car selector
let carSelectors = [
  carSelector1,
  carSelector2,
  carSelector3,
  carSelector4,
  carSelector5,
  carSelector6,
  carSelector7,
  carSelector8,
  carSelector9,
];

// // Setting up the JSON
// async function info() {
//   return fetch("data.json").then((res) => res.json());
// }
// const data = await info();

//Iterating through the car selectors
carSelectors.forEach(function (elem, index) {
  console.log(elem);
  let toggle = true;

  // Individual reference for each car selector
  let nodeReference = null;

  // Car Selector event listener
  elem.addEventListener("click", function () {
    console.log("Click!");
    toggle = !toggle;

    //Icon animation
    elem.classList.toggle("fa-circle-minus");

    //Toggle for deleting the last reference
    if (toggle) {
      navMenu.removeChild(nodeReference);
      return;
    }

    //Storages the info if necessary
    let currentCarInfo = data[index];

    const listElement = document.createElement("span");
    listElement.classList.add("list-group");
    listElement.innerHTML = currentCarInfo.name;

    //Adds the element to the DOM once verified
    navMenu.appendChild(listElement);

    //Creating element reference
    nodeReference = listElement;
  });
});

//Checkout
checkoutIcon.addEventListener("click", function () {
  if (navMenu.children.length > 0) {
    alert(
      "Thanks for your purchase! You have selected a total of " +
        navMenu.children.length +
        " items."
    );
  } else {
    alert("Please select a least one item!");
  }
});
