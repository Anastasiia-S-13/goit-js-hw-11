import{a as u,S as f,i as n}from"./assets/vendor-DRgUjrIE.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function g(o){return o.map(({webformatURL:t,largeImageURL:a,tags:i,likes:e,views:r,comments:s,downloads:p,id:d})=>`
        <li class="list-item">
            <a class="list-link" href="${a}">
                <img data-id="${d}" class="image-item" alt="${i}" src="${t}">
                <div>
                    <ul>
                        <li>
                            <p>Likes<span>${e}</span></p>
                        </li>
                        <li>
                            <p>Views<span>${r}</span></p>
                        </li>
                        <li>
                            <p>Comments<span>${s}</span></p>
                        </li>
                        <li>
                            <p>Downloads<span>${p}</span></p>
                        </li>
                    </ul>
                </div>
            </a>
        </li>
        `).join("")}function y(){m.innerHTML=""}const h="51396657-6a58d607ccd7d0682078fb53f";u.defaults.baseURL="https://pixabay.com/api/";let c;function S(o){return u.get(`?key=${h}&q=${o}&per_page=9&image_type=photo&orientation=horizontal&safesearch`).then(t=>{const a=t.data.hits;y();const i=g(a);return m.innerHTML=i,c?c.refresh():c=new f(".list-image a",{captions:!0,captionSelector:"img",captionsData:"alt",captionPosition:"bottom",captionDelay:250,fadeSpeed:100}),a}).catch(t=>console.log(t))}const l=document.querySelector(".form"),L=document.querySelector(".search-input"),m=document.querySelector(".list-image");document.querySelector(".loader");l.addEventListener("submit",b);function b(o){o.preventDefault();const t=L.value.trim().toLowerCase();if(!t){n.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!"}),l.reset();return}S(t).then(a=>{if(!a.length){n({message:"Sorry, there are no images matching your search query. Please try again!"});return}a.find(e=>e.tags.toLowerCase().includes(t))||n({message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(a=>{n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(a)}),l.reset()}
//# sourceMappingURL=index.js.map
