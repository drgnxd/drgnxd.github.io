// ★ここをローカルのファイルパスに変更★
const imageUrl = "images/profile.png";

// JavaScriptで画像の読み込みを開始
const profileImg = new Image();
profileImg.src = imageUrl;

// 画像の読み込みが完了した時に実行される処理
profileImg.onload = function() {
    // 読み込みが完了したら、bodyタグに 'loaded' というクラスを追加する
    document.body.classList.add('loaded');
};

// 万が一、画像の読み込みに失敗した場合でも表示は行う
profileImg.onerror = function() {
    document.body.classList.add('loaded');
};