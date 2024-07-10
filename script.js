var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var itemCount = document.getElementById("item-count");
var count = 0;

var prodDialog = document.getElementById("product-dialog");
var showImage1 = document.getElementById("modal1");
var showImage2 = document.getElementById("modal2");
var showImage3 = document.getElementById("modal3");
var showImage4 = document.getElementById("modal4");
var closeIcon = document.getElementById("close-icon");

//Counter functions for item stock
function plusCount () {
    count += 1;
    itemCount.textContent = count;
}

function minusCount() {
    count -= 1;
    itemCount.textContent = count;
}

//Modal Listeners for showing image previews
showImage1.addEventListener("click", () => {
    console.log('1 is clicked');
    prodDialog.showModal();
});

showImage2.addEventListener("click", () => {
    console.log('2 is clicked');
    prodDialog.showModal();
});

showImage3.addEventListener("click", () => {
    console.log('3 is clicked');
    prodDialog.showModal();
});

showImage4.addEventListener("click", () => {
    console.log('4 is clicked');
    prodDialog.showModal();
});

//Closing Modal
closeIcon.addEventListener("click", () => {
  console.log('close clicked');
  prodDialog.close();
});