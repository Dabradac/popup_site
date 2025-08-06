document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const openBtn = document.getElementById('openPopup');
    const closeBtn = document.querySelector('.close');

    // Открыть попап
    openBtn.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    // Закрыть попап
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Закрыть при клике вне попапа
    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});