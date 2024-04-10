import {navbar,fotter} from "../Components/navbar.js";


let ProducData = JSON.parse(localStorage.getItem("cartItems"))||[];


document.getElementById("navbar").innerHTML = navbar(ProducData.length);

console.log(ProducData.length)
if(ProducData.length>0){
    let cart_count = document.getElementById("counter");
    cart_count.style.display = "block"
}


document.getElementById("footer").innerHTML = fotter()
import {signinpage,infopage} from "../Components/signinpage.js"
document.getElementById("signappend").innerHTML = signinpage();
let info = infopage();

let navlogin = document.getElementById("navlogin");

navlogin.addEventListener("click",()=>{
    let login = document.getElementById("signappend");
    login.style.display = "block";
    login.style.overflowY
    
 
 })

 let close = document.getElementById("close");
close.addEventListener("click",()=>{
    let login = document.getElementById("signappend");
    login.style.transform="translateX(710px)";   
    login.style.transition="2s";  
})

$(".enterotp").keyup(function () {
    if (this.value.length == this.maxLength) {
      $(this).next('.enterotp').focus();
    }
});
$(".loginput1").keyup(function () {
    if (this.value.length == this.maxLength) {
      $(this).next('.loginput1').focus();
    }
});

let reqotp = document.getElementById("requestptp");

reqotp.addEventListener("click",()=>{
    setTimeout(()=>{
        alert("5578 is Your OTP to login to Your SUGAR App.")
    },2000)
})

let varifyotp = document.getElementById("verify");

varifyotp.addEventListener("click",()=>{
    let otp1 = document.querySelector(".enterotp1").value;
    let otp2 = document.querySelector(".enterotp2").value;
    let otp3 = document.querySelector(".enterotp3").value;
    let otp4 = document.querySelector(".enterotp4").value;
    let otp = otp1+otp2+otp3+otp4;
    console.log(otp)
   let wrong =  document.getElementById("incorrect");
   if(otp!="5578" && wrong.length!==0){
       wrong.innerText = "Incorrect OTP! Please try again."
       wrong.style.color = "red"
       
   }
   else{
      
       document.getElementById("loginbox").innerHTML=info;
       userName();
   }
})
var obj = JSON.parse(localStorage.getItem("userDetails"))||{};
function userName(){
    let savebtn = document.getElementById("savebtn");
    savebtn.addEventListener("click",()=>{
    let username = document.getElementById("username").value;
    let lastname = document.getElementById("userlastname").value;
    obj = {username,lastname};
    localStorage.setItem("userDetails",JSON.stringify(obj));
    window.location.href = "index.html"
    
   })  
}
     localStorage.setItem("userDetails",JSON.stringify(obj));
  
    let userInfo = JSON.parse(localStorage.getItem("userDetails"));
    //console.log("obj",Object.keys(userInfo).length)
  if(Object.keys(userInfo).length>0){
    let changename = document.getElementById("changename");
    changename.innerText = "Hi,"+userInfo.username+" "+userInfo.lastname+" " ;
    let changebox = document.getElementById("navlogin");
    
    changebox.style.backgroundColor = "lightgrey";
    changebox.style.height = "30px";
    changebox.style.padding = "5px";
  }
// search functionallity

let search = document.getElementById("nav_btn");
search.addEventListener("click",()=>{
    let searchData = document.getElementById("search").value;
    console.log(searchData)
    if(searchData=="skincare"){
        window.location.href = "skincare.html"
    }
    if(searchData=="brush"){
        window.location.href = "Brush.html"
    }
    if(searchData=="eyebrush"){
        window.location.href = "eyebrush.html"
    }
    if(searchData=="facebrush"){
        window.location.href = "facebrush.html"
    }
    if(searchData=="lipstick"){
        window.location.href = "lips.html"
    }
    if(searchData=="eye"){
        window.location.href = "eye.html"
    }

})