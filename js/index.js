const items = document.querySelectorAll('.article-item');

let index = 3;

function cycleItems() {
    index = index + 1 === items.length ? 0 : index + 1; // 遞增索引，循環顯示元素
    items[index].style.display = 'block'; // 顯示下一個元素

    
}
let slide = setSlide(cycleItems, 1000); // 3秒間隔，循環顯示元素

document.querySelector('.article-item').addEventListener('mouseover', function() {
    clearInterval(slide); // 停止循環
});

document.querySelector('.article-item').addEventListener('mouseout', function() {
    intervalId = setInterval(slide); // 重新啟動循環
});


