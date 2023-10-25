document.getElementById('btn1').addEventListener('click', function() {
    hideAllContents();
    document.getElementById('content1').style.display = 'block';
});

document.getElementById('btn2').addEventListener('click', function() {
    hideAllContents();
    document.getElementById('content2').style.display = 'block';
});

document.getElementById('btn3').addEventListener('click', function() {
    hideAllContents();
    document.getElementById('content3').style.display = 'block';
});

function hideAllContents() {
    document.getElementById('content1').style.display = 'none';
    document.getElementById('content2').style.display = 'none';
    document.getElementById('content3').style.display = 'none';
}
