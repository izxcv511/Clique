var currPage,
  listPost,
  sectionPost,
  navItems,
  isFilter,
  isCategory,
  iconInteractiveFavorites;
document.addEventListener("DOMContentLoaded", function (event) {
  isFilter = false;
  isCategory = null;
  listPost = [];
  currPage = 1;
  navItems = document.querySelectorAll(".nav-item");
  sectionPost = document.querySelector(".post");

  clickNavItem();
  getListPostHasPaging();
});

function clickNavItem() {
  Array.from(navItems).forEach((element) => {
    element.addEventListener("click", (e) => {
      isCategory = e.target.dataset.category.toLowerCase();
      isFilter = true;
      getListPostHasPaging();
    });
  });
}

function getListPostHasPaging() {
  sectionPost.innerHTML = "";
  if (isFilter && isCategory) {
    listPost = db
      .filter(function (item) {
        return item.category == isCategory;
      })
      .slice(0, pagesize);
  } else {
    listPost = db.slice(0, pagesize);
  }
  if (listPost) {
    listPost.forEach(function (post) {
      renderPost(post);
    });
  }
  clickIconInteractiveFavorite();
}

function renderPost(post) {
  if (post) {
    let article,
      img,
      spanTitle,
      pDesc,
      spanCategory,
      divPostFooter,
      spanPostTime,
      divPostInteractive,
      divInteractiveFavorite,
      spanInteractiveFavorite,
      divInteractiveComment,
      spanInteractiveComment;

    article = document.createElement("article");
    img = document.createElement("img");
    spanTitle = document.createElement("span");
    pDesc = document.createElement("p");
    spanCategory = document.createElement("span");
    divPostFooter = document.createElement("div");
    spanPostTime = document.createElement("span");
    divPostInteractive = document.createElement("div");
    divInteractiveFavorite = document.createElement("div");
    spanInteractiveFavorite = document.createElement("span");
    divInteractiveComment = document.createElement("div");
    spanInteractiveComment = document.createElement("span");

    article.classList.add("post__item");
    img.classList.add("post__image");
    img.setAttribute("src", post.image);
    img.setAttribute("alt", "post.title");
    spanTitle.classList.add("post__title");
    spanTitle.innerText = post.title;
    pDesc.classList.add("post__desc");
    pDesc.innerText = post.desc;
    spanCategory.classList.add("post__category");
    spanCategory.innerText = post.category;

    divPostFooter.classList.add("post__footer");
    spanPostTime.classList.add("post__time");
    spanPostTime.innerText = post.time;
    divPostInteractive.classList.add("post-interactive");
    divInteractiveFavorite.classList.add("post-interactive__item");
    divInteractiveFavorite.classList.add("interactive-favorite");
    divInteractiveFavorite.innerHTML =
      '<i class="fas fa-heart post-interactive__icon"></i>';
    spanInteractiveFavorite.classList.add("post-interactive__number");
    if (post.favorite) {
      divInteractiveFavorite.classList.add("isFavorite");
      spanInteractiveFavorite.innerText = 1;
    } else {
      spanInteractiveFavorite.innerText = 0;
    }
    divInteractiveComment.classList.add("post-interactive__item");
    divInteractiveComment.innerHTML =
      '<i class="fas fa-comment post-interactive__icon"> </i>';
    divInteractiveComment.classList.add("interactive-comment");
    spanInteractiveComment.classList.add("post-interactive__number");
    spanInteractiveComment.innerText = post.comment;

    divInteractiveFavorite.appendChild(spanInteractiveFavorite);
    divInteractiveComment.appendChild(spanInteractiveComment);
    divPostInteractive.appendChild(divInteractiveFavorite);
    divPostInteractive.appendChild(divInteractiveComment);
    divPostFooter.appendChild(spanPostTime);
    divPostFooter.appendChild(divPostInteractive);

    article.appendChild(img);
    article.appendChild(spanTitle);
    article.appendChild(pDesc);
    article.appendChild(spanCategory);
    article.appendChild(divPostFooter);

    sectionPost.appendChild(article);
  }
}
function clickIconInteractiveFavorite() {
  iconInteractiveFavorites = document.querySelectorAll(
    ".interactive-favorite>i"
  );
  Array.from(iconInteractiveFavorites).forEach((element) => {
    element.addEventListener("click", (e) => {
      let parentN = e.target.parentNode;
      let spanFavorite = e.target.nextSibling;
      let number = parseInt(spanFavorite.innerText);
      if (number) {
        number = 0;
        parentN.classList.remove("isFavorite");
      } else {
        number = 1;
        parentN.classList.add("isFavorite");
      }
      spanFavorite.innerText = number;
    });
  });
}
