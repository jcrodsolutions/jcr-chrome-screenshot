import { DEFAULT_FILENAME, DEFAULT_THUMB_FILENAME, DEFAULT_THUMB_HEIGHT } from './constants.js';

let capturedDataUrl = '';

function captureScreenshot() {
    chrome.tabs.captureVisibleTab(null, { format: 'png' }, function (dataUrl) {
        capturedDataUrl = dataUrl;

        // Show preview
        const img = document.getElementById('screenshot');
        img.src = dataUrl;

        // Enable buttons
        document.getElementById('downloadBtn').disabled = false;
        document.getElementById('thumbBtn').disabled = false;
    });
}

// Trigger the screenshot as soon as the popup is loaded
document.addEventListener('DOMContentLoaded', () => {
    captureScreenshot();
  });

document.getElementById('screenshotBtn').addEventListener('click', () => {
    captureScreenshot();
});

document.getElementById('downloadBtn').addEventListener('click', () => {
    if (!capturedDataUrl) return;

    const link = document.createElement('a');
    link.href = capturedDataUrl;
    link.download = DEFAULT_FILENAME;
    link.click();
});

document.getElementById('thumbBtn').addEventListener('click', () => {
    if (!capturedDataUrl) return;

    const img = new Image();
    img.onload = function () {
        const aspectRatio = img.width / img.height;
        const canvas = document.createElement('canvas');
        canvas.width = DEFAULT_THUMB_HEIGHT * aspectRatio;
        canvas.height = DEFAULT_THUMB_HEIGHT;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const thumbDataUrl = canvas.toDataURL('image/png');

        const link = document.createElement('a');
        link.href = thumbDataUrl;
        link.download = DEFAULT_THUMB_FILENAME;
        link.click();
    };
    img.src = capturedDataUrl;
});

document.getElementById('closeBtn').addEventListener('click', () => {
    window.close();
});