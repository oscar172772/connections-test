const countDisplay = document.getElementById('count');
const incrementButton = document.getElementById('incrementButton');

let count = 0;

incrementButton.addEventListener('click', function() {
    count++;
    countDisplay.textContent = count;
});
