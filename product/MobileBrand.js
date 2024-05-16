var apple_btn = document.getElementById("apple_btn");
var samsung_btn = document.getElementById("samsung_btn"); // Corrected ID

var apple_sec = document.getElementById("apple_sec");
var samsung_sec = document.getElementById("samsung_sec");

apple_btn.addEventListener('click', () => {
    apple_sec.style.display = 'block';
    samsung_sec.style.display = 'none';
});

samsung_btn.addEventListener('click', () => {
    apple_sec.style.display = 'none';
    samsung_sec.style.display = 'block';
});