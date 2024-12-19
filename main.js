(()=>{"use strict";function e(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.buttonOffClass),t.disabled=!1):(t.classList.add(n.buttonOffClass),t.disabled=!0)}var t=new Event("input",{bubbles:!0});function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,o(r.key),r)}}function o(e){var t=function(e){if("object"!=n(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==n(t)?t:t+""}function c(e){"Escape"===e.key&&i(document.querySelector(".popup_is-opened"))}function u(e){Array.from(e.querySelectorAll(H.formSelector)).forEach((function(e){return function(e,n){Array.from(e.querySelectorAll(n.inputSelector)).forEach((function(e){return e.dispatchEvent(t)}))}(e,H)})),document.addEventListener("keydown",c),function(e){e.classList.add("popup_is-opened")}(e)}function i(e){document.removeEventListener("keydown",c),function(e){e.classList.remove("popup_is-opened")}(e)}function a(e){var t=e.querySelector(".button");t.disabled=!0,t.textContent="Сохранение..."}function s(e){var t=e.querySelector(".button");t.disabled=!1,t.textContent="Сохранить"}function l(e,t){e.querySelector(".card__likes-cnt").textContent=t}function f(e){var t=function(e){var t=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),n=t.querySelector(".card__image");return n.src=e.link,n.alt=e.name,t.querySelector(".card__title").textContent=e.name,t}(e),n=t.querySelector(".card__image");if(e.owner&&e.owner._id===v._id){var r=t.querySelector(".card__delete-button");r.classList.remove("card__delete-button-disabled"),r.addEventListener("click",(function(){!function(e,t){_.fetchDelete("cards/".concat(t)).then((function(t){return t.ok?e.closest(".card").remove():Promise.reject(t)})).catch((function(e){return alert(e.status)}))}(r,e._id)}))}var o=t.querySelector(".card__like-button");return o.addEventListener("click",(function(){!function(e,t,n){e.classList.contains("card__like-button_is-active")?function(e,t,n){_.fetchDelete("cards/likes/".concat(t._id)).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(t){l(n,t.likes.length),e.classList.toggle("card__like-button_is-active")})).catch((function(e){return alert(e.status)}))}(e,t,n):function(e,t,n){_.fetchPut("cards/likes/".concat(t._id)).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(t){l(n,t.likes.length),e.classList.toggle("card__like-button_is-active")})).catch((function(e){return alert(e.status)}))}(e,t,n)}(o,e,t)})),e.likes.some((function(e){return e._id===v._id}))&&o.classList.add("card__like-button_is-active"),l(t,e.likes.length),n.addEventListener("click",(function(){x.src=e.link,x.alt=e.name,A.textContent=e.name,u(h)})),t}function d(e){E.style.backgroundImage="url('".concat(e,"')")}function p(e){q.textContent=e.name,L.textContent=e.about,d(e.avatar)}var v={group:"frontend-st-cohort-201",id:"d0a034b7-f6ee-48c6-afc4-643e67b38ae4"},_=new(function(){return e=function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseurl="".concat(t,"/v1/").concat(n,"/"),this.auth=r,this.baseHeader={authorization:r}},(t=[{key:"_getJsonHeaders",value:function(){return Object.assign({"Content-Type":"application/json"},this.baseHeader)}},{key:"fetchGet",value:function(e){var t=this.baseurl+e;return fetch(t,{method:"GET",headers:this.baseHeader})}},{key:"fetchPost",value:function(e,t){var n=this.baseurl+e,r=this._getJsonHeaders();return fetch(n,{method:"POST",headers:r,body:JSON.stringify(t)})}},{key:"fetchPatch",value:function(e,t){var n=this.baseurl+e,r=this._getJsonHeaders();return fetch(n,{method:"PATCH",headers:r,body:JSON.stringify(t)})}},{key:"fetchDelete",value:function(e){var t=this.baseurl+e;return fetch(t,{method:"DELETE",headers:this.baseHeader})}},{key:"fetchPut",value:function(e){var t=this.baseurl+e;return fetch(t,{method:"PUT",headers:this.baseHeader})}}])&&r(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}())("https://nomoreparties.co",v.group,v.id),y=document.querySelector(".popup_type_edit"),m=document.querySelector(".popup_type_new-card"),h=document.querySelector(".popup_type_image"),b=document.querySelector(".popup_type_new-avatar");[b].forEach((function(e){e.classList.add("popup_is-animated"),e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup")&&i(e)}))}));var S=y.querySelector(".popup__form"),k=m.querySelector(".popup__form"),q=document.querySelector(".profile__title"),L=document.querySelector(".profile__description"),E=document.querySelector(".profile__image");E.addEventListener("click",(function(){u(b)}));var g=b.querySelector("#avatar-url");b.querySelector(".popup__close").addEventListener("click",(function(){i(b),g.value=""})),b.addEventListener("submit",(function(e){e.preventDefault(),function(){a(b);var e=g.value;_.fetchPatch("users/me/avatar",{avatar:e}).then((function(t){return t.ok?(d(e),i(b)):Promise.reject(t)})).catch((function(e){return alert("Ошибка при изменении аватара ".concat(e.status))})).finally((function(){return s(b)}))}()}));var C=y.querySelector(".popup__input_type_name"),P=y.querySelector(".popup__input_type_description");C.value=q.textContent,P.value=L.textContent;var j=m.querySelector(".popup__input_type_card-name"),w=m.querySelector(".popup__input_type_url"),x=h.querySelector(".popup__image"),A=h.querySelector(".popup__caption");S.addEventListener("submit",(function(e){e.preventDefault(),function(e,t,n){a(n),_.fetchPatch("users/me",{name:e,about:t}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){p(e),i(n)})).catch((function(e){return alert(e.status)})).finally((function(){return s(n)})),i(n)}(C.value,P.value,y)})),k.addEventListener("submit",(function(e){var t,n,r;e.preventDefault(),t={name:j.value,link:w.value},r=O,a(n=m),_.fetchPost("cards",t).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){r.insertBefore(f(e),O.querySelector(".card")),i(n)})).catch((function(e){return alert(e.status)})).finally((function(){return s(n)}))})),document.querySelector(".profile__edit-button").addEventListener("click",(function(){C.value=q.textContent,P.value=L.textContent,u(y)})),y.querySelector(".popup__close").addEventListener("click",(function(){i(y),C.value="",P.value=""})),document.querySelector(".profile__add-button").addEventListener("click",(function(){j.value="",w.value="",u(m)})),m.querySelector(".popup__close").addEventListener("click",(function(){i(m),j.value="",w.value=""})),h.querySelector(".popup__close").addEventListener("click",(function(){i(h)}));var H={formSelector:".popup__form",inputSelector:".popup__input",buttonSelector:".popup__button",buttonOffClass:"popup__button-disabled",invalidInputClass:"popup__input_type_error",errorActiveClass:"popup__input-error_active"};!function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(n){return function(t,n){var r=Array.from(t.querySelectorAll(n.inputSelector)),o=t.querySelector(n.buttonSelector);r.forEach((function(c){return c.addEventListener("input",(function(u){e(r,o,n),function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.validity.valid?function(e,t,n){e.classList.remove(n.invalidInputClass),t.classList.remove(n.errorActiveClass),t.textContent=""}(t,r,n):function(e,t,n){e.classList.add(n.invalidInputClass),t.classList.add(n.errorActiveClass),t.textContent=e.validationMessage}(t,r,n)}(t,c,n)}))})),e(r,o,n)}(n,t)}))}(H),_.fetchGet("users/me").then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){p(e),v._id=e._id})).catch((function(e){return alert(e.status)}));var O=document.querySelector(".places__list");!function(e,t){e.fetchGet("cards").then((function(e){return e.ok?e.json():Promise.reject(e.statusCode)})).then((function(e){!function(e,t){e.forEach((function(e){var n=f(e);t.append(n)}))}(e,t)})).catch((function(e){return alert(e.status)}))}(_,O)})();