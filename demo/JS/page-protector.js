
(function () {

    const MIN_WIDTH = screen.width - 100;
    const MIN_HEIGHT = screen.height - 100;

    function blockPage() {
        document.body.innerHTML = "";
        document.body.style.background = "#b04d4d";
        document.body.style.minHeight = "100vh";
        document.body.style.margin = "0";

        document.body.style.display = "grid";
        document.body.style.placeItems = "center";

        document.body.style.color = "#000000";
        document.body.style.fontSize = "58px";

        document.body.style.fontWeight = "bold";
        document.body.style.fontFamily = "Arial, sans-serif";
        document.body.style.textAlign = "center";

        document.body.innerHTML = "⚠️ Access Denied";
    }

    function detectDevTools() {
        const widthDiff = window.outerWidth - window.innerWidth;
        const heightDiff = window.outerHeight - window.innerHeight;

        if (widthDiff > 160 || heightDiff > 160) {
            blockPage();
        }

        if (window.innerWidth < MIN_WIDTH || window.innerHeight < MIN_HEIGHT) {
            blockPage();
        }
    }

    // Disable right click
    document.addEventListener("contextmenu", e => e.preventDefault());

    // Disable common inspect shortcuts
    document.addEventListener("keydown", function (e) {
        if (
            e.key === "F12" ||
            (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) ||
            (e.ctrlKey && e.key.toUpperCase() === "U")
        ) {
            e.preventDefault();
            blockPage();
        }
    });

    // Check repeatedly
    setInterval(detectDevTools, 100);

})();

















// (function () {

//     const MIN_WIDTH = screen.width - 120;
//     const MIN_HEIGHT = screen.height - 120;
//     let triggered = false;

//     function blockPage() {
//         if (triggered) return;
//         triggered = true;

//         document.body.innerHTML = "";
//         document.body.style.background = "#352043";
//         document.body.style.minHeight = "100vh";
//         document.body.style.margin = "0";

//         document.body.style.display = "grid";
//         document.body.style.placeItems = "center";

//         document.body.style.color = "#ff0000";
//         document.body.style.fontSize = "58px";
//         document.body.style.fontWeight = "bold";
//         document.body.style.fontFamily = "Arial, sans-serif";
//         document.body.style.textAlign = "center";

//         document.body.innerHTML = "⚠️ Access Denied";

//     }

//     function detectDevTools() {
//         const widthDiff = window.outerWidth - window.innerWidth;
//         const heightDiff = window.outerHeight - window.innerHeight;

//         if (widthDiff > 150 || heightDiff > 150) {
//             blockPage();
//         }

//         if (window.innerWidth < MIN_WIDTH || window.innerHeight < MIN_HEIGHT) {
//             blockPage();
//         }
//     }

//     // Console detection trick
//     const element = new Image();
//     Object.defineProperty(element, 'id', {
//         get: function () {
//             blockPage();
//         }
//     });
//     setInterval(function () {
//         console.log(element);
//         console.clear();
//     }, 1000);

//     // Disable right click
//     document.addEventListener("contextmenu", e => e.preventDefault());

//     // Disable drag
//     document.addEventListener("dragstart", e => e.preventDefault());

//     // Disable text selection
//     document.addEventListener("selectstart", e => e.preventDefault());

//     // Disable inspect shortcuts
//     document.addEventListener("keydown", function (e) {
//         if (
//             e.key === "F12" ||
//             (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) ||
//             (e.ctrlKey && e.key.toUpperCase() === "U")
//         ) {
//             e.preventDefault();
//             blockPage();
//         }
//     });

//     // Detect tab switching
//     document.addEventListener("visibilitychange", function () {
//         if (document.hidden) {
//             blockPage();
//         }
//     });

//     setInterval(detectDevTools, 1000);

// })();



