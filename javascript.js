 var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
}


 var myIndex1 = 0;
proje();

function proje() {
    var i;
    var x = document.getElementsByClassName("mySlides1");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex1++;
    if (myIndex1 > x.length) {myIndex1 = 1}
    x[myIndex1-1].style.display = "block";
    setTimeout(proje, 1500);
}
 