function startResize(e, divId) {
    e.preventDefault();
    if (e.button !== 2) {
        return;
    }

    const element = document.getElementById(divId);
    const aspectRatio = element.getAttribute('data-aspect-ratio').split('/').map(Number);

    const isCorner = checkIsCorner(e, element);

    if (!isCorner) {
        return;
    }

    function handleMouseMove(e) {
        const newWidth = e.clientX - element.getBoundingClientRect().left;
        const newHeight = newWidth * (aspectRatio[1] / aspectRatio[0]);

        element.style.width = `${newWidth}px`;
        element.style.height = `${newHeight}px`;
    }

    function stopResize() {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', stopResize);
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', stopResize);
}

function checkIsCorner(e, element) {
    const rect = element.getBoundingClientRect();
    const cornerSize = 20;

    const isInTopLeft = e.clientX < rect.left + cornerSize && e.clientY < rect.top + cornerSize;
    const isInTopRight = e.clientX > rect.right - cornerSize && e.clientY < rect.top + cornerSize;
    const isInBottomLeft = e.clientX < rect.left + cornerSize && e.clientY > rect.bottom - cornerSize;
    const isInBottomRight = e.clientX > rect.right - cornerSize && e.clientY > rect.bottom - cornerSize;

    return isInTopLeft || isInTopRight || isInBottomLeft || isInBottomRight;
}