/*
[x] Рекурсивная реализация определителя
[x] Обработка определителей 4 и большего рода
[x] Ввод значений более эстетичным методом
[] Попытаться получить доступ к ячейкам через ID
[x] Обновлять инфорацию через метод update()
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
            low_matrix[j] = low_matrix[j].slice(0, i).concat(low_matrix[j].slice(i + 1))
        }
        result += matrix[0][i] * determinant(low_matrix) * (-1) ** i;
    }
    return result
}


function update() {
    data = []
    cellTag.forEach(el => {
        data.push(Number(el.querySelector('input').value))
    });
    let matr = [data.slice(0, 3), data.slice(3, 6), data.slice(6, 9)]
    let det = determinant(matr)
    let ans = document.body.querySelector('.answer')
    ans.innerHTML = ' = ' + det
    return
}


const cellTag = document.querySelectorAll('div.cell')
cellTag.forEach(element => {
    element.addEventListener('change', function() { update() })
});