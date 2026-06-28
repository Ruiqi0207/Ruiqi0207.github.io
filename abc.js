(function() {
    // 获取当前访问的路径
    const currentPath = window.location.pathname;

    // 定义你的合法页面列表（不含扩展名）
    const validPages = [
        '/',           // 首页
        '/index.html',
        '/index_en.html',
        '/RQcmd',
        '/RQcmd/index.html',
        '/game/index.html',
        '/game',
        '/book/',
        '/book/index.html'
    ];

    // 检查当前路径是否在合法列表中
    const isValid = validPages.some(page => {
        if (page === '/') return currentPath === '/' || currentPath === '/index.html';
        return currentPath === page || currentPath === page + '/';
    });

    // 如果路径不合法，显示自定义 404 页面
    if (!isValid) {
        document.documentElement.innerHTML = `
        <!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>404 · 锐祺官网</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                body {
                    background: linear-gradient(135deg, #0a0f1c 0%, #0f172a 100%);
                    font-family: system-ui, -apple-system, sans-serif;
                    color: #e2e8f0;
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    padding: 2rem;
                }
                .container {
                    max-width: 500px;
                }
                .emoji {
                    font-size: 5rem;
                    margin-bottom: 1rem;
                }
                h1 {
                    font-size: 6rem;
                    font-weight: 700;
                    background: linear-gradient(135deg, #f97316, #ef4444);
                    background-clip: text;
                    -webkit-background-clip: text;
                    color: transparent;
                    margin-bottom: 0.5rem;
                }
                p {
                    font-size: 1.2rem;
                    color: #94a3b8;
                    margin-bottom: 2rem;
                }
                a {
                    display: inline-block;
                    background: #3b82f6;
                    color: white;
                    text-decoration: none;
                    padding: 0.6rem 1.5rem;
                    border-radius: 2rem;
                    transition: background 0.2s;
                }
                a:hover {
                    background: #2563eb;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="emoji">🐱</div>
                <h1>404</h1>
                <p>啊哦，页面被小猫弄丢啦！</p>
                <a href="/">← 回到主页</a>
            </div>
        </body>
        </html>
        `;
    }
})();
