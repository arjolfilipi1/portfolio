function isElementNearCenter(el, tolerance = 50) {
    const rect = el.getBoundingClientRect();
    const elCenterY = rect.top + rect.height / 2;

    const viewportCenterY = window.innerHeight / 2;

    const distanceY = Math.abs(elCenterY - viewportCenterY);

    return  distanceY <= tolerance;
}

function updateFocus() {
    document.querySelectorAll('.card').forEach(card => {
        if (isElementNearCenter(card, 50)) {
            card.classList.remove('retreat');
            card.classList.remove('col-md-8');
            card.classList.add('col-md-10');
            card.classList.add('card-container');
        } else {
            card.classList.add('retreat');
            card.classList.add('col-md-8');
            card.classList.remove('col-md-10');
            card.classList.remove('card-container');
        }
    });
}

// Check on scroll and resize
window.addEventListener('scroll', updateFocus);
window.addEventListener('resize', updateFocus);

// Initial check
updateFocus();

