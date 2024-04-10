let SkinCareData = [
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-aquaholic-water-boost-mask-13548848087123.jpg?v=1619115321",
        name: "Aquaholic Water Boost Mask",
        price: 149,
        rating: "4.7(414)",
        strike: '',
    },

    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-cooling-stick-28037939429459.jpg?v=1644409181",
        name: "Citrus Got Real Cooling Stick",
        price: 399,
        rating: "4.6(141)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-12775754203219.jpg?v=1619113702",
        name: "Cheat Sheet Clarifying Mask",
        price: 99,
        rating: "4.9(121)",
        strike: '',
    }, 
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-bubble-mask-12775750500435.jpg?v=1644399394",
        name: "Charcoal Patrol Bubble Mask",
        price: 149,
        rating: "4.9(41)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-anti-aging-mask-12775753744467.jpg?v=1619113715",
        name: "Cheat Sheet Anti-Aging Mask",
        price: 99,
        rating: "4.8(142)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/CCEyeFirmingCreamWBG-3.jpg?v=1628610287",
        name: "Coffee Culture Eye Firming Cream",
        price: 399,
        rating: "4.9(54)",
        strike: 'RS.799',
    }, 
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Aquaholic-Extention-Spot-gel-2.jpg?v=1626363976",
        name: "Aquaholic Clarifying Spot Gel",
        price: 399,
        rating: "4.7(421)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-cleansing-water-12771592732755.jpg?v=1619106450",
        name: "Swipe Right Cleansing Water",
        price: 399,
        rating: "4.9(197)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-acne-combo-pack-of-6-14056089157715.jpg?v=1619113757",
        name: "Acne Combo (Pack of 6)",
        price: 399,
        rating: "4.9(137)",
        strike: '1299',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/CCPorePurifyingMaskWBG-3.jpg?v=1628610298",
        name: "Coffee Culture Pore Purifying Mask",
        price: 499,
        rating: "4.7(421)",
        strike: '1399',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Aquaholic-Pore-Exfoliating-Scrub-3_1.jpg?v=1626363966",
        name: "Aquaholic Pore Exfoliating Scrub",
        price: 399,
        rating: "4.9(14)",
        strike: '',
    }, 
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-refreshing-mist-28037990842451.jpg?v=1619155739",
        name: "Citrus Got Real Refreshing Mist",
        price: 799,
        rating: "4.8(201)",
        strike: '2100',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/CCBrighteningSerumWBG-3.jpg?v=1628610327",
        name: "Coffee Culture Brightening Serum",
        price: 399,
        rating: "4.6(137)",
        strike: '',
    },
    
    {
        image_link:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-pack-of-6-12784634527827.jpg?v=1619114589",
         name:   "Cheat Sheet Clarifying Mask (Pack of 6)",
        price: 399,
        rating: "4.8(27)",
        strike: '',
    }, 
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Hydrating-Primer-3.jpg?v=1626423647",
        name: "Aquaholic Hydrating Primer",
        price: 999,
        rating: "4.5(421)",
        strike: 'RS.1199',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/moisturiser.jpg?v=1626968292",
        name: "Aquaholic Priming Moisturizer",
        price: 799,
        rating: "4.8(421)",
        strike: 'RS.999',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/373532210-artboard-1.jpg?v=1646149967",
        name: "Citrus Got Real Retinol Brightening Serum",
        price: 1499,
        rating: "4.5(421)",
        strike: 'RS.1799',
    },
    
];


localStorage.setItem("cart", JSON.stringify(SkinCareData));

SkinCareData.map(function (elem) {

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