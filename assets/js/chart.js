import Chart from 'chart.js/auto';
import {valueOrDefault} from 'chart.js/helpers';

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
        //變更圖片說明
        //source: https://blog.csdn.net/github_26672553/article/details/50747543
        console.log($(this).find('img').attr('alt'));
        $('figcaption').text($(this).find('img').attr('alt'));
        return false;
    });
});

function rand(max) {
    return Math.floor(Math.random() * max);
  }
  

//製作圖表
// utils不支援純JS，目前只支援react和vue
const labels = ['January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'];

const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

const ctx = document.getElementById('myChart');
  
var chart = new Chart(ctx, {
                type: 'line',
                data:{
                    labels: labels,
                    datasets: [{
                    label: '股價',
                    data: [65, 59, 80, 81, 56, 55, 40, 55, 60, 90, 100, 98],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                    }]
                },
                
            });

const ctx2 = document.getElementById('myChart2');
  
var chart2 = new Chart(ctx2, {
                type: 'line',
                data:{
                    labels: labels,
                    datasets: [{
                    label: '股價',
                    data: [65, 59, 80, 81, 56, 55, 40, 55, 60, 90, 100, 98],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                    }]
                },
                
            });
const ctx3 = document.getElementById('myChart3');
  
var chart3 = new Chart(ctx3, {
                type: 'line',
                data:{
                    labels: labels,
                    datasets: [{
                    label: '股價',
                    data: [65, 59, 80, 81, 56, 55, 40, 55, 60, 90, 100, 98],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                    }]
                },
                
            });
const ctx4 = document.getElementById('myChart4');
  
var chart4 = new Chart(ctx4, {
                type: 'line',
                data:{
                    labels: labels,
                    datasets: [{
                    label: '股價',
                    data: [65, 59, 80, 81, 56, 55, 40, 55, 60, 90, 100, 98],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                    }]
                },
                
            });