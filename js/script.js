window.addEventListener("load", () => {
  const modal = document.querySelector("#modal");
  const modalBtn = document.querySelector(".modal-btn");
  modal.classList.add("active");
  modalBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });
});
