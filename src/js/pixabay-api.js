import axios from "axios";
import { list } from "../main";
import createGallery from "./render-functions";
import { clearGallery, showLoader, hideLoader } from "./render-functions";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const API_KEY = '51396657-6a58d607ccd7d0682078fb53f';
axios.defaults.baseURL = 'https://pixabay.com/api/';

let lightbox;

export function getImagesByQuery(query) {
    showLoader();
    return axios.get(`?key=${API_KEY}&q=${query}&per_page=9&image_type=photo&orientation=horizontal&safesearch`)
        .then(res => {
            const images = res.data.hits;

            clearGallery();
            const galleryMarkup = createGallery(images);
            list.innerHTML = galleryMarkup;
            if (lightbox) {
                lightbox.refresh();
            } else {
                lightbox = new SimpleLightbox('.gallery a', {
                    captions: true,
                    captionSelector: 'img',
                    captionsData: 'alt',
                    captionPosition: 'bottom',
                    captionDelay: 250,
                    fadeSpeed: 100,
                });
            }
            hideLoader();
            return images;
    })
        .catch(error => console.log(error));
};