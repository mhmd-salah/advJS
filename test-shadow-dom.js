class CustomCard extends HTMLElement {
  // تحديد الخصائص التي نريد مراقبتها
  static get observedAttributes() {
    return ["title", "theme", "subtitle"];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
            <style>
                .card {
                    border: 1px solid #ccc;
                    padding: 15px;
                    margin: 10px;
                    border-radius: 4px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                .card.dark {
                    background: #333;
                    color: white;
                }
                .card-title {
                    margin: 0 0 10px 0;
                    font-size: 1.5em;
                }
                .card-subtitle {
                    color: #666;
                    margin: 0 0 15px 0;
                }
                .dark .card-subtitle {
                    color: #aaa;
                }
                .card-content {
                    padding: 10px 0;
                }
            </style>
            <div class="card">
                <h2 class="card-title"></h2>
                <div class="card-subtitle"></div>
                <div class="card-content">
                    <slot></slot>
                </div>
            </div>
        `;
  }

  // يتم استدعاؤها عند تغيير أي خاصية
  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.shadowRoot) return;

    const card = this.shadowRoot.querySelector(".card");

    switch (name) {
      case "title":
        this.shadowRoot.querySelector(".card-title").textContent = newValue;
        break;
      case "subtitle":
        this.shadowRoot.querySelector(".card-subtitle").textContent = newValue;
        break;
      case "theme":
        if (newValue === "dark") {
          card.classList.add("dark");
        } else {
          card.classList.remove("dark");
        }
        break;
    }
  }

  // getter و setter للخصائص
  get title() {
    return this.getAttribute("title");
  }

  set title(value) {
    this.setAttribute("title", value);
  }

  get subtitle() {
    return this.getAttribute("subtitle");
  }

  set subtitle(value) {
    this.setAttribute("subtitle", value);
  }

  get theme() {
    return this.getAttribute("theme");
  }

  set theme(value) {
    this.setAttribute("theme", value);
  }
}

customElements.define("custom-card", CustomCard);
