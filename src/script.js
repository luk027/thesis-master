function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

let year = document.getElementById("showYear");
const d = new Date();

let currentYear = d.getFullYear();
year.innerHTML = currentYear+" - ";


