import{A as f,S as h,a as x}from"./assets/vendor-BaJVrN4S.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();const r="/light-summer-project/assets/icons-52vXHJ8M.svg";new f(".info-content-list",{duration:300,showMultiple:!0,openOnInit:[0]});const I=[{title:"ABOUT ME",content:'<p class="first-text">I am Lloyd Jefferson, a talented programmer with extensive expert in software development. I have an understanding of different programming languages ​​and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.</p><p  class="first-text">Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work. I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software.</p>'},{title:"ROLE",content:`<p>'Frontend development"</p><p>"HeadlessCMS,Wordpress"</p><p>"Blender(enjoy)</p>`},{title:"EDUCATION",content:"<p>2018 - 2019 / Frontend Development Diploma, GoIT IT School, New York</p><p>2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York</p><p>2020 - 2022 / Advanced Blender Animation Techniques, Udemy</p>"}],g=document.querySelector(".info-content-list");function q(t){return t.map(({title:e,content:o},n)=>`
        <li class="info-content-item ${n===0?"is-active":""}">
        <h3 class="accordion-header info-title-acc"><p>${e}</p><button type="button" class="acc-btn"><svg class="about-acc-icon" width="18" height="18">
            <use href="${r}#icon-Icon-bottom"></use></button></h3>
        <div class="accordion-content info-text-acc">${o}</div>
        </li>
            `).join("")}g.insertAdjacentHTML("beforeend",q(I));g.addEventListener("click",L);const p=document.querySelector(".info-content-item.is-active .accordion-content");p.style.maxHeight=p.scrollHeight+"px";function L(t){const e=t.target.closest(".acc-btn");if(e){const o=e.closest(".info-content-item"),n=o.querySelector(".accordion-content");o.classList.toggle("is-active"),o.classList.contains("is-active")?n.style.maxHeight=n.scrollHeight+"px":n.style.maxHeight=0}}const k=[{svgroot:`${r}#icon-user-01`,topic:"Expertise",text:"As a highly experienced developer, I have deep knowledge of programming and website development."},{svgroot:`${r}#icon-message-chat-circle`,topic:"Communication",text:"Understanding your needs and wants is my priority and I am always open to discussions and corrections."},{svgroot:`${r}#icon-brush-01`,topic:"Art",text:"Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life. "},{svgroot:`${r}#icon-hourglass-02`,topic:"Urgent execution",text:"I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work."}],v=document.querySelector(".benefits-list");function S(t){return t.map(({svgroot:e,topic:o,text:n})=>`<li class="benefits-list-item">
          <svg class="benefits-icon" width="24" height="24">
            <use href="${e}"></use>
          </svg>
          <div>
            <h5 class="benefits-topic">${o}</h5>
            <p class="benefits-text">${n}</p>
          </div>
        </li>`).join("")}v.insertAdjacentHTML("beforeend",S(k));function E(t){const e=t.target.closest(".benefits-list-item");if(e){const o=e.querySelector(".benefits-topic").textContent;alert(`You clicked on: ${o}`)}}v.addEventListener("click",E);const m=new h(".swiper",{direction:"horizontal",pagination:{el:".swiper-pagination"},navigation:{nextEl:".custom-button-next",prevEl:".custom-button-prev"},on:{slideChange:y}});function y(){const t=document.querySelector(".custom-button-next"),e=document.querySelector(".custom-button-prev"),o=m.slides.length,n=m.activeIndex;n===o-1?(t.disabled=!0,t.classList.add("nav-button-disabled")):(t.disabled=!1,t.classList.remove("nav-button-disabled")),n===0?(e.disabled=!0,e.classList.add("nav-button-disabled")):(e.disabled=!1,e.classList.remove("nav-button-disabled"))}y();new f(".faq-container");const C=[{svgroot:"#icon-Icon-bottom",topic:"What programming languages ​​are most often used in your project?",text:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{svgroot:"#icon-Icon-bottom",topic:"What are the deadlines for the project?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{svgroot:"#icon-Icon-bottom",topic:"What payment methods do you accept?",text:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."},{svgroot:"#icon-Icon-bottom",topic:"How can I contact you?",text:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{svgroot:"#icon-Icon-bottom",topic:"Do you provide advice or support?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{svgroot:"#icon-Icon-bottom",topic:"What does the process of developing a software product look like from idea to implementation?",text:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}],w=document.querySelector(".faq-container");function P(t){return t.map(({svgroot:e,topic:o,text:n},s)=>`
          <li class="faq ${s!==t.length-1,""}">
            <div class="faq-list-up">
               <h3 class="question">${o}</h3>
                 <svg class="faq-icon">
                   <use href="${r}${e}"></use>
                </svg>
           </div>
          <p class="faq-text">${n}</p>
          </li>`).join("")}w.insertAdjacentHTML("beforeend",P(C));function $(t){if(t.target.closest(".faq-icon")){const e=t.target.closest(".faq"),o=e.querySelector(".faq-text");e.classList.toggle("active"),e.classList.contains("active")?o.style.maxHeight=o.scrollHeight+"px":o.style.maxHeight=0}}w.addEventListener("click",$);const T=document.createElement("style");document.head.appendChild(T);let l=0,a=0;async function u(t=0,e=4){try{const n=(await x.get("https://portfolio-js.b.goit.study/api/reviews")).data;if(l=n.length,l===0)j("Not found");else{const s=n.slice(t,t+e);A(s),b(e)}}catch{H("Failed to load reviews. Please try again.")}}function A(t){const e=document.querySelector(".swiper-wrapper.swiper-rew");e.innerHTML="",t.forEach(o=>{const n=document.createElement("li");n.classList.add("swiper-slide","review-item"),n.innerHTML=`
      <div class="review-item-content">
        <img class="image-reviews" src="${o.avatar_url}" alt="${o.author}">
        <b class="name-reviews">${o.author}</b>
        <p class="text-reviews">${o.review}</p>
      </div>`,e.appendChild(n)}),c.update()}function j(t){const e=document.querySelector(".swiper-wrapper.swiper-rew"),o=document.createElement("li");o.classList.add("swiper-slide","review-item"),o.textContent=t,e.appendChild(o)}function H(t){const e=document.querySelector(".error-popup");e.textContent=t,e.classList.add("active"),setTimeout(()=>{e.classList.remove("active")},3e3)}function b(t){const e=document.querySelector(".swiper-button-prev"),o=document.querySelector(".swiper-button-next");a===0?e.classList.add("swiper-button-disabled"):e.classList.remove("swiper-button-disabled"),a+t>=l?o.classList.add("swiper-button-disabled"):o.classList.remove("swiper-button-disabled")}const c=new h(".reviews-slider",{slidesPerView:4,spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},on:{slideChange:()=>b(c.params.slidesPerView)}});document.querySelector(".swiper-button-next").addEventListener("click",()=>{const t=c.params.slidesPerView;a+t<l&&(a+=t,u(a,t))});document.querySelector(".swiper-button-prev").addEventListener("click",()=>{const t=c.params.slidesPerView;a>0&&(a-=t,u(a,t))});const M=c.params.slidesPerView;u(a,M);
//# sourceMappingURL=commonHelpers.js.map
