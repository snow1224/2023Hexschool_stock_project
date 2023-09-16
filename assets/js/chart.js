// 這裡是圖片切換，參考網址:https://codepen.io/kevin-chang-the-sasster/pen/WNGZpLx
// 1. 這個功能主要是 “點擊” 小圖後大圖片要置換，所以我們將動作下在目標物的 “click” 動作上
// 2. click 事件觸發後，我們先取得目標物屬性 “href” 的值
// 3. 之後再將取得的值 “$imgSrc” 代入大圖中，替換掉大圖 “src” 的網址
// 4. 完成後就能像範例圖一樣，做到點擊小圖替換大圖的效果了
// 5. return false 因為使用連結標籤的關係，所以加上這句來中斷連結本身的動作
$(function(){
    $('#img-switch .small-img a').click(function(e) {
        var $imgSrc = $(this).attr('href');
        $('#img-switch .big-img img').attr('src',$imgSrc);
        return false;
    });
})