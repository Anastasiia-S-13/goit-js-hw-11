import { getImagesByQuery } from "./js/pixabay-api.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { hideLoader } from "./js/render-functions.js";

export const form = document.querySelector(".form");
export const input = document.querySelector(".search-input");
export const list = document.querySelector(".gallery");
export const loader = document.querySelector(".loader");

document.addEventListener("DOMContentLoaded", () => {
  hideLoader();
});
form.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
    event.preventDefault();
    const chosedName = input.value.trim().toLowerCase();

    if (!chosedName) {
        iziToast.warning({
            title: 'Caution',
            message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        form.reset();
        return;
    }

    getImagesByQuery(chosedName)
        .then(images => {
            if (!images.length) {
                iziToast({
                    message: 'Sorry, there are no images matching your search query. Please try again!'
                });
                return;
            }
            const matchedImage = images.find((item) =>
                item.tags.toLowerCase().includes(chosedName)
            );

            if (!matchedImage) {
                iziToast({
                    message: 'Sorry, there are no images matching your search query. Please try again!'
                })
            }
        })
        .catch(error => {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
            console.log(error);
        });

    form.reset();
};