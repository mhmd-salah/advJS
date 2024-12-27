// تعريف مكون تسجيل الدخول كمكون ويب (Web Component)
class LoginWidget extends HTMLElement {
  constructor() {
    super();

    // 1. إنشاء الـ Shadow DOM
    this.attachShadow({ mode: "open" });

    // 2. محتوى المكون
    this.shadowRoot.innerHTML = `
      <style>
        .login-container {
          width: 300px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          font-family: Arial, sans-serif;
        }

        .login-container h2 {
          text-align: center;
          color: var(--title-color, #333);
        }

        .login-container input {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .login-container button {
          width: 100%;
          padding: 10px;
          background-color: var(--button-color, #007BFF);
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .login-container button:hover {
          background-color: var(--button-hover-color, #0056b3);
        }
      </style>

      <div class="login-container">
        <h2>${this.getAttribute("title") || "Login"}</h2>
        <input type="text" placeholder="Username" id="username" />
        <input type="password" placeholder="Password" id="password" />
        <button id="login-btn">Log In</button>
      </div>
    `;
  }

  connectedCallback() {
    // إضافة وظيفة للزر
    this.shadowRoot
      .querySelector("#login-btn")
      .addEventListener("click", () => {
        const username = this.shadowRoot.querySelector("#username").value;
        const password = this.shadowRoot.querySelector("#password").value;

        // إرسال بيانات كحدث مخصص
        this.dispatchEvent(
          new CustomEvent("log  in", {
            detail: { username, password },
          })
        );
      });
  }

  disconnectedCallback() {
    // تنظيف المستمع عند إزالة المكون
    this.shadowRoot.querySelector("#login-btn").removeEventListener("click");
  }
}

// تسجيل المكون في المتصفح
customElements.define("login-widget", LoginWidget);
