const priNav = document.querySelector(".primary-navigation")
const mToggle = document.querySelector(".mobile-nav-btn")

mToggle.addEventListener("click", function () {
  const visible = priNav.getAttribute("data-visible")

  if (visible === "true") {
    priNav.setAttribute("data-visible", "false")
    mToggle.setAttribute("aria-expanded", "false")
  } else if (visible === "false") {
    priNav.setAttribute("data-visible", "true")
    mToggle.setAttribute("aria-expanded", "true")
  }
})
