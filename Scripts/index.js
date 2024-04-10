let middle_slide_bar_div = document.querySelector(".middle_s_w")

    let top_slide_images_arr = [
        {url : "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fbbd796f0-0541-4ddb-9c32-abf1d48d54ef.jpg&w=1920&q=75"},
        {url : "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Feb628175-332f-4b75-99b7-8d3769d066b0.jpg&w=1920&q=75"},
        {url : "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fe7e8e1e2-6657-4a86-b8c4-264555e70ede.gif&w=1920&q=75"},
        {url : "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ffe6c8d8f-a7f4-4ce2-a957-695490cba67d.jpg&w=1920&q=75"},
        {url : "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fabd3d589-694b-4f81-a74e-2d836d0edf3a.jpg&w=1920&q=75"},
        {url:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F38bc78eb-c364-41a9-8730-11d740b15564.jpg&w=1920&q=75"}
    ]

    let bestSellersLeftArr = [
        {
            img_url:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F521737983-parent-1st-card.jpg%3Fv%3D1690905085&w=256&q=75", 
            name : "Maximeyes Drama Magnetic Lashes & Eyeliner", 
            price: "664",
            text : "SELECT SHADE",
        },
        {img_url:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fparent1stcard_1_7aa4b700-2b5f-4212-8b56-86889ab8a390.jpg%3Fv%3D1689262362&w=256&q=75", name : "MATTE AS HELL CRAYON LIPSTICK", price: "799",text : "SELECT SHADE",},
        {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1639496513", name : "KOHL OF HONOUR INTENSE KAJAL", price: "249",text : "SELECT SHADE",},
        {img_url:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_2d186f9b-9024-4e23-a0d2-a55b7671e89c.jpg%3Fv%3D1657123108&w=256&q=75", name : "Contour De Force Eyes And Face palette", price: "199",text : "SELECT SHADE",},
       
    ]

    let bestSellersRightArr = [    
        {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1639496513", name : "KOHL OF HONOUR INTENSE KAJAL", price: "249",text : "SELECT SHADE",},
        {img_url:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FWBG1_09f0cf83-792a-4185-8882-5e5e6909a459.jpg%3Fv%3D1657814596&w=256&q=75", name : "Smudge Me Not Mini Liquid Lipstick Set -Power up you", price: "799",text : "SELECT SHADE",},
        {img_url:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FKohl-Of-Honour-Intense-Kajal-PDP-images-Parent-page.jpg%3Fv%3D1679673305&w=256&q=75", name : "Kho; Of Honour Intense Kajal", price: "209",text : "SELECT SHADE",},
        {img_url:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FParent-Page_ac0201bb-8f51-447c-b6e0-4404786076a2.jpg%3Fv%3D1680364145&w=256&q=75", name : "Nothing Else Matter Longwear Lipstick", price: "503",text : "SELECT SHADE",},
    ]

    let middle_slide_bar_arr = [
        {url : "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F36ceb388-0c68-47be-b39d-c893aa6caed9.jpg&w=1920&q=75"},
        {url : "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F7a6f082b-d4ba-4b93-93b7-aa79cc63d877.jpg&w=1920&q=75"},
        
    ]

    let hotDealsarr = [
        [
            {img_url :"https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/87bdf177-d99b-4b0b-92c6-34204e201aaf.jpg&w=1920&q=75",},
            {img_url :"https://d32baadbbpueqt.cloudfront.net/Homepage/a8997373-1d93-460b-81a2-cadb84ab5cca.gif",},
            {img_url :"https://d32baadbbpueqt.cloudfront.net/Homepage/9b92bb73-edd9-4b40-84be-c0a3f9c32d7c.gif",},
       
        ],
         [
            {img_url :"https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/a376e8d4-5e02-4dfb-b649-3dc4807499c5.jpg&w=1920&q=75",},
            {img_url :"https://d32baadbbpueqt.cloudfront.net/Homepage/062d29c6-31e6-4bee-861a-3b8f47c2bab4.gif",},
            {img_url :"https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/87bdf177-d99b-4b0b-92c6-34204e201aaf.jpg&w=1920&q=75",},
         ],
        [
            {img_url :"https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/87bdf177-d99b-4b0b-92c6-34204e201aaf.jpg&w=1920&q=75",},
            {img_url :"https://d32baadbbpueqt.cloudfront.net/Homepage/a8997373-1d93-460b-81a2-cadb84ab5cca.gif",},
            {img_url :"https://d32baadbbpueqt.cloudfront.net/Homepage/9b92bb73-edd9-4b40-84be-c0a3f9c32d7c.gif",},
       
        ],
        [
           
            {img_url :"https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/a376e8d4-5e02-4dfb-b649-3dc4807499c5.jpg&w=1920&q=75",},
            {img_url :"https://d32baadbbpueqt.cloudfront.net/Homepage/062d29c6-31e6-4bee-861a-3b8f47c2bab4.gif",},
            {img_url :"https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/87bdf177-d99b-4b0b-92c6-34204e201aaf.jpg&w=1920&q=75",},
        ],
        [
            {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3098348f-c2bd-434f-b688-3432ae37d9ef.jpg",},
            {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/1bbe5c65-f084-4c7e-ae6a-46b90867b04a.jpg",},
            {img_url :"https://d32baadbbpueqt.cloudfront.net/37f0de63-c052-447c-9f98-dacceede39e1.jpg",},
        ],
        [
            {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/c3f4367f-0512-4adf-b162-a34f624ff76b.jpg",},
            {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/788deca3-af41-496e-8649-06a2830603b9.jpg",},
            {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/ac294d17-5c03-4d38-9b9e-be329de0f58a.jpg",},
        ],
        [
            {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f21188a3-aa66-4b1a-b52e-69bd9ee1f92c.jpg",},
            {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3098348f-c2bd-434f-b688-3432ae37d9ef.jpg",},
            {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/1bbe5c65-f084-4c7e-ae6a-46b90867b04a.jpg",},
        ],
        
    ]

    let videoPlayArr = [
       
        {src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836045-uerkdvpa/watermarked/540/InShot_20220309_1844460631.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/2/15/1644919919-drjtghip/watermarked/540/EasyEyelinerHackusingaSpoon.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/1/18/1642490662-qrlyukpb/watermarked/540/HowtoBaketheRightWay.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/4/30/1651342203-wnqistjz/watermarked/540/EffortlesslyExpressive9-16.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/1/18/1642490844-ureajzhm/watermarked/540/FaceLiftlikeKendallJenner.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/2/15/1644906634-nshmulgo/watermarked/540/FoundationHacks.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/2/15/1644905324-hgvtazeo/watermarked/540/KoreanBeautyHack-JAMSU.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/2/4/1643956359-clqnsktd/watermarked/540/SunkissedLookTutorial.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/1/18/1642491110-kgvyhwbt/watermarked/540/ReverseCatEyeliner.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836364-eixsrdot/watermarked/540/275182554_2096939307119931_4496228888503996313_n.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646835858-lvtrfujp/watermarked/540/InShot_20220309_184811595.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/2/4/1643955080-zfievyxo/watermarked/540/TissuePaperEyeshadowHack.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2021/11/1/1635767024-pedhjtzf/watermarked/540/EasywaytoMattifyLipstick7.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836196-scobeuaq/watermarked/540/Flawlessrecreationoftheiconicdiva.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836728-bkvwtnrc/watermarked/540/InShot_20220309_183351048.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836997-qhfletip/watermarked/540/GlamSmokeyEyelook.mp4",},
        {src: "https://cdn4.fireworktv.com/medias/2022/4/22/1650623566-berqzfil/watermarked/540/MettlePrimingBalm-Vertical.mp4",},
    
    ]

    let superSaversarr = [
        [    {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-satin-lipstick-01-sophie-bright-fuchsia-pink-fuchsia-13706264477779.jpg?v=1619116135",
            name : "METTLE SATIN LIPSTICK - O1 SOPHIE [BRIGHT FUCHSIA...]", 
            price: "499",
            text : "ADD TO CART",
            stoffPrice : "999", 
            disPer:"(50% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-eye-warned-you-so-double-matte-eyeliner-03-green-book-marsh-green-13954500100179.jpg?v=1619116854",
            name : "EYE WARNED YOU SO! DOUBLE MATTEL EYELINER - O3 GREEN...", 
            price: "349",
            text : "ADD TO CART",
            stoffPrice : "699", 
            disPer:"(50% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-lip-duo-12-don-fawn-yellow-brown-12788425097299.jpg?v=1619108497",
            name : "SMUDGE NOT LIP DUO - 12 DON FAWN (YELLOW BROWN)", 
            price: "299",
            text : "ADD TO CART",
            stoffPrice : "599", 
            disPer:"(50% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-it-s-a-pout-time-vivid-lipstick-09-better-call-salmon-peach-pink-12785014308947.jpg?v=1619101864",
            name : "ITS A POUT TIME! VIVID LIPSTICK - O9 BETTER CALL...", 
            price: "359",
            text : "ADD TO CART",
            stoffPrice : "599", 
            disPer:"(40% Off)",
            rupee : "₹",
        },],
        [     {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-27-brown-crown-plum-brown-15384235180115.jpg?v=1619103565",
            name : "SMUDGE ME NOT LIQUID LIPSTICK - 27 BROWN CROWN...", 
            price: "249",
            text : "ADD TO CART",
            stoffPrice : "499", 
            disPer:"(50% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-twist-and-shout-fadeproof-kajal-01-black-velvet-black-14255312109651.jpg?v=1619100296",
            name : "TWIST AND SHOUT FADEPROOF KAJAL", 
            price: "399",
            text : "SELECT SHADE",
            stoffPrice : "599", 
            disPer:"(40% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-27-brown-crown-plum-brown-15384235180115.jpg?v=1619103565",
            name : "SMUDGE ME NOT LIQUID LIPSTICK - 27 BROWN CROWN...", 
            price: "249",
            text : "ADD TO CART",
            stoffPrice : "499", 
            disPer:"(50% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-matte-lipstick-10-eirene-blue-toned-red-12796091236435.jpg?v=1619110221",
            name : "METTLE MATTE LIPSTICK - 10 EIRENE (BLUE TONED RED)", 
            price: "549",
            text : "ADD TO CART",
            stoffPrice : "1099", 
            disPer:"(50% Off)",
            rupee : "₹",
        },],
        [   {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-matte-lipstick-10-eirene-blue-toned-red-12796091236435.jpg?v=1619110221",
            name : "METTLE MATTE LIPSTICK - 10 EIRENE (BLUE TONED RED)", 
            price: "549",
            text : "ADD TO CART",
            stoffPrice : "1099", 
            disPer:"(50% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-dream-cover-spf15-mattifying-compact-55-americano-deep-12775603372115.jpg?v=1619106493",
            name : "DREAM COVER SPF15 MATTIFYING COMPACT - 55...", 
            price: "249",
            text : "ADD TO CART",
            stoffPrice : "499", 
            disPer:"(50% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-it-s-a-pout-time-vivid-lipstick-09-better-call-salmon-peach-pink-12785014308947.jpg?v=1619101864",
            name : "ITS A POUT TIME! VIVID LIPSTICK - O9 BETTER CALL...", 
            price: "359",
            text : "ADD TO CART",
            stoffPrice : "599", 
            disPer:"(40% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-45-grape-drape-deep-mauve-with-hints-of-purple-15384300027987.jpg?v=1619107024",
            name : "SMUDGE ME NOT LIQUID LIPSTICK - 45 GRAPE DRAPE...", 
            price: "249",
            text : "ADD TO CART",
            stoffPrice : "499", 
            disPer:"(50% Off)",
            rupee : "₹",
        },],


    ]
    
    let topPicksArr = [
       [
        {img_url :"https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/c84926c4-8914-484e-8ad5-649fd1980d1f.jpg&w=1920&q=75",},
        {img_url :"https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/cd5c828f-a59f-4342-8955-25c7a9f7c70d.jpg&w=1920&q=75",},
        {img_url :"https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/8b810378-baea-4a92-a85d-2e4412ad5c4b.jpg&w=1920&q=75",},
  
       ],
       [
        {img_url :"https://d32baadbbpueqt.cloudfront.net/Homepage/b185408c-0721-47e5-8dc4-549c19759a52.gif",},
        {img_url :"https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/d1e6ecce-05e3-4d2a-82e7-09eba677ce57.jpg&w=1920&q=75",},
        {img_url :"https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/388de371-6bca-45c5-8efa-97eeee4d1e09.jpg&w=1920&q=75",},
 
       ],
        [
            {img_url :"https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/c84926c4-8914-484e-8ad5-649fd1980d1f.jpg&w=1920&q=75",},
            {img_url :"https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/cd5c828f-a59f-4342-8955-25c7a9f7c70d.jpg&w=1920&q=75",},
            {img_url :"https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/8b810378-baea-4a92-a85d-2e4412ad5c4b.jpg&w=1920&q=75",},
      
       ],
    ]

    let giftSetsArr = [
        [    {
            img_url:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F489511912-women-s-day-gifting-kit-wbg-images_1.jpg%3Fv%3D1688227825&w=256&q=75",
            name : "All you Need Beauty Kit", 
            price: "1500",
            text : "CHOOSE ITEMS",
            stoffPrice : "", 
            disPer:"",
            rupee : "",
        },
        {
            img_url:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F554408657-wedding-makeup-kit-revamp_1.jpg%3Fv%3D1700475948&w=256&q=75",
            name : "Weddinng MakeUp kit", 
            price: "1099",
            text :  "CHOOSE ITEMS",
            stoffPrice : "1799", 
            disPer:"(38% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-minis-set-15520724582483.jpg?v=1620651966",
            name : "SMUDGE ME NOT LIQUID LIPSRICK MINIS SET", 
            price: "799",
            text : "CHOOSE PRODUCTS",
            stoffPrice : "999", 
            disPer:"(20% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1.jpg?v=1646298577",
            name : "FACE PALLET + MINI LIQUID LIPSTICK VALUE SET", 
            price: "849",
            text : "CHOOSE PRODUCTS",
            stoffPrice : "1048", 
            disPer:"(18% Off)",
            rupee : "₹",
        },],
        [    {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-minis-set-15520724582483.jpg?v=1620651966",
            name : "SMUDGE ME NOT LIQUID LIPSRICK MINIS SET", 
            price: "799",
            text : "CHOOSE PRODUCTS",
            stoffPrice : "999", 
            disPer:"(20% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1.jpg?v=1646298577",
            name : "FACE PALLET + MINI LIQUID LIPSTICK VALUE SET", 
            price: "849",
            text : "CHOOSE PRODUCTS",
            stoffPrice : "1048", 
            disPer:"(18% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_0ca61ef7-05ce-49be-9fa1-de7c41b99a1f.jpg?v=1649260645",
            name : "ANNIVERSARY KIT", 
            price: "1999",
            text : "CHOOSE ITEMS",
            stoffPrice : "2793", 
            disPer:"(28% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FValue-Sets---WBG-Listing_543b4a34-7c88-4bf5-b51a-26354f743fcb.jpg%3Fv%3D1694187910&w=256&q=75",
            name : "Lip So Pretty Duo", 
            price: "999",
            text : "CHOOSE ITEMS",
            stoffPrice : "1295", 
            disPer:"(22% Off)",
            rupee : "₹",
        },],
    ]

    

    let justInArr = [
        [    {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_6a5fa1af-0d0e-4e9e-85d1-579495fb5030.jpg?v=1648482145",
            name : "ARCH ARRIVAL MICRO BROW PENCIL", 
            price: "499",
            text : "SELECT SHADE",
            stoffPrice : "", 
            disPer:"",
            rupee : "",
        },
        {
            img_url:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FSibling-Love-Limited-Edition-Gift-Set---WBG.jpg%3Fv%3D1700063053&w=256&q=75",
            name : "SUMMER MAKEUP KIT", 
            price: "1799",
            text : "CHOOSE PRODUCTS",
            stoffPrice : "2442", 
            disPer:"(38% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/373532210-artboard-1.jpg?v=1646149967",
            name : "CITRUS GOT REAL RETINOL BRIGHTENING SERUM ", 
            price: "499",
            text : "ADD TO CART ",
            stoffPrice : "", 
            disPer:"",
            rupee : "",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/373515742-01.jpg?v=1646207364",
            name : "SUGAR CITRUS GOT REAL BRIGHTENING PEEL", 
            price: "599",
            text : "SHOP NOW",
            stoffPrice : "", 
            disPer:"",
            rupee : "",
        },],
        [    {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_1d9f20a6-69b8-4585-9d09-d4d1f8f309d6.jpg?v=1649433263",
            name : "FLAW LESS FACE MAKEUP TRIO SET", 
            price: "1199",
            text : "CHOOSE PRODUTS",
            stoffPrice : "1390", 
            disPer:"(14% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_3cb613fc-43c8-4763-b3e6-5ccf4761c0d5.jpg?v=1641570994",
            name : "POWER CLAY MASK STICK", 
            price: "699",
            text : "SELECT SHADE",
            stoffPrice : "", 
            disPer:"",
            rupee : "",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/Value-Set-WBG-1.jpg?v=1642089034",
            name : "BEGINNERS MAKEUP COMBO", 
            price: "999",
            text : "ADD TO CART",
            stoffPrice : "1190", 
            disPer:"(16% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_1bde8549-cb5e-40e8-8779-83e8c0aae451.jpg?v=1638200716",
            name : "TOO GOOD TO BE TRUE DUAL EYESHADOW", 
            price: "499",
            text : "SHOP NOW",
            stoffPrice : "", 
            disPer:"",
            rupee : "",
        },],
        [    {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_9909d205-c5f9-476d-9903-c4beffbfebb7.jpg?v=1635834942",
            name : "ARCH ARRIVAL BROW PEN", 
            price: "499",
            text : "SELECT SHADE",
            stoffPrice : "", 
            disPer:"",
            rupee : "",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/PartyReadyKit-WBG1.png?v=1639397456",
            name : "PARTY READY KIT", 
            price: "1299",
            text : "CHOOSE PRODUCTS",
            stoffPrice : "1994", 
            disPer:"(34% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_7863c610-04ae-4e21-a5bb-55577898284a.jpg?v=1637336891",
            name : "OWN THE HIGH LIQUID HIGHLIGHTER", 
            price: "649",
            text : "SHOP NOW",
            stoffPrice : "", 
            disPer:"",
            rupee : "",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_6.jpg?v=1643903231",
            name : "TRIPLE DELIGHT MAKEUP SET", 
            price: "649",
            text : "CHOOSE PRODUCTS",
            stoffPrice : "847", 
            disPer:"(23% Off)",
            rupee : "₹",
        },],
        [    {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/PartyReadyKit-WBG1.png?v=1639397456",
            name : "PARTY READY KIT", 
            price: "1299",
            text : "CHOOSE PRODUCTS",
            stoffPrice : "1994", 
            disPer:"(34% Off)",
            rupee : "₹",
        },
        { 
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_7863c610-04ae-4e21-a5bb-55577898284a.jpg?v=1637336891",
            name : "OWN THE HIGH LIQUID HIGHLIGHTER", 
            price: "649",
            text : "SHOP NOW",
            stoffPrice : "", 
            disPer:"",
            rupee : "",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_6.jpg?v=1643903231",
            name : "TRIPLE DELIGHT MAKEUP SET", 
            price: "649",
            text : "CHOOSE PRODUCTS",
            stoffPrice : "847", 
            disPer:"(23% Off)",
            rupee : "₹",
        },
        {
            img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/Double-Date-Extreme-Volume-Mascara-Powered-by-Images-1025x1400-1.jpg?v=1636386431",
            name : "DOUBLE DATE EXTREME VOLUME MASCARA DUO 01...", 
            price: "799",
            text : "SHOP NOW",
            stoffPrice : "", 
            disPer:"",
            rupee : "",
        },],
    ]

    let sugarbeautyArr = [
        [
            {img_url :"https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/c6d8895f-e6b4-4a89-aa35-5e6d0567e312.jpg&w=1920&q=75",},
            {img_url :"https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/9e38f392-ad5f-47b2-8f1a-65f7b8f7d7b7.jpg&w=1920&q=75",},
            {img_url :"https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/ba3ccda6-f7ef-4618-a20f-a25094a58de3.jpg&w=1920&q=75",}, 
        ]
    ]

    let skincareBasicsArr = [
        [
            {
                img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/Hyderattingkit.jpg?v=1626968294", 
                name : "AQUAHOLIC HYDRATING STICK", 
                price: "899",
                text : "ADD TO CART",
            },
            {
                img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-aquaholic-priming-moisturizer-13548826886227.jpg?v=1619115290", 
                name : "AQUAHOLIC PRIMING MOISTURIZER", 
                price: "499",
                text : "ADD TO CART",
            },
            {
                img_url:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FCoffee-culture-cleansing-balm-stick-01.jpg%3Fv%3D1643375708&w=256&q=75", 
                name : "Coffee Culture Cleansing Balm Stick", 
                price: "499",
                text : "SELECT SHADE",
            },
            {
                img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-spf30-sunscreen-28038344736851.jpg?v=1619155723", 
                name : "CITRUS GOT REAL SPF30 SUNSCREEN", 
                price: "399",
                text : "ADD TO CART",
            },
           
        ],
        [
            {
                img_url:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fmoisturiser.jpg%3Fv%3D1626968292&w=256&q=75", 
                name : "CITRUS GOT REAL DAILY MOISTURIZER", 
                price: "499",
                text : "ADD TO CART",
            },
            {
                img_url:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fparentpage_f3c8f153-1e62-4a22-bc0c-da67c39a4529.jpg%3Fv%3D1685635643&w=256&q=75", 
                name : "SWIPE RIGHT CLEANSING WATER", 
                price: "399",
                text : "ADD TO CART",
            },
            {
                img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-12775754203219.jpg?v=1586848393", 
                name : "CHEAT SHEET CLARIFYING MARK", 
                price: "99",
                text : "ADD TO CART",
            },
            {
                img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-bubble-mask-12775750500435.jpg?v=1586848341", 
                name : "CHARCOAL PATROL BUBBLE MASK", 
                price: "149",
                text : "ADD TO CART",
            },
           
        ],
        [
            {
                img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-cleansing-water-12771592732755.jpg?v=1619106450", 
                name : "SWIPE RIGHT CLEANSING WATER", 
                price: "399",
                text : "ADD TO CART",
            },
            {
                img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-12775754203219.jpg?v=1586848393", 
                name : "CHEAT SHEET CLARIFYING MARK", 
                price: "99",
                text : "ADD TO CART",
            },
            {
                img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-bubble-mask-12775750500435.jpg?v=1586848341", 
                name : "CHARCOAL PATROL BUBBLE MASK", 
                price: "149",
                text : "ADD TO CART",
            },
            {
                img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-anti-aging-mask-12775753744467.jpg?v=1586848309", 
                name : "CHEAT SHEET ANTI-AGING MASK", 
                price: "99",
                text : "ADD TO CART",
            },
           
        ],
    ]

     
    

    // Sliding images part
    let top_slide_bar_div = document.querySelector(".sliding_window")
    let isPaused = false;
    let topTemp  = 0
    let winWidth = 1263;
    setInterval(()=>{
        
        
        if(!isPaused){
            topTemp = topTemp + winWidth
            
            
            if(topTemp<winWidth*((top_slide_images_arr.length-1))){
                top_slide_bar_div.style.transform = `translate3d(${-topTemp}px,0px,0px)`
                top_slide_bar_div.style.transition = ".4s"
                console.log(topTemp,winWidth,i++)
            }else{
                top_slide_bar_div.style.transform = `translate3d(${-0}px,0px,0px)`
                top_slide_bar_div.style.transition = "0.2s"
                topTemp = 0
            }             
         }
        },3000)
       
    let start = (arr,container)=>{
        container.innerText = ""

        for(let i=0; i<arr.length; i++){
            let img = document.createElement("img")
            img.className = "top_img"
            img.src = arr[i].url
            container.append(img)
        }
       
    } 
    start(top_slide_images_arr,top_slide_bar_div)

   
   
   
        
            top_slide_bar_div.addEventListener("mouseover",()=>{
                pause()
            })
            top_slide_bar_div.addEventListener("mouseout",()=>{
                play()
            })
            document.querySelector(".lArrow").addEventListener("mouseover",()=>{
                pause()
               
            })
            document.querySelector(".rArrow").addEventListener("mouseover",()=>{
                pause()
               
            })
            document.querySelector(".lArrow").addEventListener("mouseout",()=>{
                play()
            })
            document.querySelector(".rArrow").addEventListener("mouseout",()=>{
                play()
            })
    

    let play = ()=>{
        isPaused = false
        ispaused = false
    }
    let pause = ()=>{
        isPaused = true
        ispaused = true
    }
        
        document.querySelector(".lArrow").addEventListener("click",()=>{
        
            // let winWidth = 1263
            topTemp = topTemp - winWidth
            let final = winWidth*(top_slide_images_arr.length-1)
           if(topTemp>=0){
            console.group("left",topTemp)
            top_slide_bar_div.style.transform = `translate3d(${-topTemp}px,0px,0px)`
            top_slide_bar_div.style.transition = ".4s"
           } else{
            top_slide_bar_div.style.transform = `translate3d(${-final}px,0px,0px)`
            top_slide_bar_div.style.transition = "0.2s"
            topTemp = final
           } 
          
            
        })
    
        document.querySelector(".rArrow").addEventListener("click",()=>{
            // let winWidth = 1263
           
            topTemp = topTemp + winWidth
            
            if(topTemp<winWidth*(top_slide_images_arr.length)){
                top_slide_bar_div.style.transform = `translate3d(${-topTemp}px,0px,0px)`
                top_slide_bar_div.style.transition = ".4s"
            }else{
                top_slide_bar_div.style.transform = `translate3d(${-0}px,0px,0px)`
                top_slide_bar_div.style.transition = "0.1s"
                topTemp = 0
            }
            
        })
   


//    Best sellers part

    let pro_div = document.querySelector(".best_seller_products")
    let bestSeller = (bestSellersLeftArr,container)=>{
        container.innerText = ""
        bestSellersLeftArr.forEach((el)=>{
            // console.log(el)
            
            let div = document.createElement("div")
            div.className = "four_pro_div"

            let bsimg = document.createElement("img")
            bsimg.src = el.img_url
            bsimg.style.height = "250px"
            bsimg.style.width = "100%"

            let bsname = document.createElement("div")
            bsname.className = "pro_name"
            bsname.innerText = el.name

            
            let pdiv = document.createElement("div")
            pdiv.className = "pdiv"         
            let bsprice = document.createElement("p")
            bsprice.innerText = `₹ ${el.price}`
            pdiv.append(bsprice)

            let bstag = document.createElement("div")
            bstag.className = "text_tag"
            bstag.innerText = el.text

            let img_name_price_div = document.createElement("div")
            img_name_price_div.className = "img_name_price_div"

            img_name_price_div.append(bsimg,bsname,pdiv,)
            div.append(img_name_price_div,bstag)
            // console.log(div)
            container.append(div)
        })
       
    }
    bestSeller(bestSellersLeftArr,pro_div)
   let flag1= true;
   
   
    document.querySelector(".left_arr_div").addEventListener("click",()=>{

        flag1=!flag1
        if(flag1){
            bestSeller(bestSellersLeftArr,pro_div)
        }else{
            bestSeller(bestSellersRightArr,pro_div)
        }
        
    })
    let flag2 = false
    document.querySelector(".right_arr_div").addEventListener("click",()=>{
        flag2 = !flag2
        if(flag2){
            bestSeller(bestSellersRightArr,pro_div)
        }else{
            bestSeller(bestSellersLeftArr,pro_div)
        }
        
    })


// quick beauty tips
let midTemp = 0
let ispaused = false
start(middle_slide_bar_arr,middle_slide_bar_div)
setInterval(()=>{
    
    
    if(!ispaused){
        midTemp = midTemp + winWidth
        
        if(midTemp<winWidth*(middle_slide_bar_arr.length)){
            middle_slide_bar_div.style.transform = `translate3d(${-midTemp}px,0px,0px)`
            middle_slide_bar_div.style.transition = ".4s"
        }else{
            middle_slide_bar_div.style.transform = `translate3d(${-0}px,0px,0px)`
            middle_slide_bar_div.style.transition = "0.2s"
            midTemp = 0
        }             
     }
    },3000)

    middle_slide_bar_div.addEventListener("mouseover",()=>{
        pause()
    })
    middle_slide_bar_div.addEventListener("mouseout",()=>{
        play()
    })
    document.querySelector(".lArrow").addEventListener("mouseover",()=>{
        pause()
        
    })
    document.querySelector(".rArrow").addEventListener("mouseover",()=>{
        pause()
        
    })
    document.querySelector(".lArrow").addEventListener("mouseout",()=>{
        play()
    })
    document.querySelector(".rArrow").addEventListener("mouseout",()=>{
        play()
    })




document.querySelector(".qbLArr").addEventListener("click",()=>{
    pause()
    
    midTemp = midTemp - winWidth
    let final = winWidth*(middle_slide_bar_arr.length-1)
    if(midTemp>=0){
    console.group("left",midTemp)
    middle_slide_bar_div.style.transform = `translate3d(${-midTemp}px)`
    middle_slide_bar_div.style.transition = ".4s"
    } else{
    middle_slide_bar_div.style.transform = `translate3d(${-final}px)`
    middle_slide_bar_div.style.transition = "0.2s"
    midTemp = final
} 


})

document.querySelector(".qbRArr").addEventListener("click",()=>{


    midTemp = midTemp + winWidth
    pause()
    if(midTemp<winWidth*(middle_slide_bar_arr.length)){
        middle_slide_bar_div.style.transform = `translate3d(${-midTemp}px,0px,0px)`
        middle_slide_bar_div.style.transition = ".4s"
    }else{
        middle_slide_bar_div.style.transform = `translate3d(${-0}px,0px,0px)`
        middle_slide_bar_div.style.transition = "0.2s"
        midTemp = 0
    }

})





    // Hot deals part


    let main_div = document.querySelector(".slider")
    let imageSlide =(arr,container)=>{
        container.innerText = ""
       for(let i=0; i<arr.length; i++){
        //    console.log(arr)
        arr[i].map((el)=>{
            let sliding_div = document.createElement("div")
            sliding_div.className = "sliding_div"
             let img_div = document.createElement("img")
             img_div.className = "bannerimg"
             img_div.src = el.img_url
             sliding_div.append(img_div)
             container.append(sliding_div)
         })
       }

    }
    imageSlide(hotDealsarr,main_div)
    let hdSlide = document.querySelector(".slider")
    let temp = 0
    document.querySelector(".hdLarr").addEventListener("click",()=>{
        
        let winWidth = 1263
        temp = temp - winWidth
        let final = winWidth*(hotDealsarr.length-1)
       if(temp>0){
        console.group("left",temp)
        hdSlide.style.transform = `translate3d(${-temp}px,0px,0px)`
        hdSlide.style.transition = ".4s"
       } else{
        hdSlide.style.transform = `translate3d(${-final}px,0px,0px)`
        hdSlide.style.transition = "0.2s"
        temp = final
       } 
        
    })

    document.querySelector(".hdRarr").addEventListener("click",()=>{
        let winWidth = 1263
        
        temp = temp + winWidth
        console.group("right",temp)
        if(temp<winWidth*7){
            hdSlide.style.transform = `translate3d(${-temp}px,0px,0px)`
            hdSlide.style.transition = ".4s"
        }else{
            hdSlide.style.transform = `translate3d(${-0}px,0px,0px)`
            hdSlide.style.transition = "0.2s"
            temp = 0
        }
    })


    //  Sugar streaming part

    
let vid_div = document.querySelector(".vidSlider")
    let videoPlay = (data)=>{
        data.forEach((el)=>{
           
            let video_div = document.createElement("div")
            video_div.className = "video_div"
           let video = document.createElement("video")
           video.src = el.src
           video.style.border = "0"          
           video.className = "videoshorts"
           video.style.cursor = "pointer"
            // console.log(video)
            vid_div.append(video)
            
        })
       
    }
    videoPlay(videoPlayArr)
    const clip = document.querySelectorAll(".videoshorts")
        for(let i=0; i<clip.length; i++){
            clip[i].addEventListener("mouseover",(e)=>{
                clip[i].play()
            })
            clip[i].addEventListener("mouseout",(e)=>{
                clip[i].pause()
            })
        } 
        let vidTemp = 0
        document.querySelector("#left").addEventListener("click",()=>{
                    let winWidth = window.outerWidth
                vidTemp = vidTemp - winWidth*0.74
               
            if(vidTemp>0){
                console.group("left",vidTemp)
                vid_div.style.transform = `translateX(${-vidTemp}px)`
                vid_div.style.transition = ".4s"
            }else{
                vid_div.style.transform = `translateX(${-0}px)`
                vid_div.style.transition = ".4s"
                vidTemp=0
            } 
        })
        document.querySelector("#right").addEventListener("click",()=>{
            let winWidth = window.outerWidth
        
            vidTemp = vidTemp + winWidth*0.74
            console.group("right",vidTemp,winWidth)
            if(vidTemp<winWidth*(3)){
                vid_div.style.transform = `translateX(${-vidTemp}px)`
                vid_div.style.transition = ".4s"
            }else{
                vidTemp = vidTemp - winWidth*0.74
            }
        })
   
   

    // Super savers part

    let superSaversdiv = document.querySelector(".ninth_box_slide_div")
    let superSavers = (superSaversarr,container)=>{
        container.innerText = ""
        superSaversarr.forEach((el)=>{
            // console.log(el)
            
            let div = document.createElement("div")
            div.className = "four_pro_div"

            let bsimg = document.createElement("img")
            bsimg.src = el.img_url
            bsimg.style.height = "250px"
            bsimg.style.width = "100%"

            let bsname = document.createElement("div")
            bsname.className = "pro_name"
            bsname.innerText = el.name

            let main_price_div = document.createElement("div")
            main_price_div.className = "ssprice_div"
            let stoffdiv = document.createElement("div")
            stoffdiv.className = "stoffdiv"
            let rupee = document.createElement("p")
            rupee.innerText = el.rupee
            let stoffPrice = document.createElement("p")
            stoffPrice.innerText = `${el.stoffPrice}`
            stoffdiv.append(rupee,stoffPrice)

            let pdiv = document.createElement("div")
            pdiv.className = "pdiv"
            let bsprice = document.createElement("p")
            bsprice.innerText = ` ₹ ${el.price}`
            pdiv.append(bsprice)

            let disPer = document.createElement("p")
            disPer.style.color = "#fc3183"
            disPer.innerText = el.disPer
            main_price_div.append(stoffdiv,pdiv,disPer)

            let bstag = document.createElement("div")
            bstag.className = "text_tag"
            bstag.innerText = el.text

            let img_name_price_div = document.createElement("div")
            img_name_price_div.className = "img_name_price_div"

            img_name_price_div.append(bsimg,bsname,main_price_div)
            div.append(img_name_price_div,bstag)
            // console.log(div)
            container.append(div)
        })
       
    }
    superSavers(superSaversarr[0],superSaversdiv)
   let ssleft = 0
   let ssright = 0
    document.querySelector(".ssleft_arr_div").addEventListener("click",()=>{
        
        ssleft--
        if(ssleft>=0){
            ssright--
            superSavers(superSaversarr[ssleft],superSaversdiv)           
        }else{
            ssleft = 2
            ssright = 2
            superSavers(superSaversarr[2],superSaversdiv)
        }
        
    })

    document.querySelector(".ssright_arr_div").addEventListener("click",()=>{
       ssright++
       if(ssright<3){
           ssleft++
        superSavers(superSaversarr[ssright],superSaversdiv)
       }else{
        ssleft = 0
        ssright = 0
        superSavers(superSaversarr[0],superSaversdiv)
       }
    })


    // Top pics of the week part

    let topPicksdiv = document.querySelector(".tpSlider")
    imageSlide(topPicksArr,topPicksdiv)
    let tpTemp = 0
     document.querySelector(".tpLarr").addEventListener("click",()=>{
         
        tpTemp = tpTemp - winWidth
        let final = winWidth*(topPicksArr.length-1)
       if(tpTemp>=0){
        console.group("left",tpTemp)
        topPicksdiv.style.transform = `translate3d(${-tpTemp}px,0px,0px)`
        topPicksdiv.style.transition = ".4s"
       } else{
        topPicksdiv.style.transform = `translate3d(${-final}px,0px,0px)`
        topPicksdiv.style.transition = "0.2s"
        tpTemp = final
       }
         
     })
 
     document.querySelector(".tpRarr").addEventListener("click",()=>{
        
        tpTemp = tpTemp + winWidth
        console.group("right",tpTemp)
        if(tpTemp<winWidth*(topPicksArr.length)){
            topPicksdiv.style.transform = `translate3d(${-tpTemp}px,0px,0px)`
            topPicksdiv.style.transition = ".4s"
        }else{
            topPicksdiv.style.transform = `translate3d(${-0}px,0px,0px)`
            topPicksdiv.style.transition = "0.2s"
            tpTemp = 0
        }
     })
 



    //  Gift sets part

    let giftSetsdiv = document.querySelector(".eleventh_box_slide_div")
    superSavers(giftSetsArr[0],giftSetsdiv)
    let gsleft = 0
    let gsright = 0
     document.querySelector(".gsleft_arr_div").addEventListener("click",()=>{
         
         gsleft--
         if(gsleft>=0){
             gsright--
             superSavers(giftSetsArr[gsleft],giftSetsdiv)           
         }else{
             gsleft = 1
             gsright = 1
             superSavers(giftSetsArr[1],giftSetsdiv)
         }
         
     })
 
     document.querySelector(".gsright_arr_div").addEventListener("click",()=>{
        gsright++
        if(gsright<2){
            gsleft++
         superSavers(giftSetsArr[gsright],giftSetsdiv)
        }else{
            gsleft = 0
             gsright = 0
            superSavers(giftSetsArr[0],giftSetsdiv)
        }
     })


    // //  This or That part

    //  let thisorthatdiv = document.querySelector(".twelth_box_div")
    //  imageSlide(thisorthatarr,thisorthatdiv)
 


    //  Just in part

     let justInDiv = document.querySelector(".thirteenth_box_slide_div")
     superSavers(justInArr[0],justInDiv)
     let jileft = 0
     let jiright = 0
      document.querySelector(".jileft_arr_div").addEventListener("click",()=>{
          
          jileft--
          if(jileft>=0){
              jiright--
              superSavers(justInArr[jileft],justInDiv)           
          }else{
              jileft = 3
              jiright = 3
              superSavers(justInArr[3],justInDiv)
          }
          
      })
  
      document.querySelector(".jiright_arr_div").addEventListener("click",()=>{
         jiright++
         if(jiright<4){
             jileft++
          superSavers(justInArr[jiright],justInDiv)
         }else{
            jileft = 0
            jiright = 0
             superSavers(justInArr[0],justInDiv)
         }
      })


    //   Sugar beauty blog part

      let sugarbeautydiv = document.querySelector(".fourteenth_box_div")
     imageSlide(sugarbeautyArr,sugarbeautydiv)

    //   Skincare Basics part

     let skincareBasicDiv = document.querySelector(".fifteenth_box_slide_div")
     bestSeller(skincareBasicsArr[0],skincareBasicDiv)
     let sbleft = 0
     let sbright = 0
      document.querySelector(".sbleft_arr_div").addEventListener("click",()=>{
          console.log("i am in");
          sbleft--
          if(sbleft>=0){
              sbright--
              bestSeller(skincareBasicsArr[sbleft],skincareBasicDiv)           
          }else{
              sbleft = 2
              sbright = 2
              bestSeller(skincareBasicsArr[2],skincareBasicDiv)
          }
          
      })
  
      document.querySelector(".sbright_arr_div").addEventListener("click",()=>{
        console.log("i am in");
         sbright++
         if(sbright<3){
             sbleft++
          bestSeller(skincareBasicsArr[sbright],skincareBasicDiv)
         }else{
            sbleft = 0
            sbright = 0
             bestSeller(skincareBasicsArr[0],skincareBasicDiv)
         }
      })

    