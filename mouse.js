const output = document.getElementById('output');
const box = document.getElementById('box');

box.addEventListener('mouseenter', function() {
    output.textContent = 'Mouse Enter';
    box.style.backgroundColor = '#e74c3c';
});

box.addEventListener('mouseleave', function() {
    output.textContent = 'Mouse Leave';
    box.style.backgroundColor = '#3498db';
});

box.addEventListener('mousedown', function() {
    output.textContent = 'Mouse Down';
});

box.addEventListener('mouseup', function() {
    output.textContent = 'Mouse Up';
});

box.addEventListener('click', function() {
    output.textContent = 'Mouse Click';
});

box.addEventListener('dblclick', function() {
    output.textContent = 'Double Click';
});
