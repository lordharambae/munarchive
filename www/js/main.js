(function () {
    document.querySelector("section.navigation span").addEventListener("click", function () {
        if (document.querySelector("section.navigation span").getAttribute("class") == "inactive") {
            document.querySelector("section.navigation span").setAttribute("class", "active");
            document.querySelector("section.navigation div").setAttribute("class", "active");
        }
        else {
            document.querySelector("section.navigation span").setAttribute("class", "inactive");
            document.querySelector("section.navigation div").setAttribute("class", "inactive");
        }
    });
})();
//# sourceMappingURL=main.js.map