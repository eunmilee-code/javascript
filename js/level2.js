const starButton = document.getElementById('startbtn');
const stopButton = document.getElementById('stopbtn');
const box = document.getElementById('box');

function showPoint(event) {
    const x = event.clientX;
    const y = event.clientY;
    document.getElementById("demo").innerHTML = "X좌표 : " + x +"&nbsp;&nbsp;" + "y좌표 : " + y ;
}

starButton.addEventListener('click', function() {
    //document.addEventListener('mousemove', showPoint);
    box.addEventListener('mousemove', showPoint);
});

stopButton.addEventListener('click', function() {
    //document.removeEventListener('mousemove', showPoint);
    box.removeEventListener('mousemove', showPoint);
});
