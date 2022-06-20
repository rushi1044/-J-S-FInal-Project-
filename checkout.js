function navSlide() {
    var burger = document.querySelector(".burger");
    var nav = document.querySelector(".nav-links");
  
    burger.addEventListener("click", function() {
      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    });
  }
  navSlide();




orderListData = JSON.parse(window.localStorage.getItem('orderList'));
let totalPrice = 0;
let cartCount = 0;
let orderListArray = JSON.parse(window.localStorage.getItem('orderList'));
if(orderListArray!==null){
  for(let i=0;i<orderListArray.length;i++){
    cartCount += orderListArray[i].count; 
  }
}
$('#cart-count').text(cartCount);

function createOrderProductList (data) {
    var checkoutCard = $('<div>');
    checkoutCard.addClass('checkout-card');
    var innerDiv1 = $('<div>');
    var thumbnail = $('<img>');
    thumbnail.addClass('checkout-product-img');
    thumbnail.attr('src', data.preview);
    innerDiv1.append(thumbnail);
    var innerDiv2 = $('<div>');
    innerDiv2.append($('<h4>').text(data.name));
    innerDiv2.append($('<p>').text('x'+data.count));
    innerDiv2.append($('<p>').html('<span>Amount : Rs </span><span>'+data.price+'</span>'));
    checkoutCard.append(innerDiv1,innerDiv2);
    $('#card-list').append(checkoutCard);   
}
if(orderListData !== null){
    for(let i=0;i<orderListData.length;i++){
    createOrderProductList(orderListData[i]);
    totalPrice += orderListData[i].price;
}
}

var cardList = document.getElementById('card-list');
$('#item-count').text(cardList.childElementCount-1);
$('#total-amount').text(totalPrice);
$('#btn-place-order').click(function(){
    window.localStorage.clear();
});

