/* Hero Image Rotation */
const heroImage = document.getElementById("heroImage");
const heroButtonContainer = document.getElementById("heroButtonContainer");

const heroImages = [
  { 
    src: "images/hero4.png", 
    btnText: "Our Mission", 
    btnLink: "#mission"
  },
  { 
    src: "images/hero7.png", 
    btnText: "Take a Look", 
    btnLink: "Products.html#deck"
  },
  { 
    src: "images/hero8.png", 
    btnText: "Listen Now", 
    btnLink: "Products.html#podcast"
  }
];

let index = 0;

function updateHero() {
  heroImage.src = heroImages[index].src;

  heroButtonContainer.innerHTML = `<a href="${heroImages[index].btnLink}" class="hero-btn">${heroImages[index].btnText}</a>`;

  index = (index + 1) % heroImages.length;
}

updateHero();

setInterval(updateHero, 8000);

/* Filter */
function filterCards(type) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (type === "all" || card.classList.contains(type)) {
      card.style.display = "block";
      card.style.opacity = 0;
      setTimeout(() => {
        card.style.opacity = 1;
        card.style.transition = "opacity 0.4s";
      }, 10);
    } else {
      card.style.display = "none";
    }
  });
}

/* Product gallery thumbnail click function */
function swapImage(img) {
  document.getElementById("expandedImg").src = img.src;
}
