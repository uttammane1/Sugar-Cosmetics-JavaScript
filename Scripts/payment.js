let payment = ()=>{
    return `<div class="cartPriceOffer">
    <div class="payContainer">
        
        <div class="priceDetailTag"><img src="https://in.sugarcosmetics.com/desc-images/Offers_price_details.svg" alt=""> Payment Method</div>
        <p>Seclect Payment Method</p>
        
        <div>
           <div id="upi">
               <img src="https://in.sugarcosmetics.com/paymentIcons/upi.svg" alt=""> 
               <div class="iconfles">
               <p>Instant Pay Using UPI</p>
               <img src="https://in.sugarcosmetics.com/desc-images/Check.svg" alt="" class="uiconleft">
            </div> 
            </div> 
           <div class="paydrop">
              <div id="payinput"><input type="text" placeholder="Enter UPI Id"></div>
           </div>
        </div>
        <div>
            <div id="mobwallet">
                <img src="https://in.sugarcosmetics.com/paymentIcons/wallets.svg" alt="">
                <div class="iconfles">
                <p>Mobile Wallets</p>
                <img src="https://in.sugarcosmetics.com/desc-images/Check.svg" alt="" class="miconleft">
                </div>
            </div>
        </div>
        <div>
            <div id="debitcard">
                <img src="https://in.sugarcosmetics.com/paymentIcons/creditDebit.svg" alt="">
                <div class="iconfles">
                <p>Credit/Debit Cards</p>
                <img src="https://in.sugarcosmetics.com/desc-images/Check.svg" alt="" class="diconleft">
                </div>
            </div>
            <div id="dropdebit">
                <input type="number" placeholder="Card Holder Number">
                <br>
                <input type="text" placeholder="Card Holder Name">
                <br>
                <div id="exp">
                    <input type="text" placeholder="Expiriy Date(MM/YY)">
                    <input type="text" placeholder="CVV">
                </div>
                <div>
               <p> <span> <input type="checkbox"></span>We will securely save this card for faster paymnet experience (CVV will not saved). If required you can remove this card from My Account > Payment Methods</p>
                </div>
            </div>
        </div>
        <div id="netbanking">
            <img src="https://in.sugarcosmetics.com/paymentIcons/netBanking.svg" alt="">
            <div class="iconfles">
            <p>Net Banking</p>
            <img src="https://in.sugarcosmetics.com/desc-images/Check.svg" alt="" class="niconleft">
            </div>
        </div>
        <div >
            <div id="cash">
                <img src="https://in.sugarcosmetics.com/paymentIcons/cod.svg" alt="">
                <div class="iconfles">
                <p>Cash On Delivery</p>
                <img src="https://in.sugarcosmetics.com/desc-images/Check.svg" alt="" class="ciconleft">
                </div>
            </div>
           <div id="cashdrop">
               <p>We recommend using a digital payment method for completing the payment</p>
           </div> 
        </div>
        
        <div class="button_delivery_shopping">
            <div class="continueShopping_btn"><&nbsp;&nbsp;<a href="../HTML/index.html">delivery Info</a></div>
            <div class="PaymentInfo_btn">Proceed to Payment</div>
        </div>
    </div>
</div>
</div>`
}

export {payment}



 



 