function setLanguage(language) {
    if (language === 'en') {
        // Redirect to English content page
        window.location.href = 'english.html';
    } else if (language === 'ar') {
        // Redirect to Arabic content page
        window.location.href = 'arabic.html';
    }
}