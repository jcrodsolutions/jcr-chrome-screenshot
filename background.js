import { DEFAULT_FILENAME } from "./constants.js";

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "viewportScreenshot",
        title: "Viewport Screenshot",
        contexts: ["all"] // "all" means it appears anywhere you right-click
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "viewportScreenshot") {
        chrome.tabs.captureVisibleTab(tab.windowId, { format: "png" }, (dataUrl) => {
            // Save or show the screenshot. Here's a quick download example:
            chrome.downloads.download({
                url: dataUrl,
                filename: DEFAULT_FILENAME,
                saveAs: true
            });
        });
    }
});
