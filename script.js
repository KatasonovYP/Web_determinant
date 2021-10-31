/*

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


const cellTag = document.querySelectorAll('div.cell')

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

cellTag.forEach(element => {
    element.addEventListener('click', function() {
        element.querySelector('p').innerText = prompt("Введите число:  ")
        data = []
        cellTag.forEach(el => {
            data.push(Number(el.querySelector('p').innerText))
        });
        let matr = [data.slice(0, 3), data.slice(3, 6), data.slice(6, 9)]
        let det = determinant(matr)
        let ans = document.body.querySelector('.answer')
        ans.innerHTML = ' = ' + det
    })
});