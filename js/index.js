/**
 * Created by Fyodor on 22.11.2016.
 */


/* 1.
 1. Разобрать функции обхода матриц. (map, ever, some и т.п.).*/
function hw_1() {
    //filter
    //map
    //every/some
    //reduce
}

/* 2.
 2. Сгенерировать массив случайных чисел типа integer, размером ‎1 000 000. Отсортироать его по возрастанию и по убыванию.
 Найти сумму елементов. Вывести результат в консоль( 3 массива, сумма, время работы циклов сортировки и генерации).*/
function hw_2() {
    // генерация
    var rnd_arr = [];

    var StartTime = new Date() * 1000;
    for (var i = 0; i < 1000000; i++) {
        rnd_arr.push(Math.floor((Math.random() * 10000) + 1));
    }
    var EndTime = new Date() * 1000;

    var GenResult = EndTime - StartTime;

    // расчет суммы
    var sum_result = rnd_arr.reduce(function (sum, current) {
        return sum + current;
    });

    // сортировка по возрастанию
    var sort_asc_arr = rnd_arr.slice();
    StartTime = new Date() * 1000;
    sort_asc_arr.sort(function (a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    });
    EndTime = new Date() * 1000;
    var SortAscResult = EndTime - StartTime;

    // сортировка по убыванию
    var sort_desc_arr = rnd_arr.slice();
    StartTime = new Date() * 1000;
    sort_desc_arr.sort(function (a, b) {
        if (a > b) return -1;
        if (a < b) return 1;
    });
    EndTime = new Date() * 1000;
    var SortDescResult = EndTime - StartTime;

    //вывод
    console.log({
            "Array_Random": rnd_arr,
            "Array_Sort_Asc": sort_asc_arr,
            "Array_Sort_Desc": sort_desc_arr,
            "Sum": sum_result,
            "Result_Gen": GenResult,
            "Result_SortAsc": SortAscResult,
            "Result_SortDesc": SortDescResult
        }
    );

}

/* 3.
 3. На скрине дано 3 матрици. А - матрица рядов, Б матрица столбов, С матрица опорного плана( квадратная матрица).
 Решить транспортную задачу на основе этих матриц методом Северо- Западного угла.*/
function hw_3() {
    var matrixC = [[1, 3, 4, 2], [4, 5, 8, 3], [2, 3, 6, 7]];
    var matrixA = [60, 80, 100];
    var matrixB = [40, 60, 80, 60];

   // console.log(matrixC);
}

function load_hw() {
    hw_1();
    hw_2();
    hw_3();
}