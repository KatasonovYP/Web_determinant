let header = document.createElement('header')
let h1 = document.createElement('h1')
h1.innerText = 'Определитель матрицы'
header.appendChild(h1)
document.body.appendChild(header)


let matrix = document.createElement('div')
matrix.classList.add('matrix')
for(let i = 0; i < 9; i++) {
    let cell = document.createElement('div')
    cell.classList.add('cell')
    let value = document.createElement('p')
    value.classList.add('value')
    value.innerText = i
    cell.appendChild(value)
    matrix.appendChild(cell)
}
let content = document.createElement('div')
content.classList.add('content')
content.appendChild(matrix)

let answer = document.createElement('p')
answer.classList.add('answer')
answer.innerText = '= 0'
content.appendChild(answer)

document.body.appendChild(content)