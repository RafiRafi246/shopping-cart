import "./style.css";

export function getCart(){
  const value = localstorage.getItem("cart");
  const cart = jason.parse(value);
  return cart;
 }

 export function setCart(cart){
  localStorage.setItem("cart",JSON.stringify(cart));
 }

 function initializeState(){
     const cart = getCart();
     if(cart){
      document.querySelector('.cart-total-items').innerHTML = cart.items.length;
    }
 }
window.addEventListener("load",()=>{  
initializeState();
});