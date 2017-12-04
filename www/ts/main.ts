(() => {

	document.querySelector("section.navigation span").addEventListener("click", () => {
		if (document.querySelector("section.navigation span").getAttribute("class") == "inactive") {
			document.querySelector("section.navigation span").setAttribute("class", "active");
			document.querySelector("section.navigation div").setAttribute("class", "active");
		} else {
			document.querySelector("section.navigation span").setAttribute("class", "inactive");
			document.querySelector("section.navigation div").setAttribute("class", "inactive");
		}
	});


})();