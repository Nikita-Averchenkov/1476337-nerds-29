// Модальное окно
var link = document.querySelector(".button-contact");
var popup = document.querySelector(".modal-content");
var closelink = document.querySelector(".close-bnt");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
});

closelink.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
});

// ввод
var submitBtn = document.querySelector(".button-send");
var customerName = popup.querySelector(".customer-name");
var customerEmail = popup.querySelector(".customer-email");
var customerMessage = popup.querySelector(".customer-text")

submitBtn.addEventListener("click", function (evt) {
  if (!customerName.value || !customerEmail.value || !customerMessage.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});
