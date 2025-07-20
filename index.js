import{a as u,S as g,i as n}from"./assets/vendor-DRgUjrIE.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();function h(i){return i.map(({webformatURL:t,largeImageURL:a,tags:r,likes:e,views:s,comments:o,downloads:m,id:f})=>`
        <li class="list-item">
            <a class="list-link" href="${a}">
                <img data-id="${f}" class="image-item" alt="${r}" src="${t}">
                <ul class="description">
                        <li class="desc-item">
                            <p class="figcaption">Likes<span class="caption-span">${e}</span></p>
                        </li>
                        <li class="desc-item">
                            <p class="figcaption">Views<span class="caption-span">${s}</span></p>
                        </li>
                        <li class="desc-item">
                            <p class="figcaption">Comments<span class="caption-span">${o}</span></p>
                        </li>
                        <li class="desc-item">
                            <p class="figcaption">Downloads<span class="caption-span">${m}</span></p>
                        </li>
                    </ul>
            </a>
        </li>
        `).join("")}function y(){p.innerHTML=""}function L(){d.classList.remove("hidden")}function S(){d.classList.add("hidden")}const b="51396657-6a58d607ccd7d0682078fb53f";u.defaults.baseURL="https://pixabay.com/api/";let c;function q(i){return L(),u.get(`?key=${b}&q=${i}&per_page=9&image_type=photo&orientation=horizontal&safesearch`).then(t=>{const a=t.data.hits;y();const r=h(a);return p.innerHTML=r,c?c.refresh():c=new g(".gallery a",{captions:!0,captionSelector:"img",captionsData:"alt",captionPosition:"bottom",captionDelay:250,fadeSpeed:100}),S(),a}).catch(t=>console.log(t))}const l=document.querySelector(".form"),P=document.querySelector(".search-input"),p=document.querySelector(".gallery"),d=document.querySelector(".loader");l.addEventListener("submit",$);function $(i){i.preventDefault();const t=P.value.trim().toLowerCase();if(!t){n.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!"}),l.reset();return}q(t).then(a=>{if(!a.length){n({message:"Sorry, there are no images matching your search query. Please try again!"});return}a.find(e=>e.tags.toLowerCase().includes(t))||n({message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(a=>{n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(a)}),l.reset()}
//# sourceMappingURL=index.js.map
