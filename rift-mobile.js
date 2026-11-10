(function () {
    "use strict";

    var breakpoint = 650;
    var maxTopics = 6;
    var recentRoot = null;
    var recentObserver = null;

    function isMobileWidth() {
        return window.matchMedia("(max-width: " + breakpoint + "px)").matches;
    }

    function restoreAllTopics() {
        if (!recentRoot) return;
        recentRoot.querySelectorAll(".rift-recent-item.dr-mobile-topic-hidden").forEach(function (item) {
            item.classList.remove("dr-mobile-topic-hidden");
        });
    }

    function normalizeRecentTopics() {
        recentRoot = document.getElementById("rift-recent-content");
        if (!recentRoot) return;

        if (!isMobileWidth()) {
            restoreAllTopics();
            return;
        }

        /* Desmonta el marquee de Foroactivo y recupera su contenido original sin clones. */
        recentRoot.querySelectorAll(".marquee").forEach(function (marquee) {
            if (marquee.getAttribute("data-dr-mobile-marquee") === "destroyed") return;
            if (!marquee.querySelector(".js-marquee-wrapper")) return;
            if (!window.jQuery || !jQuery.fn || typeof jQuery.fn.marquee !== "function") return;

            marquee.setAttribute("data-dr-mobile-marquee", "destroyed");
            try {
                jQuery(marquee).marquee("destroy");
            } catch (error) {
                marquee.removeAttribute("data-dr-mobile-marquee");
            }
        });

        /* Tras desmontar el marquee, deja únicamente los seis temas más recientes. */
        var topics = recentRoot.querySelectorAll(".rift-recent-item");
        topics.forEach(function (topic, index) {
            topic.classList.toggle("dr-mobile-topic-hidden", index >= maxTopics);
        });
    }

    function init() {
        recentRoot = document.getElementById("rift-recent-content");
        if (!recentRoot) return;

        normalizeRecentTopics();

        if (!recentObserver) {
            recentObserver = new MutationObserver(function () {
                normalizeRecentTopics();
            });
            recentObserver.observe(recentRoot, {
                childList: true,
                subtree: true
            });
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
        init();
    }

    window.addEventListener("resize", normalizeRecentTopics, { passive: true });
})();