const cellTag = document.querySelectorAll('div.cell')

let data = []

cellTag.forEach(element => {
    element.addEventListener('click', function() {
        element.querySelector('p').innerText = prompt("Введите число:  ")
        data = []
        cellTag.forEach(el => {
            data.push(Number(el.querySelector('p').innerText))
        });
        
        let det = data[0] * (data[4] * data[8] - data[5] * data[7]) -  
                    data[1] * (data[3] * data[8] - data[5] * data[6]) + 
                    data[2] * (data[3] * data[7] - data[4] * data[6]);

        let ans = document.body.querySelector('.answer')
        ans.innerHTML = ' = ' + det
    })
});