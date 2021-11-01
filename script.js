/*
[x] Рекурсивная реализация определителя
[x] Обработка определителей 4 и большего рода
[x] Ввод значений более эстетичным методом
[x] Реализовать преобразование массива в матрицу
[x] Обновлять инфорацию через метод update()
[-] Добавление новых ячеек по нажатии на клавишу
[] Сделать нормальную структуру проекта
[] Попытаться получить доступ к ячейкам через ID
[] Общий дизайн
*/


function determinant(matrix) {
    if (matrix.length == 2) {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
    }
    let result = 0
    for(let i = 0; i < matrix.length; i++) {
        let low_matrix = matrix.slice(1)
        for(let j = 0; j < low_matrix.length; j++) {
            let left = low_matrix[j].slice(0, i)
            let right = low_matrix[j].slice(i + 1)
            low_matrix[j] = left.concat(right)
        }
        result += matrix[0][i] * determinant(low_matrix) * (-1) ** i;
    }
    return result
}


function array_to_matrix(arr) {
    let matrix = []
    let size = Math.floor(Math.sqrt(arr.length))
    for(let i = 0; i < size; i++) {
        matrix.push(arr.slice(i * size, (i + 1) * size))
    }
    return matrix
}


function update() {
    let data = []
    document.querySelectorAll('div.cell').forEach(el => {
        data.push(el.querySelector('input').value)
    });
    let ans = document.body.querySelector('.answer')
    ans.innerHTML = ' = ' + determinant(array_to_matrix(data))
    return
}

update()
// cell_tag.forEach(element => {
//     element.addEventListener('change', function() { 
//         update() 
//     })
// });
const add_level_tag = document.querySelector('div.add-level-button')
add_level_tag.addEventListener('click', function() {
    document.querySelector('div.matrix').style.width += '420px'
    for(let i = 0; i < 7; i++) {
        let cell = document.createElement('div')
        cell.classList.add('cell')
        let value = document.createElement('input')
        value.classList.add('value')
        value.value = 0
        cell.appendChild(value)
        matrix.appendChild(cell)
    }
})