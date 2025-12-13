// ページ全体（画像やスタイル含む）の読み込み完了を待つ
window.addEventListener('load', () => {
    // 読み込み完了後、少しだけ遅延させてスムーズに表示開始
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});
