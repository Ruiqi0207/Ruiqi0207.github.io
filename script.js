(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');

    if (lang === 'en') {
        // 修改页面标题
        document.title = "Ruiqi · Personal Website";

        // 修改 header 里的文字
        const h1 = document.querySelector('h1');
        if (h1) h1.textContent = "Ruiqi · Ruiqi";
        
        const bio = document.querySelector('.bio');
        if (bio) bio.textContent = "A young programmer who loves coding | Independent Developer";

        // 修改四个卡片的文字
        const cards = document.querySelectorAll('.card');
        if (cards[0]) {
            cards[0].querySelector('.card-title').innerHTML = "⌨️ RQcmd <span class=\"badge\">CLI Tool</span>";
            cards[0].querySelector('.card-desc').innerText = "Powerful command-line toolset with custom commands and history.";
            cards[0].querySelector('.card-link').innerText = "Coming soon →";
        }
        if (cards[1]) {
            cards[1].querySelector('.card-title').innerHTML = "🧟 Zombie Siege <span class=\"badge\">FPS Game</span>";
            cards[1].querySelector('.card-desc').innerText = "Drag to aim, click to shoot. Features healing, invincibility, and missile skills.";
            cards[1].querySelector('.card-link').innerText = "Coming soon →";
        }
        if (cards[2]) {
            cards[2].querySelector('.card-title').innerHTML = "📖 Ruiqi Recite <span class=\"badge\">Education Tool</span>";
            cards[2].querySelector('.card-desc').innerText = "Smart memorization assistant for poems, classical texts, and English passages. (Testing)";
            cards[2].querySelector('.card-link').innerText = "Coming soon →";
        }
        if (cards[3]) {
            cards[3].querySelector('.card-title').innerHTML = "🛡️ Ruiqi Security Guard <span class=\"badge\">C++ Client</span>";
            cards[3].querySelector('.card-desc').innerText = "Terminal security tool providing system scanning, firewall management, and process monitoring.";
            cards[3].querySelector('.card-link').innerText = "Coming soon →";
        }

        // 修改页脚的版权文字
        const footerDiv = document.querySelector('.footer div:last-child');
        if (footerDiv) footerDiv.textContent = "© Ruiqi · Continuously Iterating";
    }
})();
