window.document.getElementById("header");
// is the same as 
document.getElementById("header");


// WINDOW SIZE
window.innerHeight;
window.innerWidth;


window.open();             //           open a new window
window.close();            //           close the current window
window.moveTo();           //           move the current window
window.resizeTo();         //           resize the current window


// WINDOW SCREEN ----------------------------------------------------
// The window.screen object contains information about the user's screen.

// Properties
screen.width;         screen.height;      screen.availWidth; 
screen.availHeight;   screen.colorDepth;  screen.pixelDepth; 


// WINDOW LOCATION --------------------------------------------------
window.location.href;                // returns the href (URL) of the current page
window.location.hostname;            // returns the domain name of the web host
window.location.pathname;            // returns the path and filename of the current page
window.location.protocol;            // returns the web protocol used (http: or https:)
window.location.assign();            // loads a new document


// WINDOW HISTORY ---------------------------------------------------
window.history;
// <input type="button" value="Forward" onclick="window.history.back();">

window.history.back();
window.history.forward();

// WINDOW NAVIGATOR
navigator.appCodeName;  // Mozilla is the codeName for chrome, firefox, ir, safari and opera
navigator.appName;      // navigator.appName is Netscape
navigator.appVersion;   // 5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36
navigator.cookieEnabled;
navigator.javaEnabled();
navigator.language;     // en-US
navigator.onLine;
navigator.platform;     // Linux x86_64
navigator.product;      // Gecko