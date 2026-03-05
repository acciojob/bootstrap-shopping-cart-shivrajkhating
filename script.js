//your JS code here. If required.
const qtyInputs = document.querySelectorAll(".qty");
const price = 120;

function updateTotal(){

let subtotal = 0;

qtyInputs.forEach(input => {
    subtotal += input.value * price;
});

document.getElementById("subtotal").innerText = subtotal;
document.getElementById("total").innerText = subtotal;

}

qtyInputs.forEach(input=>{
input.addEventListener("change", updateTotal);
});