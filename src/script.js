function hexadeciToDeci(hex) {
    return parseInt(hex, 16);
}
const data2 = "00000002245992EE";
const decimalVal = hexadeciToDeci(data2);

const Data = decimalVal.toString().concat("31");
function encryptData(Data) {
    return btoa(Data);
}
function decryptData(encryptData) {
    return atob(encryptData);
}
const encryptedData = encryptData(Data);
const decryptedData = decryptData(encryptedData);
const waLink = `https://wa.me/${decryptedData}`;



const contactBtn = document.getElementById('contact-btn');
contactBtn.addEventListener('click', function () {
    window.location.href = waLink;
});



let year = document.getElementById("showYear");
const date = new Date();
let currentYear = date.getFullYear();
year.innerHTML = currentYear + " - ";



