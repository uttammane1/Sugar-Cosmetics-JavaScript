// import {navbar,fotter} from "../Components/navbar.js";

// document.getElementById("navbar").innerHTML = navbar();
// document.getElementById("footer").innerHTML = fotter();

// let arr = [
//     {
//         img:'https://cdn.shopify.com/s/files/1/0906/2558/products/1_bf362c65-33b1-46ad-97d8-b94a35870aeb.jpg?v=1645631016',
//         title:'Matte Attack Transferproof Lipstick',
//         item_detail:'01 Boldplay (Cardinal Pink)',
//         qty:1,
//         price:699,
//     },
//     {
//         img:'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-minis-lipstick-01-scarlett-o-hara-28219914354771_39239823-2ed8-4b8d-b0db-48c857ae0e3f.jpg?v=1642070562',
//         title:'Matte as Hell Crayon Mini',
//         item_detail:'Lipstick - 01 Scarlett O',
//         qty:1,
//         price:199,
//     }
// ]

// localStorage.setItem('cartItems', JSON.stringify(arr));
import {payment} from "../Scripts/payment.js";
let paymentPage = payment();

let array = JSON.parse(localStorage.getItem('cartItems')) || [];
console.log(array)
let totalPrice=0;
let subTotal = 0;
const displayCartList = (array) => {
    let cartOrder_cartData = document.querySelector('.cartOrder_cartData');
    let subTotalPayment = document.querySelector('#subTotalPayment');
    cartOrder_cartData.innerHTML = null;
    let totalPriceHTML = document.querySelector('#totalPrice');
    let finalAmt = document.querySelector('#finalAmt');
    array.forEach((element, index) => {
        subTotal = 0;
        for(var i=0; i<array.length; i++){
            subTotal+=array[i].qty * array[i].price;
            console.log(array[i].qty * array[i].price);
        }
        totalPriceHTML.innerText = subTotal.toFixed(2);
        subTotalPayment.innerText = subTotal.toFixed(2);
        finalAmt.innerText = subTotal.toFixed(2);
        totalPrice=0;
        totalPrice = element.qty * element.price;
        let card = document.createElement('div');
        card.setAttribute('class','cartData_card');
        let imgleftcardDiv = document.createElement('div');
        imgleftcardDiv.setAttribute('class', 'imgLeftCard');
        let imgleftcardImg = document.createElement('img');
        imgleftcardImg.src = element.img;
        let imgLeftCard_title = document.createElement('div');
        imgLeftCard_title.setAttribute('class','imgLeftCard_title');
        let pTitle = document.createElement('p');
        pTitle.setAttribute('class', 'titleHead_card card_head_title');
        pTitle.textContent = element.title;
        let pContent = document.createElement('p');
        pContent.setAttribute('class','titleHead_card card_head_content');
        pContent.textContent = element.item_detail;
        imgLeftCard_title.append(pTitle,pContent);
        imgleftcardDiv.append(imgleftcardImg,imgLeftCard_title);

        let controlRigthCard = document.createElement('div');
        controlRigthCard.setAttribute('class', 'controlRigthCard');
        let controlDeletCart = document.createElement('div');
        controlDeletCart.setAttribute('class','controlDeletCart');
        controlDeletCart.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
        controlDeletCart.addEventListener('click', ()=>{
            deleteCartItem(index);
           
        })
        let controlPlusMinusCart = document.createElement('div');
        controlPlusMinusCart.setAttribute('class','controlPlusMinusCart');
        let controlMinus = document.createElement('div');
        controlMinus.setAttribute('class','controlMinus');
        controlMinus.textContent = '-';
        controlMinus.addEventListener('click', ()=>{
            itemDecrese(index,controlValue,spanQty,itemTotal);
        })
        let controlValue = document.createElement('div');
        controlValue.setAttribute('class','controlValue');
        controlValue.innerText = element.qty;
        let controlPlus = document.createElement('div');
        controlPlus.setAttribute('class','controlPlus');
        controlPlus.innerText = '+';
        controlPlus.addEventListener('click', ()=>{
            itemIncrese(index,controlValue,spanQty,itemTotal);
        })
        controlPlusMinusCart.append(controlMinus,controlValue,controlPlus);

        let controlAmountCart = document.createElement('div');
        controlAmountCart.setAttribute('class','controlAmountCart');
        let spanQty = document.createElement('span');
        spanQty.setAttribute('id','num');
        spanQty.innerText = element.qty;
        let itemPrice = document.createElement('span');
        itemPrice.setAttribute('id','itemPrice');
        itemPrice.innerText = element.price;
        let itemTotal = document.createElement('span');
        itemTotal.setAttribute('id','itemTotal');
        itemTotal.innerText = totalPrice;
        controlAmountCart.append(spanQty,'x',itemPrice,'=',itemTotal)
        controlRigthCard.append(controlDeletCart,controlPlusMinusCart,controlAmountCart);
        card.append(imgleftcardDiv,controlRigthCard)
        cartOrder_cartData.append(card);
    });
}
const displayNone = () => {
    if(array.length===0){
        document.querySelector('.cartMainCard').style.display = 'none';
        document.querySelector('.emptyCartDiv').style.display = 'block';
    }
}
if(array.length===0){
    document.querySelector('.cartMainCard').style.display = 'none';
    document.querySelector('.emptyCartDiv').style.display = 'block';
}
else{
    document.querySelector('.cartMainCard').style.display = 'flex';
    document.querySelector('.emptyCartDiv').style.display = 'none';
    displayCartList(array);
}

