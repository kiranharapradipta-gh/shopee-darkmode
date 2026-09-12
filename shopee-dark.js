(() => {
  const VERSION = "1.0.0";
  const CSS_URL = "https://raw.githubusercontent.com/kiranharapradipta-gh/shopee-darkmode/main/shopee-dark.css";

  const STYLE_ID = "shopee-darkmode-by-kiran";
  const TOGGLE_ID = "shopee-dark-toggle";
  const STORAGE_KEY = "shopee-darkmode-enabled";

  let STYLE, TOGGLE, TOGGLE_STYLE

  const loadCss = async () => {
    if (document.getElementById(STYLE_ID)) return;

    const response = await fetch(`${CSS_URL}?v=${VERSION}`, {
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(`CSS gagal dimuat: HTTP ${response.status}`);
    }

    const css = await response.text();

    console.log('css', css)

    STYLE = document.createElement("style");
    STYLE.id = STYLE_ID;
    STYLE.textContent = css;
    document.head.appendChild(STYLE);
  };

  const createToggleStyle = () => {
    const ts = document.createElement('link')

    ts.id = 'shopee-darkmode-toggle-by-kiran'
    ts.href = 'https://raw.githubusercontent.com/kiranharapradipta-gh/shopee-darkmode/main/shopee-dark-toggle-style.css'
    
    document.head.appendChild(ts)
  }

  const createToggle = () => {
    TOGGLE = document.getElementById(TOGGLE_ID);
    if (TOGGLE) return TOGGLE;

    TOGGLE = document.createElement("button");
    TOGGLE.id = TOGGLE_ID;
    TOGGLE.type = "button";
    TOGGLE.setAttribute("aria-label", "Toggle Shopee dark mode");

    TOGGLE.innerHTML = `
      <span class="sd-icon">🌙</span>
      <span class="sd-state">
        <span class="sd-label">Dark Mode</span>
        <span class="sd-dot"></span>
      </span>
    `;

    TOGGLE.addEventListener("click", () => {
      const exists = document.getElementById(STYLE_ID)
      exists
      ? exists.remove()
      : document.head.appendChild(STYLE) 
    });

    document.body.appendChild(TOGGLE);
    return TOGGLE;
  };

  const init = async () => {
    try {
      await loadCss();
      createToggle();
      createToggleStyle();

      console.log(
        `%c Shopee Dark Mode v${VERSION} `,
        "background:#ee4d2d;color:white;padding:4px 8px;border-radius:4px;font-weight:700",
        "loaded"
      );
    } catch (error) {
      console.error("[Shopee Dark Mode]", error);
    }
  };

  init();
})();
