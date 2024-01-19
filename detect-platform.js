// detect-platform.js
window.onload = function () {
    var isWindows = navigator.platform.toUpperCase().indexOf('WIN') >= 0;
    var isAndroid = navigator.userAgent.toLowerCase().indexOf('android') >= 0;

    if (isWindows) {
        // Apply specific styles or behaviors for Windows users
        document.body.style.background = '#f0f0f0';  // Change background color for Windows users
    }

    if (isAndroid) {
        // Apply specific styles or behaviors for Android users
    }
};
