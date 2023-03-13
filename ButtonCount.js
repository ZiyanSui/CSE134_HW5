class ButtonCount extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.count = 0;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `<button>Times Clicked: ${this.count}</button>`;
    this.shadowRoot.querySelector("button").addEventListener("click", () => {
      this.count++;
      this.render();
    });
  }
}

customElements.define("button-count", ButtonCount);
