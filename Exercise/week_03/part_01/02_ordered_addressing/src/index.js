const englishCode = "en-US";
const spanishCode = "es-ES";
const iranianCode = "fa-IR";
function getAboutUsLink(language) {
  //your code here...
  if (language === englishCode) return "/about-us";
  else if (language === spanishCode) return "/acerca-de";
  else if (language === iranianCode) return "/درباره-ما";
}
module.exports = getAboutUsLink;
// getAboutUsLink(englishCode);
