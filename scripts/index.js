// @todo: Темплейт карточки
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

function openModal(popup) {
  popup.classList.add("popup_is-opened");
}

function closeModal(popup) {
  popup.classList.remove("popup_is-opened");
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
// @todo: DOM узлы
const profilePopup = document.querySelector(".popup_type_edit");
const cardPopup = document.querySelector(".popup_type_new-card");
const imagePopup = document.querySelector(".popup_type_image");

// profilePopup.classList.add("popup_is-animated");
// cardPopup.classList.add("popup_is-animated");
// imagePopup.classList.add("popup_is-animated");

[profilePopup, cardPopup, imagePopup].forEach((el) =>
  el.classList.add("popup_is-animated")
);

const profileForm = profilePopup.querySelector(".popup__form");
const cardForm = cardPopup.querySelector(".popup__form");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const nameInput = profilePopup.querySelector(".popup__input_type_name");
const jobInput = profilePopup.querySelector(".popup__input_type_description");

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
  nameInput.value = "";
  jobInput.value = "";
  closeModal(profilePopup);
});

document.querySelector(".profile__add-button").addEventListener("click", () => {
  openModal(cardPopup);
  cardNameInput.value = "";
  cardUrl.value = "";
});

cardPopup.querySelector(".popup__close").addEventListener("click", () => {
  nameInput.value = "";
  jobInput.value = "";
  closeModal(cardPopup);
});

imagePopup.querySelector(".popup__close").addEventListener("click", () => {
  closeModal(imagePopup);
});

//Карточки

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
const list = document.querySelector(".places__list");
initialCards.forEach((card) => list.append(createCard(card)));
