// Slider owlCarousel
// $(function () {
//   // Owl Carousel
//   var owl = $(".owl-carousel");
//   owl.owlCarousel({
//     items: 5,
//     margin: 10,
//     loop: true,
//     nav: true
//   });
// });


//Banner
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

//News Product Owl-carousel
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})


const tree = document.getElementById("tree");
tree.addEventListener("change", function (event) {
  const checkbox = event.target;
  const checked = checkbox.checked;
  const parentNode = checkbox.parentNode;
  const subTree = parentNode.getElementsByTagName("ul")[0];

  if (subTree) {
    subTree.style.maxHeight = checked ? "500px" : "0";
    subTree.style.display = checked ? "block" : "none";
    subTree.style.padding = checked ? "0 0 0 20px" : "none";
  }
});