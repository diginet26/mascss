(function () {
    "use strict";

    var breakpoint = 650;
    var maxTopics = 6;
    var recentRoot = null;
    var recentObserver = null;
    var infoRowPlaceholder = null;

    function isMobileWidth() {
        return window.matchMedia("(max-width: " + breakpoint + "px)").matches;
    }

    function shouldMoveInfoRow() {
        return isMobileWidth() ||
            window.matchMedia("(pointer: coarse) and (hover: none)").matches;
    }

    /*
     * En móvil web, saca las tarjetas de información de #rift-current
     * para que ocupen una fila completa de #rift-board-body.
     * En escritorio se restauran exactamente en su posición original.
     */
    function syncInfoRowLayout() {
        var infoRow = document.getElementById("rift-info-row");
        var boardBody = document.getElementById("rift-board-body");
        var current = document.getElementById("rift-current");
        if (!infoRow || !boardBody || !current) return;

        if (!infoRowPlaceholder && infoRow.parentNode === current) {
            infoRowPlaceholder = document.createComment("DR info row original position");
            current.insertBefore(infoRowPlaceholder, infoRow);
        }

        if (shouldMoveInfoRow()) {
            if (infoRow.parentNode !== boardBody) {
                var news = document.getElementById("rift-news");
                boardBody.insertBefore(infoRow, news && news.parentNode === boardBody ? news : null);
            }
            infoRow.classList.add("dr-info-row-mobile-full");
        } else {
            if (infoRowPlaceholder && infoRowPlaceholder.parentNode) {
                infoRowPlaceholder.parentNode.insertBefore(infoRow, infoRowPlaceholder.nextSibling);
                infoRowPlaceholder.parentNode.removeChild(infoRowPlaceholder);
                infoRowPlaceholder = null;
            }
            infoRow.classList.remove("dr-info-row-mobile-full");
        }
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
        syncInfoRowLayout();
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

    window.addEventListener("resize", function () {
        syncInfoRowLayout();
        normalizeRecentTopics();
    }, { passive: true });
})();