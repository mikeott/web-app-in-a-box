//Send page URL to the background.js, it will save the URL if this request sent from popup
chrome.runtime.sendMessage({cmd: "newPage", url: window.location.href});
