
document.getElementById('bgRed').addEventListener('click', function() {
    changeBackgroundColor('red');
});
document.getElementById('bgGreen').addEventListener('click', function() {
    changeBackgroundColor('green');
});
document.getElementById('bgBlue').addEventListener('click', function() {
    changeBackgroundColor('blue');
});

document.getElementById('textRed').addEventListener('click', function() {
    changeTextColor('red');
});
document.getElementById('textGreen').addEventListener('click', function() {
    changeTextColor('green');
});
document.getElementById('textBlue').addEventListener('click', function() {
    changeTextColor('blue');
});

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function changeTextColor(color) {
    document.body.style.color = color;
}
