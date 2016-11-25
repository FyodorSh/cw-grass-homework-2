/**
 * Created by Fyodor on 22.11.2016.
 */


/* 1.
 1. Разобрать функции обхода матриц. (map, ever, some и т.п.).*/
function hw_1() {

    var arr = [5, 2, -3, 0, 3, -2, 10, 0, 6, -4, -8, 7];

    //forEach
    var sum_forEach = 0;
    arr.forEach(function (item) {
        sum_forEach += item;
    });
    console.log(sum_forEach);

    //filter
    var negArr = arr.filter(function (item) {
        return item < 0;
    });
    console.log(negArr);

    //map
    var absArr = arr.map(function (item) {
        if (item < 0) {
            return item * -1;
        } else {
            return item;
        }
    });
    console.log(absArr);

    //every/some
    function isZero(number) {
        return (number === 0);
    }

    console.log({
        "every": arr.every(isZero),
        "some": arr.some(isZero)
    });

    //reduce
    var obj = arr.reduce(function (sum, current, i) {
        sum["item" + i] = current;
        return sum;
    }, {});

    console.log(obj);
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
    var matrixA = [60, 80, 100];
    var matrixB = [40, 60, 80, 60];
    var matrixC = [[1, 3, 4, 2], [4, 5, 8, 3], [2, 3, 6, 7]];

    var matrixRes = new Array();
    ;
    for (var row = 0; row < matrixA.length; row++) {
        matrixRes.push([]);
        for (var col = 0; col < matrixB.length; col++) {
            matrixRes[row].push(0);
        }
    }
    var result = {};
    var sum = 0;
    var step = 1;

    var col = 0;
    for (var row = 0; row < matrixA.length; row++) {
        // for(var col = 0; col < matrixB.length; col++){
        while (col < matrixB.length) {

            if (matrixB[col] === 0) col++;
            //        if (matrixB[col] === 0) continue;
            if (matrixA[row] === 0) break;


            var minimum = Math.min(matrixA[row], matrixB[col]);

            matrixA[row] -= minimum;
            matrixB[col] -= minimum;

            sum += matrixC[row][col] * minimum;

            matrixRes[row][col] = minimum;

            result["Step " + step] = {
                "row": row,
                "col": col,
                "matrixValue": matrixC[row][col],
                "stepSum": matrixC[row][col] * minimum
            };
            step++;
        }
    }

    result["Sum"] = sum;
    result["matrixRes"] = matrixRes;
    console.log(result);
}

function load_hw() {
    console.log("--hw1--");
    hw_1();

    console.log("--hw2--");
    hw_2();

    console.log("--hw3--");
    hw_3();
}