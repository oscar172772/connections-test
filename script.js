const buttonContainer = document.getElementById('button-container');
const buttons = [];

// Populate button grid
for (let i = 0; i < 16; i++) {
    const button = document.createElement('button');
    button.className = 'button';
    buttons.push({element: button, selected: false});
    buttonContainer.appendChild(button);
    button.addEventListener('click', () => toggleButton(i));
}

// Counter
let count = 0;
const countDisplay = document.createElement('h2');
countDisplay.textContent = `Counter: ${count}`;
countDisplay.className = 'counter';
document.body.appendChild(countDisplay);

function toggleButton(index) {
    const button = buttons[index];
    button.selected = !button.selected;
    button.element.classList.toggle('selected', button.selected);

    if (!button.selected) {
        updateCounter();
    }
}

function updateCounter() {
    count+=1
    countDisplay.textContent = `Counter: ${count}`;
}
