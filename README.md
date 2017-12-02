
# web-app-in-a-box

This Chrome Extension will let you run any web app or web site in a Chrome pop-out box. Just enter a URL, and you're done!

<h2>How to test in Chrome</h2>

1. Go to Chrome settings -> More Tools -> Extensions
2. Enable the <strong>Developer Mode</strong> checkbox.
3. Hit the <strong>Load Unpacked Extension</strong> button.
4. Browse to where you have this repo stored on your local machine.

If you want to publish your own version on the official Chrome Web Store, see the <a href="https://developer.chrome.com/webstore/publish">official docs</a>.

**WordPress users:** If you're having difficulty getting your website to work with this, add this to your theme functions.php file: 

```
    remove_action( 'login_init', 'send_frame_options_header' );
    remove_action( 'admin_init', 'send_frame_options_header' );
```

<img src="http://michaelott.id.au/_misc/web-app-in-a-box.gif" />
