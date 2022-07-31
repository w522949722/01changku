document.addEventListener("DOMContentLoaded", init);

function init() {
  addListenders();
  // 创建卡片函数
  createBlogCard();
}

function addListenders() {
  document.querySelectorAll("nav a").forEach((item) => {
    item.addEventListener("click", onNavication);
  });
}

function onNavication(ev) {
  document.querySelectorAll("nav a").forEach((item) => {
    item.classList.remove("active");
  });

  ev.target.classList.add("active");
}

// 创建卡片函数
function createBlogCard() {
  let contentDiv = document.querySelector(".home-blog-content");
  contentDiv.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    let cardContent = blog[i];

    let card = document.createElement("div");
    card.className = "home-blog-card";

    card.addEventListener("click", () => window.open(cardContent.herf));

    let img = document.createElement("img");
    img.className = "home-blog-img";
    img.src = cardContent.image;

    let titleDiv = document.createElement("div");
    titleDiv.className = "home-blog-card-title";

    let line = document.createElement("div");
    let title = document.createElement("p");
    title.textContent = cardContent.title;

    titleDiv.appendChild(line);
    titleDiv.appendChild(title);

    card.appendChild(img);
    card.appendChild(titleDiv);

    contentDiv.appendChild(card);
  }
}

// function goToWebsite(href) {
//   // 在原网页上跳转
//   // window.location.href = "https://www.midorg.com/";
//   // 打开新的网页跳转
//   window.open(href);
// }
