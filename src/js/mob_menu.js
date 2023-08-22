import { openMenuBtn, closeMenuBtn, menu } from "./refs";

if (openMenuBtn) {
  openMenuBtn.addEventListener("click", toggleMenu);
};

if (closeMenuBtn) {
  closeMenuBtn.addEventListener("click", toggleMenu);
};

const isHiddenClass = 'is_hidden';

export function toggleMenu() {
  menu.classList.toggle(isHiddenClass);
};

window.addEventListener('resize', () => {
  const width = document.body.clientWidth;
  if (width >= 991) {
    menu.classList.add(isHiddenClass);
  };
});