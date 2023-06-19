import outsideclick from "./outsideclick.js";
export default function initMenuMolibe() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  const eventos = ["click", "touchstart"];

  if (menuButton) {
    function openMenu(event) {
      // console.log("me clicou");
      menuList.classList.add("active");
      menuButton.classList.add("active");
      outsideclick(menuList, eventos, () => {
        menuList.classList.remove("active");
        menuButton.classList.remove("active");
      });
    }

    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    });
  }
}
