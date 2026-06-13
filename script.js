(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');
    if (lang === 'en') {
        document.body.classList.add('lang-en');
    }
})();
