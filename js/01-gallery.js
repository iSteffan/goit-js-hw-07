import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

function createGallery() {
  return galleryItems
    .map(item => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
    })
    .join('');
}

galleryRef.innerHTML = createGallery(galleryItems);

galleryRef.addEventListener('click', event => {
  event.preventDefault();
  const instance = basicLightbox.create(
    `
	<img width="1280" src="${event.target.dataset.source}">
`
  );
  instance.show();

  galleryRef.addEventListener('keydown', evt => {
    if (evt.code === 'Escape') {
      instance.close();
    }
    console.log(evt);
  });
});
