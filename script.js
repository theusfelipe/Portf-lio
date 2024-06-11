const title = document.getElementById('animated-parag');
const text = title.textContent;
title.innerHTML = '';

text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.animationDelay = `${index * 0.2}s`;
    span.classList.add('fade');
    title.appendChild(span);
});