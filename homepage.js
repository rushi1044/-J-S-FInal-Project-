function navSlide() {
    var burger = document.querySelector(".burger");
    var nav = document.querySelector(".nav-links");
  
    burger.addEventListener("click", function() {
      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    });
  }
  navSlide();


let cartCount = 0;
let orderListArray = JSON.parse(window.localStorage.getItem('orderList'));
if(orderListArray!==null){
  for(let i=0;i<orderListArray.length;i++){
    cartCount += orderListArray[i].count; 
  }
}
$('#cart-count').text(cartCount);

  
  $(document).ready(function() {
    $("#banner").slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false
    });
  });  
  

function makeCard(obj){
    var card = document.createElement('a');
    card.href = "./productdetails.html?id=" +obj.id;
    card.className = "card";

    var imageCard = document.createElement('div');
    imageCard.className = "card-img";

    var detailsCard = document.createElement('div');
    detailsCard.className = "card-details";

    var thumbnail = document.createElement('img');
    thumbnail.className = "thumbnail";

    card.appendChild(imageCard);
    card.appendChild(detailsCard);
    imageCard.appendChild(thumbnail);

    var productName = document.createElement('h3');
    productName.innerHTML = obj.name;
    thumbnail.src = obj.preview;
    detailsCard.appendChild(productName);

    var productBrand = document.createElement('h4');
    productBrand.innerHTML = obj.brand;
    detailsCard.appendChild(productBrand);

    var productPrice = document.createElement('h5');
    productPrice.innerHTML = "Rs"+" "+obj.price;
    detailsCard.appendChild(productPrice);

    var clothes = document.getElementById('clothes');
    var accessories = document.getElementById('accessories');
        if(obj.isAccessory){
            accessories.appendChild(card);
        }else{
            clothes.appendChild(card);
        }
}


$.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product',function(response) {
    for(var i=0;i<response.length;i++){
        makeCard(response[i])
    }
});