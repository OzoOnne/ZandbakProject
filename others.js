function deleteDiv(element) {
    element.remove();
}

function changeBackgroundColor() {
    const selectedColor = document.getElementById('colorPicker').value;

    document.getElementById('background').style.backgroundColor = selectedColor;
    document.body.style.backgroundColor = selectedColor;
}

function toggleSection() {
    var section = document.getElementById('tab');
    section.style.display = (section.style.display === 'none') ? 'block' : 'none';
}
