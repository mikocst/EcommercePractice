var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var itemCount = document.getElementById("item-count");
var count = 0;

function plusCount () {
    count += 1;
    itemCount.textContent = count;
}

function minusCount() {
    count -= 1;
    itemCount.textContent = count;
}