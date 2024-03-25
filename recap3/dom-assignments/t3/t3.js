'use script';

document.addEventListener('DOMContentLoaded', function () {
    const target = document.getElementById('target');

    const info = `${navigator.appVersion}`;
    const infoElement = document.createElement('p');
    infoElement.textContent = `Browser: ${info}`;
    target.appendChild(infoElement);

    const osInfo = navigator.platform;
    const osInfoElement = document.createElement('p');
    osInfoElement.innerHTML = `Operating System: ${osInfo}`;
    target.appendChild(osInfoElement);

    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const availableWidth = window.screen.availWidth;
    const availableHeight = window.screen.availHeight;

    const screenInfo = document.createElement('p');
    screenInfo.innerHTML = `Screen width: ${screenWidth} <br> Screen height: ${screenHeight}`;
    target.appendChild(screenInfo);

    const availableScreenInfo = document.createElement('p');
    availableScreenInfo.innerHTML = `Available screen width: ${availableWidth} <br> Available screen height: ${availableHeight}`;
    target.appendChild(availableScreenInfo);

    const currentDate = new Date().toLocaleDateString('fi-FI', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const currentTime = new Date().toLocaleTimeString('fi-FI', {
        hour: '2-digit',
        minute: '2-digit'
    });

    const dateAndTime = document.createElement('p');
    dateAndTime.innerHTML = `Date: ${currentDate} <br> Time: ${currentTime}`;
    target.appendChild(dateAndTime);
});