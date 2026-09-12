(() => {
  const VERSION = "1.0.0";
  const CSS_URL =
    "https://raw.githubusercontent.com/kiranharapradipta-gh/shopee-darkmode/main/shopee-dark.css";

  const STYLE_ID = "shopee-darkmode-css";
  const TOGGLE_ID = "shopee-dark-toggle";
  const STORAGE_KEY = "shopee-darkmode-enabled";

  const loadCss = async () => {
    if (document.getElementById(STYLE_ID)) return;

    const response = await fetch(`${CSS_URL}?v=${VERSION}`, {
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(`CSS gagal dimuat: HTTP ${response.status}`);
    }

    const css = await response.text();
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = css;
    document.head.appendChild(style);
  };

  const setEnabled = (enabled) => {
    document.documentElement.toggleAttribute("data-shopee-dark", enabled);
    if (enabled) {
      document.documentElement.setAttribute("data-shopee-dark", "1");
    }

    localStorage.setItem(STORAGE_KEY, enabled ? "1" : "0");

    const button = document.getElementById(TOGGLE_ID);
    if (!button) return;

    button.querySelector(".sd-label").textContent =
      enabled ? "Dark Mode" : "Light Mode";

    button.querySelector(".sd-dot").title =
      enabled ? "Dark mode aktif" : "Dark mode nonaktif";
  };

  const createToggle = () => {
    let button = document.getElementById(TOGGLE_ID);
    if (button) return button;

    button = document.createElement("button");
    button.id = TOGGLE_ID;
    button.type = "button";
    button.setAttribute("aria-label", "Toggle Shopee dark mode");

    button.innerHTML = `
      <span class="sd-icon">🌙</span>
      <span class="sd-state">
        <span class="sd-label">Dark Mode</span>
        <span class="sd-dot"></span>
      </span>
    `;

    button.addEventListener("click", () => {
      const enabled =
        document.documentElement.getAttribute("data-shopee-dark") === "1";

      setEnabled(!enabled);
    });

    document.body.appendChild(button);
    return button;
  };

  const init = async () => {
    try {
      await loadCss();
      createToggle();

      const saved = localStorage.getItem(STORAGE_KEY);

      // Default ON the first time.
      setEnabled(saved === null ? true : saved === "1");

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
