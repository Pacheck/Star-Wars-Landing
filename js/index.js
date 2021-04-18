let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

const imageGroupOne = $('.all-images .group-one div');
const imageGroupTwo = $$('.all-images .group-two div');

const arrayOfImages = Array.from(imageGroupTwo);

imageGroupOne.addEventListener("mouseenter",  () => {
    imageGroupOne.setAttribute('id', 'filtro');
})

imageGroupOne.addEventListener("mouseleave", () => {
    imageGroupOne.removeAttribute('id');
})

arrayOfImages.forEach(image => {
    image.addEventListener("mouseenter", () => {
        image.setAttribute('id', 'filtro');
    })

    image.addEventListener("mouseleave", () => {
        image.removeAttribute('id');
    })
})

