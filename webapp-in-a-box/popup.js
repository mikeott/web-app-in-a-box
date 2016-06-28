// Read the value
var url = localStorage.url;
var alturl = chrome.extension.getURL("no-url.html");
var element = document.getElementById("websiteURL");

if (url === undefined || url === null || url === "") {
    element.src = alturl;
} else {
    element.src = url;
};

// Open links in new tab (mostly for no-url.html)
document.addEventListener('DOMContentLoaded', function () {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            var location = ln.href;
            ln.onclick = function () {
                chrome.tabs.create({active: true, url: location});
            };
        })();
    }
});
