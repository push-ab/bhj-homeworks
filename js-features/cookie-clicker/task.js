
const cookie = document.getElementById('cookie');
const clickCounter = document.getElementById('clicker__counter');
const clickSpeed = document.createElement('div'); 


cookie.insertAdjacentElement('afterend', clickSpeed);
clickSpeed.textContent = 'Скорость клика: 0 кликов/сек';
clickSpeed.style.marginTop = '10px';


let lastClickTime = null;
let clickSpeedValue = 0;


cookie.onclick = function() {

    const clicks = parseInt(clickCounter.textContent) + 1;
    clickCounter.textContent = clicks;
    

    if (cookie.width === 200) {
        cookie.width = 180;
    } else {
        cookie.width = 200;
    }
    

    const now = new Date();
    if (lastClickTime) {
        const timeDiff = (now - lastClickTime) / 1000;
        clickSpeedValue = 1 / timeDiff;
        clickSpeed.textContent = `Скорость клика: ${clickSpeedValue.toFixed(2)} кликов/сек`;
    }
    lastClickTime = now;
};