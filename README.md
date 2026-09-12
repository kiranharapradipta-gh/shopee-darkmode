# Shopee Dark Mode

Custom dark-mode override for `shopee.co.id`.

## Install

1. Create a GitHub repository named `shopee-darkmode`.
2. Upload:
   - `shopee-dark.css`
   - `shopee-dark.js`
3. Edit `shopee-dark.js`.
4. Replace:

```text
YOUR_GITHUB_USERNAME
```

with your GitHub username.

## Run from Shopee DevTools

Open `https://shopee.co.id`, press F12, open Console, then run:

```js
fetch("https://raw.githubusercontent.com/YOUR_GITHUB_USERNAME/shopee-darkmode/main/shopee-dark.js")
  .then(r => r.text())
  .then(eval)
```

The floating toggle appears in the bottom-right corner.

The setting is stored in `localStorage`, so refreshes keep the last state.

## Notes

This is a client-side CSS/JS override only. It does not modify Shopee's server or account data.
