class MyButton extends HTMLElement {
  constructor() {
    super();

    // add shadow dom to encapsulate the component
    const shadowRoot = this.attachShadow({ mode: "open" });

    // add content to the shadow dom and style it
    shadowRoot.innerHTML = `
      <style>
        button {
          background-color: teal;
          color: white;
          border: none;
          padding: 7px 13px;
          border-radius: 3px;
          font-size: 14px;
        }

        button:hover {
          background-color: darkcyan;
        }
        ::slotted(span) {
          margin-left: 5px;
          font-weight: bold;
          font-size: 10px
        }
      </style>

      <button>
      click
      <slot></slot>
      </button>
    `;
  }
}

// register the component in browser
customElements.define("my-button", MyButton);
