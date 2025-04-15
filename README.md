# 🖼️ Viewport Screenshot

**Viewport Screenshot** is a Chrome extension that allows users to quickly capture a screenshot of the current browser viewport. It includes options to download the full-size image or a resized thumbnail version for easy sharing or previewing.

## 🚀 Features

- 📸 Capture a screenshot of the visible area (viewport) of any webpage.
- 💾 Download the screenshot directly from the popup.
- 🖼️ Generate and download a thumbnail version of the screenshot.
- 🖱️ Context menu option for quick access from right-click menu.
- 📦 Lightweight and easy to use.

## 🧩 Installation

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select the project folder.
5. The **Viewport Screenshot** extension should now appear in your Chrome extensions list.

## 📂 Project Structure

```
viewport-screenshot/
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── background.js
├── constants.js
├── manifest.json
├── popup.html
└── popup.js
```

## 🛠️ Usage

### Option 1: From the Popup
1. Click the extension icon in the Chrome toolbar.
2. The extension will immediately take a screenshot of the current tab's viewport.
3. You can:
   - **Download** the full screenshot.
   - **Download Thumbnail** – a smaller version of the screenshot.

### Option 2: From the Context Menu
1. Right-click anywhere on a webpage.
2. Select **"Viewport Screenshot"** from the context menu.
3. A screenshot will be taken and downloaded automatically.

## 📥 Permissions

This extension requires the following permissions:

- `activeTab` – to capture the current tab.
- `tabs` – to interact with the browser's tabs.
- `downloads` – to save screenshots.
- `contextMenus` – to add the right-click menu item.
- `scripting` – required for manifest v3 features.
- `<all_urls>` – to access any tab's content when capturing screenshots.


## 📃 License

This project is open source and available under the [MIT License](LICENSE).
