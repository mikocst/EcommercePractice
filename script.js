//Variable Initialization
    //Item Count Variables
var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var itemCount = document.getElementById("item-count");
var count = 0;

    //Modal Variables
var dialog = document.querySelector("dialog");
var showImage1 = document.getElementById("modal1")
var showImage2 = document.getElementById("modal2")
var showImage3 = document.getElementById("modal3")
var showImage4 = document.getElementById("modal4")



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
    //Opening Modals
showImage1.addEventListener("click", () => {
    dialog.showModal();
})

showImage2.addEventListener("click", () => {
    dialog.showModal();
})

showImage3.addEventListener("click", () => {
    dialog.showModal();
})

showImage4.addEventListener("click", () => {
    dialog.showModal();
})

