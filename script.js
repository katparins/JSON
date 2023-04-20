let bestsellers = [
  {
    name: "white 'ctw' shirt",
    collection: "Crea-tea-wake",
    season: "Spring 2022",
    price: "20.99",
    shop: "Order Here",
    link: "https://shop.line.me/@491wljrl/product/1000212779",
    image: "createawhite.jpg",
  },
  {
    name: "100% f.e. tee",
    collection: "100% flower energy",
    season: "Fall 2021",
    price: "16.99",
    shop: "Order Here",
    link: "https://shop.line.me/@491wljrl/product/321031453",
    image: "fetee.jpg",
  },
  {
    name: "pink 'lab' tee",
    collection: "little artsy baby",
    season: "Winter 2021",
    price: "19.99",
    shop: "Order Here",
    link: "https://shop.line.me/@491wljrl/product/1000160076",
    image: "labpink.jpg",
  }
];

let container = document.getElementById("collection-container");
container.classList.add("itemContainer");

for (let i = 0; i < bestsellers.length; i++) {
  let heading = document.createElement("h3");
  heading.innerText = bestsellers[i].name;

  let image = document.createElement("img");
  image.classList.add("pic")
  image.src = bestsellers[i].image;
  image.alt = bestsellers[i].item;
  image.setAttribute("data-fancybox", "gallery");
  image.setAttribute("data-caption", bestsellers[i].name);

  let paragraph = document.createElement("p");
  paragraph.classList.add("description")
  paragraph.innerHTML = bestsellers[i].collection +
                        "<br><em>" + bestsellers[i].season + "</em>" +
                        "<br><span style='color: red;'>$" + bestsellers[i].price + "</span>" +
                        "<br><a href='" + bestsellers[i].link + "'target='_link'>" + bestsellers[i].shop;
  let itemDiv = document.createElement("div");
  itemDiv.classList.add("item");
  itemDiv.appendChild(heading);
  itemDiv.appendChild(image);
  itemDiv.appendChild(paragraph);
  container.appendChild(itemDiv);
}

document.addEventListener("DOMContentLoaded", function() {
  const gallery = document.querySelectorAll("[data-fancybox]");
  gallery.forEach(function(image) {
    image.addEventListener("click", function(event) {
      event.preventDefault();
      Fancybox.show([{
        src: image.src,
        caption: image.getAttribute("data-caption")
      }]);
    });
  });
});