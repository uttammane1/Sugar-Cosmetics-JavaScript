let BrushesData = [
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-14_1.jpg?v=1627659982",
        name: "BLEND TREND EYESHADOW BRUSH - 043 ROUND Xl",
        price: 399,
        rating: "4.8(414)",
        strike: '',
    },

    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-12-min.jpg?v=1627573647",
        name: "Blend Trend Dual Face Brush - 075 Powder + … ",
        price: 599,
        rating: "4.5(141)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-003Contour.jpg?v=1627659996",
        name: "Blend Trend Face Brush - 003 Cont…",
        price: 399,
        rating: "4.5(121)",
        strike: '',
    }, 
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFoundationBrush-052Kabuki.jpg?v=1627573664",
        name: "Blend Trend Foundation Brush - 052…",
        price: 399,
        rating: "4.8(41)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-3-min.jpg?v=1627573657",
        name: "Blend Trend Eyeshadow Brush - 042…",
        price: 499,
        rating: "4.8(142)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/1_1.jpg?v=1630683833",
        name: "Blend Trend Eyeshadow Brush - 042… ",
        price: 649,
        rating: "4.7(54)",
        strike: 'RS.799',
    }, 
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-007Powder.jpg?v=1627660008",
        name: "Blend Trend Eyeshadow Brush - 042… ",
        price: 399,
        rating: "4.5(421)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-006Highlighter.jpg?v=1627660002",
        name: "Blend Trend Face Brush - 006 Highl…",
        price: 399,
        rating: "4.8(197)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-001Blush.jpg?v=1627659984",
        name: "Blend Trend Face Brush - 001 Blush",
        price: 399,
        rating: "4.9(137)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-2-min.jpg?v=1627573652",
        name: "Blend Trend Eyeshadow Brush - 041…",
        price: 399,
        rating: "4.5(121)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-5-min.jpg?v=1627573639",
        name: "Blend Trend Dual Eyeshadow Brush…",
        price: 599,
        rating: "4.6(124)",
        strike: '',
    }, 
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-13.jpg?v=1627659977",
        name: "Blend Trend Dual Eyeshadow Brush…",
        price: 599,
        rating: "4.8(201)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFoundationBrush-051Flat.jpg?v=1627573670",
        name: "Blend Trend Foundation Brush - 051…",
        price: 399,
        rating: "4.6(137)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-002Concealer.jpg?v=1627659990",
        name: "Blend Trend Face Brush - 002 Conc… ",
        price: 399,
        rating: "4.8(27)",
        strike: '',
    }, 
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BeginnersEssentialsCombo1-WBGimages.jpg?v=1630683801",
        name: "Beginners Essential Combo 1",
        price: 999,
        rating: "4.5(421)",
        strike: 'RS.1199',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BeginnersEssentialsCombo2-WBGimages.jpg?v=1630683812",
        name: "Beginners Essential Combo 2",
        price: 799,
        rating: "4.5(421)",
        strike: 'RS.999',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/BeginnersEssentialsCombo3-WBGimages.jpg?v=1630683820",
        name: "Face Essentials Combo",
        price: 1499,
        rating: "4.5(421)",
        strike: 'RS.1799',
    },
    
];


localStorage.setItem("cart", JSON.stringify(BrushesData));

BrushesData.map(function (elem) {

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
    img.src = elem.image_link;
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
    heart_icon.innerHTML += '<i class="fa-regular fa-heart"></i>'
    
    heart_icon.addEventListener("click", function () {
        wishList(elem);
    });

    name.classList.add("name");
    box.classList.add("box");
    top.classList.add("top");
    bottom.classList.add("bottom-block");
    rating_wrapper.classList.add("rating-wrapper");
    price_wrapper.classList.add("price-wrapper");

    var btn = document.createElement("button");
    btn.innerText = "ADD TO CART";
    btn.addEventListener("click", function () {
        addToCart(elem);
    });
    box.addEventListener("click",()=>{
        ProductPage(elem);
        window.location.href = "product.html"
    })
    top.append(shade, img_shade);
    price_wrapper.append(strike, price)
    rating_wrapper.append(star_icon, rating);
    bottom.append(heart_icon, btn);
    box.append(img, name, price_wrapper, rating_wrapper, bottom);

    document.querySelector(".container").append(box);
});
 
var cartArray= JSON.parse(localStorage.getItem("cartItem")) || [];
 function addToCart(elem){
    cartArray.push(elem);
    
    alert("item added to cart")

    localStorage.setItem("cartItem",JSON.stringify(cartArray))
 }

 var cartwish= JSON.parse(localStorage.getItem("wishlistItem")) || [];
 function wishList(elem){
    cartwish.push(elem);
    alert("item added to wishlist")

    localStorage.setItem("wishlistItem",JSON.stringify(cartwish))
 }
 
 function ProductPage(elem){
     localStorage.setItem("ProductPage",JSON.stringify(elem))
 }