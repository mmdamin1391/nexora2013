
const languageBtn = document.getElementById("languageBtn");

let currentLanguage = "fa";

languageBtn.addEventListener("click", function () {

    currentLanguage =
        currentLanguage === "fa" ? "en" : "fa";

    document.documentElement.lang = currentLanguage;

    document.documentElement.dir =
        currentLanguage === "fa" ? "rtl" : "ltr";

    document.querySelectorAll("[data-fa]").forEach(function (element) {

        element.textContent =
            element.getAttribute("data-" + currentLanguage);

    });

    languageBtn.textContent =
        currentLanguage === "fa" ? "EN" : "FA";

});
