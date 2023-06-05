const modal = document.querySelector(".modal");
const BtnCloseModal = document.querySelector(".close-modal");

BtnCloseModal.addEventListener(`click`, function () {
  modal.style.display = `none`;
});

// js for cart section

const cart = document.querySelector(`#cart`);
const cartContainer = document.querySelector(`.cart-container`);
const itemsContainer = document.querySelector(`.items-container`);
// open cart modal

cart.addEventListener("click", function () {
  if (cartContainer.style.display === "none") {
    cartContainer.style.display = "flex";
  } else {
    cartContainer.style.display = "none";
  }
});
// End for cart modal

// close cart modal with x

const closeBtnCart = document.querySelector(`#close-btn-cart`);
closeBtnCart.addEventListener(`click`, function () {
  cartContainer.style.display = "none";
});

cartContainer.addEventListener(`click`, (e) => {
  if (e.target.classList.contains(`cart-container`)) {
    cartContainer.style.display = `none`;
  }
});
// End clor cart modal within the class

// add items to cart

const addTheItem = document.getElementsByClassName("add-the-item");
const productCart = document.getElementsByClassName("product-row");
for (let i = 0; i < addTheItem.length; i++) {
  const addTheItemButton = addTheItem[i];
  addTheItemButton.addEventListener(`click`, addToCartClicked);
}

function addToCartClicked(event) {
  addTheItemButton = event.target;
  let cartItems = addTheItemButton.parentElement;
  let price = cartItems.getElementsByClassName("product-price")[0].innerText;
  let imageSrc = cartItems.getElementsByClassName("product-image")[0].src;
  addProductsToCart(price, imageSrc);
  updateCartPrice();
  // cartContainer.style.display = "none"; // i have to check this one
  // itemsContainer.style.display = "block";
}

function addProductsToCart(price, imageSrc) {
  let productCart = document.createElement(`div`);
  productCart.classList.add("product-cart");

  let productsCart = document.getElementsByClassName("product-cart")[0];
  let cartImage = document.getElementsByClassName;
}
