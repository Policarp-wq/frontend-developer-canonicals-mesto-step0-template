import "../pages/index.css";

import { initialCards } from "./cards";
import {
  openModal as openModalRaw,
  closeModal as closeModalRaw,
} from "./modal";
import { enableValidation, invokeValidation } from "./validate";

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    closeModal(openedPopup);
  }
}

function openModal(popup) {
  Array.from(popup.querySelectorAll(validationSettings.formSelector)).forEach(
    (form) => invokeValidation(form, validationSettings)
  );

  document.addEventListener("keydown", closeByEsc);
  openModalRaw(popup);
}

function closeModal(popup) {
  document.removeEventListener("keydown", closeByEsc);
  closeModalRaw(popup);
}

function createCard(card) {
  const template = document
    .querySelector("#card-template")
    .content.querySelector(".card")
    .cloneNode(true);

  const img = template.querySelector(".card__image");
  img.src = card.link;
  img.alt = card.name;
  template.querySelector(".card__title").textContent = card.name;

  const likeBtn = template.querySelector(".card__like-button");

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("card__like-button_is-active");
  });

  const deleteBtn = template.querySelector(".card__delete-button");

  deleteBtn.addEventListener("click", () => {
    deleteBtn.closest(".card").remove();
  });

  const imgContainer = template.querySelector(".card__image");

  imgContainer.addEventListener("click", () => {
    popImage.src = card.link;
    popImage.alt = card.name;
    popCaption.textContent = card.name;
    openModal(imagePopup);
  });

  return template;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(profilePopup);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  let card = {
    name: cardNameInput.value,
    link: cardUrl.value,
  };
  list.insertBefore(createCard(card), list.querySelector(".card"));
  closeModal(cardPopup);
}
//https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg
const profilePopup = document.querySelector(".popup_type_edit");
const cardPopup = document.querySelector(".popup_type_new-card");
const imagePopup = document.querySelector(".popup_type_image");

imagePopup.closest(".popup");

[profilePopup, cardPopup, imagePopup].forEach((el) => {
  el.classList.add("popup_is-animated");
  el.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup")) closeModal(el);
  });
});

const profileForm = profilePopup.querySelector(".popup__form");
const cardForm = cardPopup.querySelector(".popup__form");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const nameInput = profilePopup.querySelector(".popup__input_type_name");
const jobInput = profilePopup.querySelector(".popup__input_type_description");

nameInput.value = profileTitle.textContent;
jobInput.value = profileDescription.textContent;

const cardNameInput = cardPopup.querySelector(".popup__input_type_card-name");
const cardUrl = cardPopup.querySelector(".popup__input_type_url");

const popImage = imagePopup.querySelector(".popup__image");
const popCaption = imagePopup.querySelector(".popup__caption");

profileForm.addEventListener("submit", handleProfileFormSubmit);
cardForm.addEventListener("submit", handleCardFormSubmit);

document
  .querySelector(".profile__edit-button")
  .addEventListener("click", () => {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;

    openModal(profilePopup);
  });

profilePopup.querySelector(".popup__close").addEventListener("click", () => {
  closeModal(profilePopup);
  nameInput.value = "";
  jobInput.value = "";
});

document.querySelector(".profile__add-button").addEventListener("click", () => {
  cardNameInput.value = "";
  cardUrl.value = "";
  openModal(cardPopup);
});

cardPopup.querySelector(".popup__close").addEventListener("click", () => {
  closeModal(cardPopup);
  cardNameInput.value = "";
  cardUrl.value = "";
});

imagePopup.querySelector(".popup__close").addEventListener("click", () => {
  closeModal(imagePopup);
});

const list = document.querySelector(".places__list");
initialCards.forEach((card) => list.append(createCard(card)));

const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  buttonSelector: ".popup__button",
  buttonOffClass: "popup__button-disabled",
  invalidInputClass: "popup__input_type_error",
  errorActiveClass: "popup__input-error_active",
};

enableValidation(validationSettings);
