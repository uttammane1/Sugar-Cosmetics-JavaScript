let navbar = (abc)=>{
    return `<div id="temp">
    <div id="navmain">
      <div id="navlogo">
      <a href="../HTML/index.html"><img
      src="https://in.sugarcosmetics.com/desc-images/SUGARLogo1.png"
     
      alt=""
    /></a>
        
      </div>
      <div id="navsearch">
      <div class="navdropdwn">
            <input type="text" id="search" placeholder="Try Liquid Lipstick" />
            <div class="sdropcontent">
              <div class="picks"><span> <i class="fa-solid fa-arrow-trend-up"></i></span>Frequently Searched</div>
              <div id="twenty_hr">
                <div>24-hr foundation</div>
                <div>Wallets</div>
                <div>Lipsticks</div>
              </div>
              <p class="picks"><span><i class="fa-solid fa-fire-flame-curved"></i></span> Hot Picks</p>
              <div id="searchpics">
                 <div>
                     <img src="https://media.sugarcosmetics.com/upload/These-super-easy-hacks-will-fix-your-dried-mascara-cover.jpg" width="50px" height="50px">
                     <p>Mascara</p>
                 </div> 
                 <div>
                     <img src="https://media.sugarcosmetics.com/upload/Brow.jpg" width="50px" height="50px">
                     <p>Brow</p>
                 </div>
                 <div>
                     <img src="https://media.sugarcosmetics.com/upload/EBO-128x165-sheet-mask...jpg" width="50px" height="50px">
                     <p>Face Mask</p>
                 </div>
                 <div>
                     <img src="https://media.sugarcosmetics.com/upload/Gifting.jpg" width="50px" height="50px">
                     <p>Gifting</p>
                 </div>
                 <div>
                    <img src="https://media.sugarcosmetics.com/upload/CDF.jpg" width="50px" height="50px">
                    <p>Bronzer</p>
                 </div>
              </div>
            </div>
          </div>
       <div><button id="nav_btn">Search</button></div> 
      </div>
      <div id="signappend"></div>
      <div id="navlogin">
        <p>
          <span><i class="fa-solid fa-user"></i></span><div id="changename">Login/Register</div>
        </p>
      </div>
      <div id="navcart">
      <a href="../HTML/wishlist.html" ><i class="fa-solid fa-heart"></i></a>
        <a href="../HTML/cart.html" id="cart_count"><i class="fa-solid fa-bag-shopping"></i><span><div id="counter">${abc}</div></span></a>
        <a href= "../HTML/offerpage.html">
        <img
          src="https://in.sugarcosmetics.com/desc-images/discountIcon.svg"
          alt=""
          style="width: 18px"
        />
        </a>
      </div>
    </div>
  </div>
  <div id="navcat">
    <div id="maincat">
      <div class="navdropdwn">
        <p class="navdropbtn"> <a href="../HTML/makeup.html">MAKEUP</a></p>
        <div class="dropdwn-content">
          <a href="../HTML/lips.html">Lips</a>
          <a href="../HTML/face.html">Face</a>
          <a href="../HTML/eye.html">Eyes</a>
        </div>
      </div>
      <div class="navdropdwn">
        <p class="navdropbtn"> <a href="../HTML/Brush.html">BRUSHES</a></p>
        <div class="dropdwn-content">
          <a href="../HTML/facebrush.html">FACE BRUSHES</a>
          <a href="../HTML/eyebrush.html">EYES BRUSHES</a>
        </div>
      </div>
      <div class="navdropdwn">
        <p class="navdropbtn"><a href="../HTML/skincare.html">SKINCARE</a></p>
        <div class="dropdwn-content">
          <a href="">MOISTURIZERS</a>
          <a href="">MASKS</a>
          <a href="">SETTING MISTS</a>
          <a href="">COFFEE CULTURE RANGE</a>
          <a href="">SHEET MASK COMBO</a>
          <a href="">AQUAHOLIC RANGE</a>
        </div>
      </div>
      <div class="navdropdwn">
        <p class="navdropbtn"><a href="../HTML/trending.html">TRENDING</a></p>
        <div class="dropdwn-content">
          <a href="">SUGAR MERCH STATION</a>
          <a href="">MAKEUP KITS</a>
          <a href="">BESTSELLERS</a>
        </div>
      </div>
      <div class="navdropdwn">
        <p class="navdropbtn">BLOG</p>
        <div class="dropdwn-content">
          <a href="">FEATURED</a>
          <a href="../HTML/makeup.html">MAKEUP</a>
          <a href="">SKINCARE</a>
        </div>
      </div>
      <div class="navdropdwn">
        <p class="navdropbtn"><a href="../HTML/offerpage.html">OFFERS</a></p>
        
      </div>
    </div>
  </div>`
}

