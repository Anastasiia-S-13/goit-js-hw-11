import { list } from "../main";
export default function createGallery(images) {

    return images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads, id }) => {
       return `
        <li class="list-item">
            <a class="list-link" href="${largeImageURL}">
                <img data-id="${id}" class="image-item" alt="${tags}" src="${webformatURL}">
                <div>
                    <ul>
                        <li>
                            <p>Likes<span>${likes}</span></p>
                        </li>
                        <li>
                            <p>Views<span>${views}</span></p>
                        </li>
                        <li>
                            <p>Comments<span>${comments}</span></p>
                        </li>
                        <li>
                            <p>Downloads<span>${downloads}</span></p>
                        </li>
                    </ul>
                </div>
            </a>
        </li>
        `
    }).join("");
};


export function clearGallery() {
    list.innerHTML = "";
}


export function showLoader() {

}
export function hideLoader() {
    
}