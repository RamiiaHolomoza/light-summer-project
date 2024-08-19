import{S as m,A as y,a as w}from"./assets/vendor-BYw-_Kga.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function o(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=o(i);fetch(i.href,n)}})();const u=new m(".swiper",{direction:"horizontal",pagination:{el:".swiper-pagination"},navigation:{nextEl:".custom-button-next",prevEl:".custom-button-prev"},on:{slideChange:f}});function f(){const t=document.querySelector(".custom-button-next"),e=document.querySelector(".custom-button-prev"),o=u.slides.length,s=u.activeIndex;s===o-1?(t.disabled=!0,t.classList.add("nav-button-disabled")):(t.disabled=!1,t.classList.remove("nav-button-disabled")),s===0?(e.disabled=!0,e.classList.add("nav-button-disabled")):(e.disabled=!1,e.classList.remove("nav-button-disabled"))}f();const c="/light-summer-project/assets/icons-52vXHJ8M.svg",x=[{svgroot:`${c}#icon-user-01`,topic:"Expertise",text:"As a highly experienced developer, I have deep knowledge of programming and website development."},{svgroot:`${c}#icon-message-chat-circle`,topic:"Communication",text:"Understanding your needs and wants is my priority and I am always open to discussions and corrections."},{svgroot:`${c}#icon-brush-01`,topic:"Art",text:"Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life. "},{svgroot:`${c}#icon-hourglass-02`,topic:"Urgent execution",text:"I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work."}],g=document.querySelector(".benefits-list");function q(t){return t.map(({svgroot:e,topic:o,text:s})=>`<li class="benefits-list-item">
          <svg class="benefits-icon" width="24" height="24">
            <use href="${e}"></use>
          </svg>
          <div>
            <h5 class="benefits-topic">${o}</h5>
            <p class="benefits-text">${s}</p>
          </div>
        </li>`).join("")}g.insertAdjacentHTML("beforeend",q(x));function L(t){const e=t.target.closest(".benefits-list-item");if(e){const o=e.querySelector(".benefits-topic").textContent;alert(`You clicked on: ${o}`)}}g.addEventListener("click",L);new y(".faq-container");const E=[{svgroot:"./img/icons.svg#icon-Icon-bottom",topic:"What programming languages ​​are most often used in your project?",text:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{svgroot:"./img/icons.svg#icon-Icon-bottom",topic:"What are the deadlines for the project?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{svgroot:"./img/icons.svg#icon-Icon-bottom",topic:"What payment methods do you accept?",text:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."},{svgroot:"./img/icons.svg#icon-Icon-bottom",topic:"How can I contact you?",text:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{svgroot:"./img/icons.svg#icon-Icon-bottom",topic:"Do you provide advice or support?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{svgroot:"./img/icons.svg#icon-Icon-bottom",topic:"What does the process of developing a software product look like from idea to implementation?",text:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}],h=document.querySelector(".faq-container");function I(t){return t.map(({svgroot:e,topic:o,text:s},i)=>`
          <li class="faq" style="position: relative; ${i!==t.length-1?"border-bottom: 1px solid rgba(250, 250, 250, 0.2);":""}">
             <svg class="faq-icon" style="position: absolute; top: 32px; right: 20px; width: 40px; height: 40px; border: 1px solid; border-radius: 100px;">
            <use href="${e}"></use>
          </svg>
            <h3 class="question" style="font-size: 20px; font-weight: 600; line-height: 1.5; letter-spacing: -0.02em;">${o}</h3>
            <p class="faq-text" style="font-size: 16px; font-weight: 500; line-height: 1.5; letter-spacing: -0.02em;">${s}</p>
          </li>`).join("")}h.insertAdjacentHTML("beforeend",I(E));function C(t){if(t.target.closest(".faq-icon")){const e=t.target.closest(".faq"),o=e.querySelector(".faq-text");e.classList.toggle("active"),e.classList.contains("active")?o.style.maxHeight=o.scrollHeight+"px":o.style.maxHeight=0}}h.addEventListener("click",C);const b=document.createElement("style");b.textContent=`
  @media screen and (min-width: 1440px) {
    .faq-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(3, auto);
      position: relative;
    }
    .faq-container::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: 1px;
      background-color: rgba(250, 250, 250, 0.2); ;
    }
    .faq {
      padding: 0 32px;
      border-bottom: 1px solid rgba(250, 250, 250, 0.2);
    }
    .faq:nth-child(odd) {
      padding-left: 0;
    }
    .faq h3 {
      padding-top: 32px;
      padding-bottom: 26px;
      font-size: 20px;
      font-weight: 600;
      line-height: 1.5;
      letter-spacing: -0.02em;
    }
    .faq p {
      padding-bottom: 26px;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      letter-spacing: -0.02em;
    }
  }
`;document.head.appendChild(b);let r=0,a=4,l=0;async function p(t=0,e=4){try{const s=(await w.get("https://portfolio-js.b.goit.study/api/reviews")).data;if(l=s.length,l===0)$("Not found");else{const i=s.slice(t,e);S(i),v()}}catch{k("Failed to load reviews. Please try again.")}}function S(t){const e=document.querySelector(".swiper-wrapper");e.innerHTML="",t.forEach(o=>{const s=document.createElement("li");s.classList.add("swiper-slide","review-item"),s.innerHTML=`
      <div class="review-item-content">
        <img class="image-reviews" src="${o.avatar_url}" alt="${o.author}">
        <b class="name-reviews">${o.author}</b>
        <p class="text-reviews">${o.review}</p>
      </div>`,e.appendChild(s)}),P.update()}function $(t){const e=document.querySelector(".swiper-wrapper"),o=document.createElement("li");o.classList.add("swiper-slide","review-item"),o.textContent=t,e.appendChild(o)}function k(t){const e=document.querySelector(".error-popup");e.textContent=t,e.classList.add("active"),setTimeout(()=>{e.classList.remove("active")},3e3)}function v(){const t=document.querySelector(".swiper-button-prev"),e=document.querySelector(".swiper-button-next");r===0?t.classList.add("swiper-button-disabled"):t.classList.remove("swiper-button-disabled"),a>=l?e.classList.add("swiper-button-disabled"):e.classList.remove("swiper-button-disabled")}const P=new m(".reviews-slider",{slidesPerView:4,spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},on:{slideChange:v}});document.querySelector(".swiper-button-next").addEventListener("click",()=>{a<l&&(r+=1,a+=1,p(r,a))});document.querySelector(".swiper-button-prev").addEventListener("click",()=>{r>0&&(r-=1,a-=1,p(r,a))});p(r,a);
//# sourceMappingURL=commonHelpers.js.map
