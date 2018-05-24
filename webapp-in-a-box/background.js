var cm = chrome.contextMenus, om = chrome.runtime.onMessage, t = chrome.tabs;

var trackURL;
var lastURL;
om.addListener(function (req, sender, sendResponse) {
    switch (req.cmd) {
        case "newPage":
            if (!sender.tab) { //If sender is not tab ( = from extension popup)
                trackURL = req.url;
            }
            break;
        case "iframeLoaded": //Iframe loaded message received, so set the URL,
            //.. next time it will use this var instead of localStorage
            lastURL = trackURL;
            break;
    }
});
