// var iconInteractiveFavorites;
// document.addEventListener("DOMContentLoaded", function (event) {
//   iconInteractiveFavorites = document.querySelectorAll(
//     ".interactive-favorite>i"
//   );
//   clickIconInteractiveFavorite();
// });

// function clickIconInteractiveFavorite() {
//   Array.from(iconInteractiveFavorites).forEach((element) => {
//     element.addEventListener("click", (e) => {
//       let parentN = e.target.parentNode;
//       let spanInteractiveComment = e.target.nextSibling;
//       let number = parseInt(spanInteractiveComment.innerText);
//       if (number) {
//         number = 0;
//         parentN.classList.remove("isFavorite");
//       } else {
//         number = 1;
//         parentN.classList.add("isFavorite");
//       }
//       spanInteractiveComment.innerText = number;
//     });
//   });
// }
