var sm         = chrome.runtime.sendMessage,
background = chrome.extension.getBackgroundPage();

// Read the value
var url     = background.lastURL || localStorage.url; //Use lastURL from background.js if exists.
var alturl  = chrome.extension.getURL("no-url.html");
var element = document.getElementById("websiteURL");

if (url === undefined || url === null || url === "") {
element.src = alturl;
} else {
element.src = url;
}

//Send a message to background.js on iframe loaded
element.onload = function () {
sm({cmd: "iframeLoaded"});
};

// Open links in new tab (mostly for no-url.html)
document.addEventListener('DOMContentLoaded', function () {
var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    (function () {
        var ln       = links[i];
        var location = ln.href;
        ln.onclick   = function () {
            chrome.tabs.create({active: true, url: location});
        };
    })();
}
});
