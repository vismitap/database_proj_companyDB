const closeBtns = document.querySelectorAll(".close");
closeBtns.forEach(close => {
    const id = close.id.split('')[1];
    console.log(close.id, `#m${id}`)
    close.addEventListener('click', () => {
        console.log("clicked");
        document.querySelector(`#m${id}`).style.display = 'none';
    });
})


document.getElementById("emp").addEventListener("click", function () {
    document.querySelector('#m1').style.display = 'flex';
});


document.getElementById("proj").addEventListener("click", function () {
    document.querySelector('#m2').style.display = 'flex';
});


document.getElementById("dept").addEventListener("click", function () {
    document.querySelector('#m3').style.display = 'flex';
});


document.getElementById("man").addEventListener("click", function () {
    document.querySelector('#m4').style.display = 'flex';
});


document.getElementById("dep").addEventListener("click", function () {
    document.querySelector('#m5').style.display = 'flex';
});