if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

$(document).ready(function() {
  $("#HomeH2").animate({
    bottom: '415px',
    opacity: '1',
  }, "slow");

  $("#HomeH3").animate({
    bottom: '370px',
    opacity: '1',
  }, "slow");

  $(".wrap").animate({
    opacity: '1',
  }, "slow");

});









function check() {

  var n = false;
  var e = false;
  var p = false;
  var a = false;

  var x = document.getElementById("name").value;

  var letters = /^[A-Za-z]+$/;
  var password = /^[A-Za-z0-9]+$/;
  var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (x.match(letters)) {
    n = true;
  } else {
    alert('Please input alphabet characters only');
  }

  var pass = document.getElementById("password").value;

  var Cpass = document.getElementById("confirm").value;

  var e = document.getElementById("email").value;

  if (e.match(email)) {
    e = true;
  } else {
    alert('invalid email format');
  }

  if (pass.match(password)) {
    if (Cpass == pass) {
      p = true;
    } else {
      alert('Unmatching Passwords');
    }
  } else {
    alert('invalid Password Format');
  }

  if (document.getElementById("name").value == "" || document.getElementById("email").value == "" || document.getElementById("address").value == "" || document.getElementById("password").value == "" || document.getElementById("confirm").value == "") {
    alert('Please fill all required fields');
  } else {
    a = true;
  }

  if (n == true && e == true && p == true && a == true) {
    window.location.href = "./Home.php";
  }

}




/* -------------------------------------------- Login --------------------------------------------- */




function LoginCheck() {

  var e = false;
  var p = false;

  var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var password = /^[A-Za-z0-9]+$/;

  var e = document.getElementById("email").value;
  var pass = document.getElementById("password").value;

  if (e.match(email)) {
    e = true;
  } else {
    alert('invalid email format');
  }

  if (pass.match(password)) {
    p = true;
  } else {
    alert('invalid Password Format');
  }

  if (e == true && p == true) {
    window.location.href = "./Home.html";
  }

}


//----------------------Cart-Functions---------------------------------

function ready() {
  var removeCartItemButtons = document.getElementsByClassName('btn-remove')
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
  }

  var quantityInputs = document.getElementsByClassName('cart-quantity-input')
   for (var i = 0; i < quantityInputs.length; i++) {
       var input = quantityInputs[i]
       input.addEventListener('change', quantityChanged)
  }


  document.getElementsByClassName('btn-checkout')[0].addEventListener('click', checkoutClicked)
  var cartItems = document.getElementsByClassName('cart-items')[0]
  console.log(cartItems);
}

function checkoutClicked(){
  alert('Thank you for Ordering from Us')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var mealName;
  var mealQuantity;
  while(cartItems.hasChildNodes()){
    mealName = cartItems.getElementsByClassName('cart-row')[0].getElementsByClassName('cart-item').getElementsByClassName('cart-item-title').item(0).innerText
    mealQuantity =  cartItems.getElementsByClassName('cart-row')[0].getElementsByClassName('cart-quantity').getElementsByClassName('cart-quantity-input').item(0).innerText
    $.ajax({
      type: "POST",
      url: "ajax.php",
      data: { meal_Name: mealName , meal_Quantity: meal}})

    cartItems.removeChild(cartItems.firstChild)
  }
  updateTotalPrice()
}

function mealClicked(id){
  var addTocart = document.getElementById(id)
  var cartMeal = addTocart.parentElement
  var title = cartMeal.getElementsByClassName('mealTitle').item(0).innerText
  var price = cartMeal.getElementsByClassName('mealPrice').item(0).innerText.replace('EGP', '')
  var imgSrc = cartMeal.getElementsByClassName('meal').item(0).src
  addMealTocart(title, price, imgSrc)
  updateTotalPrice()
}

function addMealTocart(title, price, imgSrc){
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]

  var cartRowContents = `
    <div class="cart-item cart-column">
      <img class="cart-item-image" src="${imgSrc}" alt="title">
      <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price +'EGP'}</span>
    <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number"  value="1">
      <button class="btn btn-remove" type="button" >Remove</button>
    </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateTotalPrice()
}

function removeCartItem(event){
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateTotalPrice()
}

function updateTotalPrice(){
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var totalPrice = 0
  for (var i = 0; i < cartRows.length; i++){
    var cartRow = cartRows[i]
    var itemPrice = cartRow.getElementsByClassName('cart-price')[0]
    var itemQuantity = cartRow.getElementsByClassName('cart-quantity-input')[0]
    var price = parseFloat(itemPrice.innerText.replace('EGP', ''))
    var quantity = itemQuantity.value
     totalPrice = totalPrice + (price*quantity)
  }
  document.getElementsByClassName('cart-total-price')[0].innerText = totalPrice +' '+'EGP'
  totalPrice = Math.round(totalPrice * 100) / 100
}
//-----------------------End-of-Cart-Functions---------------------------------