const deleteCartItem = (index) => {
    // console.log('delete button perform',index);
    let text = "Remove Selected Item.";
    if (confirm(text) == true) {
        console.log("You pressed OK!");
        array.splice(index,1);
        console.log(array);
        displayCartList(array);
        displayNone();
        localStorage.setItem('cartItems', JSON.stringify(array))

    } 
    else {
        console.log("You canceled!");
    }
    window.location.reload()
}

const itemDecrese = (index,controlValue,spanQty,itemTotal) => {
    
    if(array[index].qty > 1){
        console.log('- button',index);
        array[index].qty = array[index].qty-1;
        // console.log(array);
        localStorage.setItem('cartItems', JSON.stringify(array))
        controlValue.innerText = array[index].qty;
        spanQty.innerText = array[index].qty;
        itemTotal.innerText = array[index].qty * array[index].price;
        let totalPriceHTML = document.querySelector('#totalPrice');
        let subTotalPayment = document.querySelector('#subTotalPayment');
        let finalAmt = document.querySelector('#finalAmt');
        subTotal = 0;
        for(var i=0; i<array.length; i++){
            subTotal+=array[i].qty * array[i].price;
            console.log(array[i].qty * array[i].price);
        }
        console.log('subTotal:', subTotal)
        totalPriceHTML.innerText = subTotal.toFixed(2);
        subTotalPayment.innerText = subTotal.toFixed(2);
        finalAmt.innerText = subTotal.toFixed(2);
    }
    else{
        let text = "Remove Selected Item.";
        if (confirm(text) == true) {
            console.log("You pressed OK!");
            array.splice(index,1);
            console.log(array);
            displayCartList(array);
            displayNone();
            localStorage.setItem('cartItems', JSON.stringify(array));
           
        } 
        else {
            console.log("You canceled!");
        }
    }
    
}
const itemIncrese = (index,controlValue,spanQty,itemTotal) => {
    console.log('+ button',index);
    array[index].qty = array[index].qty+1;
    // console.log(array);
    localStorage.setItem('cartItems', JSON.stringify(array))
    controlValue.innerText = array[index].qty;
    spanQty.innerText = array[index].qty;
    itemTotal.innerText = array[index].qty * array[index].price;
    let totalPriceHTML = document.querySelector('#totalPrice');
    let subTotalPayment = document.querySelector('#subTotalPayment');
    let finalAmt = document.querySelector('#finalAmt');
    subTotal = 0;
    for(var i=0; i<array.length; i++){
        subTotal+=array[i].qty * array[i].price;
        console.log(array[i].qty * array[i].price);
    }
    console.log('subTotal:', subTotal)
    totalPriceHTML.innerText = subTotal.toFixed(2);
    subTotalPayment.innerText = subTotal.toFixed(2);
    finalAmt.innerText = subTotal.toFixed(2);
}



document.querySelector(".deliveryInfo_btn").addEventListener("click",()=>{
    let cartPriceOffer = document.querySelector(".cartPriceOffer ");
    
    document.querySelector(".priceContainer").innerHTML = paymentPage;
    paymentinfo()
    
})

 function paymentinfo(){
document.getElementById("upi").addEventListener("click",()=>{
    let paydrop = document.querySelector(".paydrop");
    paydrop.style.display = "block" 
    let upi = document.getElementById("upi");
    upi.style.border = "none"
    upi.style.backgroundColor = 'white'
 })
 document.getElementById("debitcard").addEventListener("click",()=>{
    let paydrop = document.getElementById("dropdebit");
    
    paydrop.style.display = "block" 
    let debitborder = document.getElementById("debitcard");
    debitborder.style.border = "none";
    debitborder.style.backgroundColor = "white"
 })
 document.getElementById("cash").addEventListener("click",()=>{
    let paydrop = document.getElementById("cashdrop");
    
    paydrop.style.display = "block" 
    let debitborder = document.getElementById("cash");
    debitborder.style.border = "none";
    debitborder.style.backgroundColor = "white"
 })

 document.querySelector(".PaymentInfo_btn").addEventListener("click",()=>{
     window.location.href = "succesfull.html"
 })
}