export default function tooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });

  function onMouseOver(event) {
    // console.log(event);
    const tooltipBox = criarTooltipBox(this);
    tooltipBox.style.top = event.pageY + "px";
    tooltipBox.style.left = event.pageX + "px";
    OnMouseMove.tooltipBox = tooltipBox;

    onMouseLeave.tooltipBox = tooltipBox;
    this.addEventListener("mouseleave", onMouseLeave);
    this.addEventListener("mousemove", OnMouseMove);
  }

  const onMouseLeave = {
    tooltipBox: "",
    handleEvent() {
      this.tooltipBox.remove();
    },
  };

  const OnMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + "px";
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    },
  };

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("area-label");
    // console.log(text);
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
    // console.log(tooltipBox);
  }
}
