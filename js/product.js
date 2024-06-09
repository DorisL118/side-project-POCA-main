const animateIcon = (event) => {
    const cartIcon = document.getElementById('cartIcon');
    const flyIcon = document.createElement('div');
    flyIcon.classList.add('fly-icon');
    document.body.appendChild(flyIcon);

    // 確保按鈕位置的計算基於視口
    const btnRect = event.target.getBoundingClientRect();
    flyIcon.style.left = `${btnRect.left + window.scrollX + btnRect.width / 2}px`;
    flyIcon.style.top = `${btnRect.top + window.scrollY + btnRect.height / 2}px`;

    // 強制重繪以應用初始樣式
    flyIcon.offsetHeight;

    // 確保購物車圖標位置的計算基於視口
    const cartRect = cartIcon.getBoundingClientRect();
    flyIcon.style.transform = `translate(${cartRect.left - btnRect.left}px, ${cartRect.top - btnRect.top}px)`;
    flyIcon.style.opacity = '0';

    flyIcon.addEventListener('transitionend', () => {
        flyIcon.remove();
    });
};
