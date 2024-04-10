let countTrendingItem = 0;

let itemCountTrending = document.querySelector('.item-count');
itemCountTrending.innerText = `${countTrendingItem} items`
const url = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=smashbox';

let ratingArray = [];
const appendData = (data) => {
    
    countTrendingItem = data.length
    itemCountTrending.innerText = `${countTrendingItem} items`
    let containerContent = document.getElementById("container-content");
    containerContent.innerHTML = null;
    data.forEach(({image_link,name,price},index) => {
        let rx = (Math.random()*3)+2;
        let ry = Math.floor(Math.random()*270)+71;
        let rz = Math.floor(Math.random()*70)+15;
        ratingArray.push([rx.toFixed(1),ry,rz]);
        let div = document.createElement('div');
        div.setAttribute('class', 'trending-card');
        div.addEventListener('click', ()=> {
            
            ProductPage(image_link,name,price,4);
           window.location.href = "product.html"
        })
        let div_img_top_num = document.createElement('div');
        div_img_top_num.setAttribute('class', 'img-top-num');
        let div_img_top_img = document.createElement('img');
        div_img_top_img.src = 'https://in.sugarcosmetics.com/ic_multiple_shades_opt2.png';
        div_img_top_num.append(`${rz} `,div_img_top_img);
        let imgDiv = document.createElement('div');
        imgDiv.setAttribute('class', 'imgDiv');
        let imgDivimg = document.createElement('img');
        imgDivimg.src = image_link;
        imgDiv.append(imgDivimg);
        let textDiv = document.createElement('div');
        textDiv.setAttribute('class', 'trending-text');
        let textP = document.createElement('p');
        textP.textContent = name;
        textDiv.append(textP);
        let priceDiv = document.createElement('div');
        priceDiv.setAttribute('class', 'trending-price');
        let priceP = document.createElement('p');
        priceP.textContent = `Rs.${price}`;
        priceDiv.append(priceP);
        let ratingDiv = document.createElement('div');
        ratingDiv.setAttribute('class', 'trending-rating');
        let ratingimg = document.createElement('img');
        ratingimg.src = 'https://in.sugarcosmetics.com/star_filled.png';
        ratingDiv.append(ratingimg,`${ratingArray[ratingArray.length-1][0]} (${ratingArray[ratingArray.length-1][1]})`);
        let fevOuterDiv = document.createElement('div');
        fevOuterDiv.setAttribute('class','trending-fev-card');
        fevOuterDiv.innerHTML = `<div class="trending-fev-sign"><i class="fa fa-heart-o" aria-hidden="true"></i></div><div class="select-shade-text">SELECT SHADE</div>`;
        div.append(div_img_top_num,imgDiv,textDiv,priceDiv,ratingDiv,fevOuterDiv)
        containerContent.append(div);
    });

}
let urlDataArray = [];
let defaultArray = []
const fetchData = async () => {
    let middleware = document.querySelector('.middleware');
    middleware.style.display = 'flex';
    let res = await fetch(url);
    let data = await res.json();

    //console.log(data);

    console.log(data);
    defaultArray.push(data);
    urlDataArray.push(data);
    middleware.style.display = 'none';
    appendData(data);
}
fetchData();

const setDataToLocal = (data,index) => {
    let obj = {
        data:data,
        rating: ratingArray[index],
        index:index
    }
    localStorage.setItem('productData', JSON.stringify(obj));
}

document.querySelector('.applyFilter').addEventListener('click', ()=>{
    let filterArr = {};
    let arrF = [];
    let xy = document.querySelector('.inputCheck').children;
    for(let m = 0; m<xy.length; m++){
        if(xy[m].childNodes[0].checked === true){
            filterArr[xy[m].innerText.toLowerCase()] = true;
        }
    }
    if(Object.keys(filterArr).length > 0){
        for(let nn = 0; nn<urlDataArray[0].length; nn++){
            if(urlDataArray[0][nn].product_type in filterArr){
                arrF.push(urlDataArray[0][nn])
            }
        }
        appendData(arrF);
    }
    else{
        appendData(urlDataArray[0]);
    }
})


function ProductPage(image_link,name,price,rating){
  let obj = {image_link,name,price,rating};
  localStorage.setItem("ProductPage",JSON.stringify(obj))
}

document.querySelector('.cursor').addEventListener('click', ()=> {
    let xy = document.querySelector('.inputCheck').children;
    for(let m = 0; m<xy.length; m++){
        xy[m].childNodes[0].checked = false;
    }
    appendData(urlDataArray[0]);
})
document.querySelector('#highToLow').addEventListener('click', ()=>{
    bblSortHL(urlDataArray[0]);
    console.log('high to low')
})
document.querySelector('#lowToHigh').addEventListener('click', ()=>{
    bblSortLH(urlDataArray[0]);
    console.log('low to high')
})

function bblSortLH(urlDataArrayy){
    for(var i = 0; i < urlDataArrayy.length; i++){
      for(var j = 0; j < (urlDataArrayy.length-i-1); j++){
        if(+urlDataArrayy[j].price > +urlDataArrayy[j+1].price){
          var temp = urlDataArrayy[j]
          urlDataArrayy[j] = urlDataArrayy[j+1];
          urlDataArrayy[j+1] = temp;
        }
      }
    }
    appendData(urlDataArrayy);
}
function bblSortHL(urlDataArrayy){
    for(var i = 0; i < urlDataArrayy.length; i++){
      for(var j = 0; j < (urlDataArrayy.length-i-1); j++){
        if(+urlDataArrayy[j].price < +urlDataArrayy[j+1].price){
          var temp = urlDataArrayy[j]
          urlDataArrayy[j] = urlDataArrayy[j+1];
          urlDataArrayy[j+1] = temp;
        }
      }
    }
    appendData(urlDataArrayy);
}
document.querySelector('.cursorSort').addEventListener('click',()=>{
    fetchData();
})