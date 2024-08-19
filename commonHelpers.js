import{S as f,A as m,a as x}from"./assets/vendor-BYw-_Kga.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}})();const u=new f(".swiper",{direction:"horizontal",pagination:{el:".swiper-pagination"},navigation:{nextEl:".custom-button-next",prevEl:".custom-button-prev"},on:{slideChange:g}});function g(){const t=document.querySelector(".custom-button-next"),e=document.querySelector(".custom-button-prev"),o=u.slides.length,n=u.activeIndex;n===o-1?(t.disabled=!0,t.classList.add("nav-button-disabled")):(t.disabled=!1,t.classList.remove("nav-button-disabled")),n===0?(e.disabled=!0,e.classList.add("nav-button-disabled")):(e.disabled=!1,e.classList.remove("nav-button-disabled"))}g();const c="/light-summer-project/assets/icons-52vXHJ8M.svg";new m(".info-content-list",{duration:300,showMultiple:!0});const q=[{title:"ABOUT ME",content:'<p class="first-text">I am Lloyd Jefferson, a talented programmer with extensive expert in software development. I have an understanding of different programming languages ​​and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.</p><p  class="first-text">Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work. I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software.</p>'},{title:"ROLE",content:`<p>'Frontend development"</p><p>"HeadlessCMS,Wordpress"</p><p>"Blender(enjoy)</p>`},{title:"EDUCATION",content:"<p>2018 - 2019 / Frontend Development Diploma, GoIT IT School, New York</p><p>2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York</p><p>2020 - 2022 / Advanced Blender Animation Techniques, Udemy</p>"}],h=document.querySelector(".info-content-list");function I(t){return t.map(({title:e,content:o})=>`
        <li class="info-content-item">
        <h3 class="accordion-header info-title-acc"><p>${e}</p><button type="button" class="acc-btn"><svg class="about-acc-icon" width="18" height="18">
            <use href="${c}#icon-Icon-bottom"></use></button></h3>
        <div class="accordion-content info-text-acc">${o}</div>
        </li>
            `).join("")}h.insertAdjacentHTML("beforeend",I(q));h.addEventListener("click",L);function L(t){const e=t.target.closest(".acc-btn");if(e){const o=e.closest(".info-content-item"),n=o.querySelector(".accordion-content");o.classList.toggle("active"),o.classList.contains("active")?n.style.maxHeight=n.scrollHeight+"px":n.style.maxHeight=0}}const k=[{svgroot:`${c}#icon-user-01`,topic:"Expertise",text:"As a highly experienced developer, I have deep knowledge of programming and website development."},{svgroot:`${c}#icon-message-chat-circle`,topic:"Communication",text:"Understanding your needs and wants is my priority and I am always open to discussions and corrections."},{svgroot:`${c}#icon-brush-01`,topic:"Art",text:"Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life. "},{svgroot:`${c}#icon-hourglass-02`,topic:"Urgent execution",text:"I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work."}],v=document.querySelector(".benefits-list");function E(t){return t.map(({svgroot:e,topic:o,text:n})=>`<li class="benefits-list-item">
          <svg class="benefits-icon" width="24" height="24">
            <use href="${e}"></use>
          </svg>
          <div>
            <h5 class="benefits-topic">${o}</h5>
            <p class="benefits-text">${n}</p>
          </div>
        </li>`).join("")}v.insertAdjacentHTML("beforeend",E(k));function C(t){const e=t.target.closest(".benefits-list-item");if(e){const o=e.querySelector(".benefits-topic").textContent;alert(`You clicked on: ${o}`)}}v.addEventListener("click",C);new m(".faq-container");const S=[{svgroot:"./img/icons.svg#icon-Icon-bottom",topic:"What programming languages ​​are most often used in your project?",text:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{svgroot:"./img/icons.svg#icon-Icon-bottom",topic:"What are the deadlines for the project?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{svgroot:"./img/icons.svg#icon-Icon-bottom",topic:"What payment methods do you accept?",text:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."},{svgroot:"./img/icons.svg#icon-Icon-bottom",topic:"How can I contact you?",text:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{svgroot:"./img/icons.svg#icon-Icon-bottom",topic:"Do you provide advice or support?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{svgroot:"./img/icons.svg#icon-Icon-bottom",topic:"What does the process of developing a software product look like from idea to implementation?",text:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}],b=document.querySelector(".faq-container");function $(t){return t.map(({svgroot:e,topic:o,text:n},i)=>`
          <li class="faq" style="position: relative; ${i!==t.length-1?"border-bottom: 1px solid rgba(250, 250, 250, 0.2);":""}">
             <svg class="faq-icon" style="position: absolute; top: 32px; right: 20px; width: 40px; height: 40px; border: 1px solid; border-radius: 100px;">
            <use href="${e}"></use>
          </svg>
            <h3 class="question" style="font-size: 20px; font-weight: 600; line-height: 1.5; letter-spacing: -0.02em;">${o}</h3>
            <p class="faq-text" style="font-size: 16px; font-weight: 500; line-height: 1.5; letter-spacing: -0.02em;">${n}</p>
          </li>`).join("")}b.insertAdjacentHTML("beforeend",$(S));function T(t){if(t.target.closest(".faq-icon")){const e=t.target.closest(".faq"),o=e.querySelector(".faq-text");e.classList.toggle("active"),e.classList.contains("active")?o.style.maxHeight=o.scrollHeight+"px":o.style.maxHeight=0}}b.addEventListener("click",T);const y=document.createElement("style");y.textContent=`
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
`;document.head.appendChild(y);let a=0,r=4,l=0;async function p(t=0,e=4){try{const n=(await x.get("https://portfolio-js.b.goit.study/api/reviews")).data;if(l=n.length,l===0)j("Not found");else{const i=n.slice(t,e);A(i),w()}}catch{P("Failed to load reviews. Please try again.")}}function A(t){const e=document.querySelector(".swiper-wrapper");e.innerHTML="",t.forEach(o=>{const n=document.createElement("li");n.classList.add("swiper-slide","review-item"),n.innerHTML=`
      <div class="review-item-content">
        <img class="image-reviews" src="${o.avatar_url}" alt="${o.author}">
        <b class="name-reviews">${o.author}</b>
        <p class="text-reviews">${o.review}</p>
      </div>`,e.appendChild(n)}),M.update()}function j(t){const e=document.querySelector(".swiper-wrapper"),o=document.createElement("li");o.classList.add("swiper-slide","review-item"),o.textContent=t,e.appendChild(o)}function P(t){const e=document.querySelector(".error-popup");e.textContent=t,e.classList.add("active"),setTimeout(()=>{e.classList.remove("active")},3e3)}function w(){const t=document.querySelector(".swiper-button-prev"),e=document.querySelector(".swiper-button-next");a===0?t.classList.add("swiper-button-disabled"):t.classList.remove("swiper-button-disabled"),r>=l?e.classList.add("swiper-button-disabled"):e.classList.remove("swiper-button-disabled")}const M=new f(".reviews-slider",{slidesPerView:4,spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},on:{slideChange:w}});document.querySelector(".swiper-button-next").addEventListener("click",()=>{r<l&&(a+=1,r+=1,p(a,r))});document.querySelector(".swiper-button-prev").addEventListener("click",()=>{a>0&&(a-=1,r-=1,p(a,r))});p(a,r);
//# sourceMappingURL=commonHelpers.js.map