let fotter = ()=>{
  return `<div id="mainbottom">
  <div id="bottomlogo">
    <img
      src="https://in.sugarcosmetics.com/Footer_sugar_icon.png"
      width="120px"
      height="120px"
    />
  </div>
  <div id="bottomsocial">
    <div class="social_logo">
      <div>
        <img
          src="https://in.sugarcosmetics.com/desc-images/facebook.svg"
          width="18px"
          height="18px"
        />
      </div>
      <div id="mailbot"><i class="fa-solid fa-envelope"></i></div>
      <div>
        <img
          src="https://in.sugarcosmetics.com/desc-images/Instagram.svg"
          width="18px"
          height="18px"
        />
      </div>
      <div>
        <img
          src="https://in.sugarcosmetics.com/desc-images/Pinterest.svg"
          width="20px"
          height="20px"
        />
      </div>
      <div>
        <img
          src="https://in.sugarcosmetics.com/desc-images/Tumblr.svg"
          width="20px"
          height="20px"
        />
      </div>
      <div>
        <img
          src="https://in.sugarcosmetics.com/desc-images/Youtube.svg"
          width="20px"
          height="20px"
        />
      </div>
    </div>
  </div>
  <div id="underlogo">
    <div class="bottomp">
      <p>SUBSCRIBE TO OUR NEWSLETTER</p>
    </div>
    <div class="bottomp">
      <p>GET THE NEW SUGAR APP TODAY.</p>
    </div>
  </div>
  <div id="googleplay">
    <div class="gogp1">
      <div class="bottinput"><input type="text" /></div>
      <br />
      <button id="bottbtn">SIGNUP</button>
    </div>
    <div class="gogp">
      <div class="subgogp">Tap into a better shopping experience.</div>
      <div>
        <img
          src="https://in.sugarcosmetics.com/playstore.png"
          width="100px"
          height="30px"
        />
      </div>
      <div>
        <img
          src="https://in.sugarcosmetics.com/apple-store.png"
          width="100px"
          height="30px"
        />
      </div>
    </div>
  </div>
  <p id="info">INFORMATION</p>
  <div id="aboutus">
    <div>Contact Us</div>
    <div>Terms & Conditions</div>
    <div>Returns</div>
    <div>FAQs</div>
    <div>About Us</div>
  </div>
  <p id="touch">GET IN TOUCH</p>
  <div id="last">
    <div class="contact">
      <div class="subcontact">
        <img
          src="https://in.sugarcosmetics.com/desc-images/phone_android_white.svg"
          alt=""
        />
        <p>Call us at</p>
      </div>
      <p>1800-209-9933</p>
      <p>Monday to Friday : 9 AM to 7 PM</p>
    </div>
    <div> 
      <p>Support</p>
      <p>hello@sugarcosmetics.com</p>
    </div>
    <div>
      <p>WORK WITH US</p>
      <p>careers@sugarcosmetics.com</p>
    </div>
    <div>
      <p>PRESS & MEDIA</p>
      <p>pr@sugarcosmetics.com</p>
    </div>
    <div>
      <p>INFLUENCER COLLAB</p>
      <p>JOIN US</p>
    </div>
  </div>
  <div id="bottomhr"></div>
  <p class="bottxt">Copyright © 2024 SUGAR Cosmetics. All rights reserved.</p>
</div>`
}
export {navbar,fotter}