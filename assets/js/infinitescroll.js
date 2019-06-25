/**
 * Infinite Scroll
 */

(function(window, document) {
    // next link element

    var nextElement = document.querySelector("link[rel=next]");
    if (!nextElement) return;

    // post feed element
    var feedElement = document.querySelector(".post-feed");
    if (!feedElement) return;

    var loading = false;

    function onPageLoad() {
        if (this.status === 404) {
            document
                .getElementById("readMoreBtn")
                .removeEventListener("click", onUpdate);
            return;
        }
        // append contents
        var postElements = this.response.querySelectorAll(".post-card");
        postElements.forEach(function(item) {
            feedElement.appendChild(item);
        });

        // set next link
        var resNextElement = this.response.querySelector("link[rel=next]");
        if (resNextElement) {
            nextElement.href = resNextElement.href;
        } else {
            document
                .getElementById("readMoreBtn")
                .removeEventListener("click", onUpdate);
        }

        // sync status
        loading = false;
    }

    function onUpdate() {
        // return if already loading
        if (loading) return;

        loading = true;

        var xhr = new window.XMLHttpRequest();
        xhr.responseType = "document";

        xhr.addEventListener("load", onPageLoad);

        xhr.open("GET", nextElement.href);
        xhr.send(null);
    }

    document
        .getElementById("readMoreBtn")
        .addEventListener("click", onUpdate, { passive: true });
})(window, document);
