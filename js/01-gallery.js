import { galleryItems } from './gallery-items.js';
// Change code below this line


const listEl = document.querySelector('.gallery');
const addMarkup = creatingListPictures(galleryItems);
function closeModalEscape(instance) {
    document.addEventListener("keydown", event => {
    if (event.key !== 'Escape') {
    return}
    instance.close();
});}
function creatingListPictures(gallaryArray) {
  return gallaryArray
    .map(({preview, original, description}) =>{
        return ` <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li> `
    })
    .join('\n')
}
listEl.insertAdjacentHTML('beforeend', addMarkup);
listEl.addEventListener('click', clickOnPicture)
function clickOnPicture(event) {
    event.preventDefault();
    if (event.target.className !== "gallery__image")  {
        return;
    }
    const instance  = basicLightbox.create(`<img
      src="${event.target.dataset.source}"
    />`, {
      onShow: () => {document.addEventListener("keydown", closeModalEscape)},
      onClose: () => {document.removeEventListener("keydown", closeModalEscape)},
    } )
    instance.show();

}


