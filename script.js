const cellTag = document.querySelectorAll('div.cell')
cellTag.forEach(element => {
    element.addEventListener('click', function() {
        element.querySelector('p').innerText = prompt("Введите число:  ")
    })
});