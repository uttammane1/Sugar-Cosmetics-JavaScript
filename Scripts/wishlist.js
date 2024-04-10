let wishlistData = [
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-14_1.jpg?v=1627659982",
        name: "BLEND TREND EYESHADOW BRUSH - 043 ROUND Xl",
        price: 399,
        rating: "4.8(414)",
        strike: '',
    },

    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-12-min.jpg?v=1627573647",
        name: "Blend Trend Dual Face Brush - 075 Powder + … ",
        price: 599,
        rating: "4.5(141)",
        strike: '',
    },
  
    
];


localStorage.setItem("cartItems", JSON.stringify(wishlistData));

wishlistData.map(function (elem,index) {

    var box = document.createElement("div");
    var top = document.createElement("div");
    var bottom = document.createElement("div");
    var rating_wrapper = document.createElement("div");
    var price_wrapper = document.createElement("div");

    var shade = document.createElement("p");
    shade.textContent = elem.shade;

    var img_shade = document.createElement("img");
    img_shade.src = elem.shade_image;

    var img = document.createElement("img");
    img.src = elem.image_url;
    img.classList.add("main-img");

    var name = document.createElement("p");
    name.textContent = elem.name;

    var price = document.createElement("span");
    price.innerText = "Rs." + elem.price;

    var strike = document.createElement("s");
    strike.innerText = elem.strike;

    var rating = document.createElement("span");
    rating.innerText = elem.rating;

    var star_icon = document.createElement("span");
    star_icon.innerHTML += '<i class="fa fa-star" aria-hidden="true"></i>'

    var heart_icon = document.createElement("span");
    heart_icon.innerHTML += '<i class="fa-solid fa-heart"></i>'
    
    heart_icon.addEventListener("click", function () {
        wishList(elem,index);
    });

    name.classList.add("name");
    box.classList.add("box");
    top.classList.add("top");
    bottom.classList.add("bottom-block");
    rating_wrapper.classList.add("rating-wrapper");
    price_wrapper.classList.add("price-wrapper");

    var btn = document.createElement("button");
    btn.innerText = "SHOP NOW";
    btn.addEventListener("click", function () {
        addToCart(elem);
    });

    top.append(shade, img_shade);
    price_wrapper.append(strike, price)
    rating_wrapper.append(star_icon, rating);
    bottom.append(heart_icon, btn);
    box.append(img, name, price_wrapper, rating_wrapper, bottom);

    document.querySelector(".container").append(box);
});
 
var cartArray= JSON.parse(localStorage.getItem("cartItems")) || [];
 function addToCart(elem){
    cartArray.push(elem);

    localStorage.setItem("cartItem",JSON.stringify(cartArray))
    window.location.href="./product.html"
 }

 var cartwish= JSON.parse(localStorage.getItem("wishlistItem")) || [];
 function wishList(elem,index){
    cartwish.splice(index,1);
    alert("item removed from wishlist")

    localStorage.setItem("wishlistItem",JSON.stringify(cartwish))
    window.location.reload();
 }          