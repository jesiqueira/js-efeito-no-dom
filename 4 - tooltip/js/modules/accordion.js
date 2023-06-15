export default function initAccordion() {
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );

  function activeAccordion(event) {
    // console.log(event.currentTarget);
    // console.log(this.nextElementSibling);
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  }

  accordionList.forEach((item) => {
    item.addEventListener("click", activeAccordion);
  });
}
