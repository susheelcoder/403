
// ================================
// Haproid Frontend Access Control (Loop Fix)
// ================================

// Restricted paths
const restrictedPages = [
    "/101.html",
    "/demo/"

];

const currentPath = window.location.pathname;

// Check login
const isLoggedIn = localStorage.getItem("isAdmin") === "true";

// 🔥 Temporary bypass check
const allowOnce = sessionStorage.getItem("allowOnce") === "true";

// Check restricted match
const isRestricted = restrictedPages.some(path =>
    currentPath === path || currentPath.startsWith(path)
);

// If restricted and not logged in and not temporarily allowed
if (isRestricted && !isLoggedIn && !allowOnce) {

    // Save original path
    const redirectURL = "/403.html?from=" + encodeURIComponent(currentPath);
    window.location.replace(redirectURL);

} else {

    // If allowed once → remove flag after entry
    if (allowOnce) {
        sessionStorage.removeItem("allowOnce");
    }
}














