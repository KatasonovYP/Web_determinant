/*
[x] Рекурсивная реализация определителя
[x] Обработка определителей 4 и большего рода
[x] Ввод значений более эстетичным методом
[x] Реализовать преобразование массива в матрицу
[x] Обновлять инфорацию через метод update()
[x] Добавление новых ячеек по нажатии на клавишу
[x] Сделать нормальную структуру проекта
[x] Сделать div строки в matrix
[x] динамическое добавление ячеек в структуру
[x] Кнопка удаления ячеек
[x] Ограничитель уровней определителя
[] Счётчик уровней для пользователя
[] Зафиксировать кнопки и счётчик
[] Дебаг анимации
[] Рандомное заполнение
[] Попытаться получить доступ к ячейкам через ID
[] Общий дизайн
*/
let count_of_levels = 1;

function determinant(matrix) {
    if (matrix.length == 2) {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }
    let result = 0;
    for (let i = 0; i < matrix.length; i++) {
        let low_matrix = matrix.slice(1);
        for (let j = 0; j < low_matrix.length; j++) {
            let left = low_matrix[j].slice(0, i);
            let right = low_matrix[j].slice(i + 1);
            low_matrix[j] = left.concat(right);
        }
        result += matrix[0][i] * determinant(low_matrix) * (-1) ** i;
    }
    return result;
}

function update() {
    let data = [];
    document.querySelectorAll('div.row').forEach((row) => {
        let tmp = [];
        row.querySelectorAll('input').forEach((col) => {
            tmp.push(Number(col.value));
        });
        data.push(tmp);
    });
    let ans = document.body.querySelector('.answer');
    ans.innerHTML = ' = ' + determinant(data);
    return;
}

function add_level() {
    if (count_of_levels < 8) {
        let matrix = document.querySelectorAll('div.row');
        count_of_levels++;
        document.querySelector('div.matrix').style.width =
            count_of_levels + '00px';
        document.querySelector('div.matrix').style.height =
            count_of_levels + '00px';
        matrix.forEach((element) => {
            let col = document.querySelector('input.col').cloneNode(true);
            col.value = 0;
            element.append(col);
        });
        let row = document.querySelector('div.row').cloneNode(true);
        row.querySelectorAll('input').forEach((element) => {
            element.value = 0;
        });
        document.querySelector('div.matrix').append(row);
        update();
    }
    return;
}

function del_level() {
    if (count_of_levels > 1) {
        let matrix = document.querySelector('div.matrix');
        matrix.removeChild(matrix.lastElementChild);
        let row_tag = document.querySelectorAll('div.row');
        count_of_levels--;
        document.querySelector('div.matrix').style.width =
            count_of_levels + '00px';
        document.querySelector('div.matrix').style.height =
            count_of_levels + '00px';
        row_tag.forEach((element) => {
            element.removeChild(element.lastElementChild);
        });
        update();
    }
    return;
}

update();
