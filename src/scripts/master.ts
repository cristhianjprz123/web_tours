//  for menu
const menu = document.querySelector(".menu") as HTMLElement;
const hamMenuIcon = document.querySelector(".ham-menu-icon") as HTMLElement;
let i = true;
hamMenuIcon.addEventListener("click", (e) => {
  const target = e.target as HTMLElement; // Explicitly type the event target as HTMLElement
  if (i) {
    menu.style.display = "flex";
    target.classList.remove("bi-list"); // Use the target variable to access classList
    target.classList.add("bi-x-lg");
    i = false;
  } else {
    target.classList.remove("bi-x-lg");
    target.classList.add("bi-list"); // Use the target variable to access classList
    menu.style.display = "none";
    i = true;
  }
});
// for select
