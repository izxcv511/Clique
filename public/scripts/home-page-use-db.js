"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}var currPage,listPost,sectionPost,navItems,isFilter,isCategory,iconInteractiveFavorites;function clickNavItem(){Array.from(navItems).forEach(function(e){e.addEventListener("click",function(e){currPage=1,isCategory=e.target.dataset.category.toLowerCase(),isFilter=!0,getListPostHasPaging()})})}function getListPostHasPaging(){1===currPage&&(sectionPost.innerHTML="",listPost=[]);var e=[],e=(isFilter&&isCategory?db.filter(function(e){return e.category==isCategory}):db).slice((currPage-1)*pagesize,currPage*pagesize);listPost=[].concat(_toConsumableArray(listPost),_toConsumableArray(e)),e&&e.forEach(function(e){renderPost(e)}),clickIconInteractiveFavorite()}function renderPost(e){var t,i,n,a,r,s,c,o,d,l,m,u;e&&(u=m=l=d=o=c=s=r=a=n=i=t=void 0,t=document.createElement("article"),i=document.createElement("img"),n=document.createElement("span"),a=document.createElement("p"),r=document.createElement("span"),s=document.createElement("div"),c=document.createElement("span"),o=document.createElement("div"),d=document.createElement("div"),l=document.createElement("span"),m=document.createElement("div"),u=document.createElement("span"),t.classList.add("post__item"),i.classList.add("post__image"),i.setAttribute("src",e.image),i.setAttribute("alt","post.title"),n.classList.add("post__title"),n.innerText=e.title,a.classList.add("post__desc"),a.innerText=e.desc,r.classList.add("post__category"),r.innerText=e.category,s.classList.add("post__footer"),c.classList.add("post__time"),c.innerText=e.time,o.classList.add("post-interactive"),d.classList.add("post-interactive__item"),d.classList.add("interactive-favorite"),d.innerHTML='<i class="fas fa-heart post-interactive__icon"></i>',l.classList.add("post-interactive__number"),e.favorite?(d.classList.add("isFavorite"),l.innerText=1):l.innerText=0,m.classList.add("post-interactive__item"),m.innerHTML='<i class="fas fa-comment post-interactive__icon"> </i>',m.classList.add("interactive-comment"),u.classList.add("post-interactive__number"),u.innerText=e.comment,d.appendChild(l),m.appendChild(u),o.appendChild(d),o.appendChild(m),s.appendChild(c),s.appendChild(o),t.appendChild(i),t.appendChild(n),t.appendChild(a),t.appendChild(r),t.appendChild(s),sectionPost.appendChild(t))}function clickIconInteractiveFavorite(){iconInteractiveFavorites=document.querySelectorAll(".interactive-favorite>i"),Array.from(iconInteractiveFavorites).forEach(function(e){e.addEventListener("click",function(e){var t=e.target.parentNode,i=e.target.nextSibling,e=parseInt(i.innerText);e?(e=0,t.classList.remove("isFavorite")):(e=1,t.classList.add("isFavorite")),i.innerText=e})})}function handleScroll(){var e=document.querySelector("section.post");window.addEventListener("scroll",function(){window.innerHeight+window.scrollY>=e.offsetHeight&&currPage<5&&(currPage++,getListPostHasPaging())})}document.addEventListener("DOMContentLoaded",function(e){isFilter=!1,isCategory=null,listPost=[],currPage=1,navItems=document.querySelectorAll(".nav-item"),sectionPost=document.querySelector(".post"),clickNavItem(),getListPostHasPaging(),handleScroll()});