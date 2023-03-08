import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const card = galleryItemCreate(galleryItems);
console.log(card);

galleryContainer.insertAdjacentHTML("beforeend", card);
console.log(galleryContainer);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function galleryItemCreate(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
               <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
                </a>
                </div>`;
    })
    .join("");
}

function onGalleryContainerClick(e) {
  e.preventDefault();
}


let gallery = new SimpleLightbox(".gallery a", {
  caption: true,
  captionDelay: 250,
});


console.log(galleryItems);
