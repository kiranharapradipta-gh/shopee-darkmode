# 🌙 Shopee Dark Mode

A simple client-side dark mode for [Shopee Indonesia](https://shopee.co.id/).

This project adds a dark theme to Shopee without installing a browser extension. It works directly from the browser's Developer Tools Console.

> **No installation required. No browser extension required.**

---

## ✨ Features

* 🌙 Dark mode for Shopee
* ☀️ Light / Dark mode toggle
* 💾 Remembers your selected mode
* 🎨 Dark UI for backgrounds, cards, buttons, inputs, menus, and more
* 🔄 CSS is loaded directly from this repository
* ⚡ Lightweight and easy to use
* 🔒 Client-side only — does not modify your Shopee account or server data

---

## 🚀 How to Use

### 1. Open Shopee

Go to:

**https://shopee.co.id/**

Make sure you are on the Shopee website before continuing.

---

### 2. Open Developer Tools

Press:

```text
Ctrl + Shift + I
```

Or press:

```text
F12
```

Then open the **Console** tab.

---

### 3. Allow pasting

Modern browsers may prevent pasting code directly into the DevTools Console.

If you see a warning like:

```text
Warning: Don’t paste code into the DevTools Console...
```

type:

```text
allow pasting
```

and press **Enter**.

> Only do this when you understand and trust the code you are about to paste.

---

### 4. Paste the script

Copy the following code and paste it into the Console:

```javascript
fetch("https://raw.githubusercontent.com/kiranharapradipta-gh/shopee-darkmode/main/shopee-dark.js")
  .then(response => response.text())
  .then(code => eval(code));
```

Press **Enter**.

---

### 5. Done 🎉

Shopee Dark Mode will be activated.

A **Dark Mode / Light Mode** toggle will appear in the bottom-right corner of the page.

Click the toggle whenever you want to switch between:

* 🌙 Dark Mode
* ☀️ Light Mode

Your selected mode is saved in the browser's `localStorage`, so refreshing the page will keep your preference.

---

## 📸 Example

After running the script, the Shopee interface will be converted into a dark theme.

The theme covers common Shopee UI elements such as:

* Page backgrounds
* Header
* Search bar
* Product cards
* Product grids
* Categories
* Dropdowns
* Popups
* Buttons
* Tables
* Forms
* Inputs
* Checkboxes
* Navigation elements
* Other white UI surfaces

---

## 🧩 How It Works

The project consists of two main files:

```text
shopee-darkmode/
├── README.md
├── shopee-dark.css
├── shopee-dark.js
└── note.txt
```

### `shopee-dark.js`

The JavaScript file:

1. Loads the CSS from GitHub.
2. Injects the CSS into the current Shopee page.
3. Creates the Dark Mode toggle.
4. Saves the selected mode to `localStorage`.
5. Restores the previous mode when the script is run again.

The script currently loads:

```text
https://raw.githubusercontent.com/kiranharapradipta-gh/shopee-darkmode/main/shopee-dark.css
```

### `shopee-dark.css`

Contains the actual dark mode styles for Shopee.

It overrides common Shopee surfaces, including backgrounds, cards, buttons, inputs, menus, popups, text, borders, and other UI elements.

---

## 🔄 After a Shopee Update

Shopee frequently changes its website structure and CSS classes.

Because this project overrides Shopee's existing styles, some elements may become white or look incorrect after Shopee updates its website.

If that happens, the CSS may need to be updated.

You can report an issue or contribute a fix through GitHub.

---

## ⚠️ Important Notes

This project is a **client-side visual modification only**.

It:

* Does not modify Shopee's servers.
* Does not modify your Shopee account.
* Does not access your password.
* Does not change orders or transactions.
* Does not install anything on your computer.
* Only injects CSS/JavaScript into the current browser page.

The script is loaded from this GitHub repository.

Always review code before pasting JavaScript into your browser's Developer Tools Console.

---

## 🛠️ Supported Browser

The project is intended for modern browsers with Developer Tools support, such as:

* Google Chrome
* Microsoft Edge
* Brave
* Other Chromium-based browsers

Firefox may also work, although the DevTools Console behavior may differ.

---

## 📌 Quick Start

If you already know what you're doing:

**Shopee → `Ctrl + Shift + I` → Console → type `allow pasting` → paste:**

```javascript
fetch("https://raw.githubusercontent.com/kiranharapradipta-gh/shopee-darkmode/main/shopee-dark.js")
  .then(response => response.text())
  .then(code => eval(code));
```

**Press Enter → Done. 🌙**

---

## 📄 License

This project is provided for personal use and experimentation.

Shopee is a trademark of its respective owner. This project is not affiliated with, endorsed by, or sponsored by Shopee.
