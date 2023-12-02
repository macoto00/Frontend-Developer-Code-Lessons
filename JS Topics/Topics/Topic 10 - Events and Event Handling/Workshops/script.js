// Task 1
const task1Button = document.getElementById('task1Button');
task1Button.addEventListener('click', () => {
    task1Button.textContent = 'You clicked!';
});


// Task 2
const task2Paragraph = document.getElementById('task2Paragraph');
const task2Parent = document.querySelector("#task2")
task2Paragraph.addEventListener('mouseenter', () => {
    task2Parent.style.background = '#2980b9';
    task2Paragraph.style.color = "white";
});
task2Paragraph.addEventListener('mouseleave', () => {
    task2Parent.style.background = 'white';
    task2Paragraph.style.color = "black";
});


// Task 3
const task3Image = document.getElementById('task3Image');
let isLarge = false;
task3Image.addEventListener('click', () => {
    if (isLarge) {
        task3Image.style.transform = 'scale(1)';
    } else {
        task3Image.style.transform = 'scale(1.5)';
    }
    isLarge = !isLarge;
});


// Task 4
const task4Input = document.getElementById('task4Input');
const task4Button = document.getElementById('task4Button');
task4Button.addEventListener('click', () => {
    const inputValue = task4Input.value;
    alert(inputValue);
});


// Task 5
const task5List = document.getElementById('task5List');
task5List.addEventListener('click', (event) => {
    if (event.target.tagName.toLowerCase() === 'li') {
        event.target.remove();
    }
});

