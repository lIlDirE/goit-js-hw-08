import { galleryItems } from './gallery-items.js';
// console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const listEl = document.querySelector('.gallery');

const createImgEL = galleryItems
.map(({preview, original, description}) => {
	return `	
		<a class="gallery__link" href="${original}">
		<img class="gallery__image" src="${preview}" alt="${description}"/>
		</a>
	`;}).join('');

listEl.insertAdjacentHTML('beforeend', createImgEL);

var lightbox = new SimpleLightbox('.gallery a', { 
	captions: true,
	captionsData: "alt",
	captionsDelay: 250
	});