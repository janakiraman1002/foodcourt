
// let orderCount = 0;
// let btns = document.querySelectorAll("button"); 

// document.getElementById("order-now").addEventListener("click", function() {
//   orderCount++;
//   document.getElementById("order-count").innerHTML = orderCount;
// });


let orderCount = 0;
let btns = document.querySelectorAll("#order-now");
btns.forEach(button =>{
    button.addEventListener("click",()=>{
    orderCount++;
    let order =document.getElementById("order");
    order.textContent=orderCount;
    order.style.display="block";
});
});
                      //  biriyani //

document.querySelector('.clickable-image').addEventListener('click', function() {
  window.location.href = 'index-biriyani.html';
});
                        //  burger  //
       
document.querySelector('.clickable-image').addEventListener('click', function() {
  window.location.href = 'burger.html';
});

