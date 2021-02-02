let out = '',
    str = '',
    str2 = '',
    out2 = '',
    out3 = '',
    count = 0,
    width = 64,
    height = 64;

// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(event) {
    return event.key;
}

document.querySelector('.i-1').addEventListener('keypress', (e) => {
    document.querySelector('.out-1').innerHTML = t1(e);
});

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(event) {
    return event.keyCode;
}

document.querySelector('.i-2').addEventListener('keypress', (e) => {
    document.querySelector('.out-2').innerHTML = t2(e);
});

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */



function t3(event) {
    if ((event.keyCode < 48) || (event.keyCode > 57)) return true;
    else return false;
}

document.querySelector('.i-3').addEventListener('keypress', (e) => {
    document.querySelector('.out-3').innerHTML = t3(e);
});


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */
function t4(event) {
    if ((event.keyCode >= 97) && (event.keyCode <= 122)) out += event.key;
    if ((event.keyCode >= 48) && (event.keyCode <= 57)) out += event.key;

    return out;
}

document.querySelector('.i-4').addEventListener('keypress', (e) => {
    document.querySelector('.out-4').innerHTML = t4(e);
});

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5(e) {
    str += e.key.toUpperCase();
    return str;
}

document.querySelector('.i-5').addEventListener('keypress', (e) => {
    document.querySelector('.out-5').innerHTML = t5(e);
});

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */


function t6(e) {
    if (e.keyCode >= 97) str2 += e.key;
    document.querySelector('.i-6').value = str2;
    return false;
}

document.querySelector('.i-6').onkeypress = t6;



// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7(e) {
    const a7 = [23, 43, 32, 22, 12, "hi", "how", "are", "you", 234, 322, 56];
    out2 += a7[Math.floor(Math.random() * a7.length)] + " ";
    return out2;
}

document.querySelector('.i-7').addEventListener('keypress', (e) => {
    document.querySelector('.out-7').innerHTML = t7(e);
});

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8(e) {
    let a8 = {
        i: '1',
        o: '0',
        l: '7',
    };
    if (a8[e.key] !== undefined) out3 += a8[e.key];
    else out3 += e.key;
    return out3;
}

document.querySelector('.i-8').addEventListener('keypress', (e) => {
    document.querySelector('.out-8').innerHTML = t8(e);
});


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

function t9(e) {
    if (e.keyCode === 40) count++;
    return count;
}

document.querySelector('.i-9').addEventListener('keyup', (e) => {
    document.querySelector('.out-9').innerHTML = t9(e);
});


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

function t10(e) {
    if (e.keyCode === 40 || e.keyCode === 38) {
        document.querySelector('.div-10 img').style.height = height + 'px';
        height++;
    }
    if (e.keyCode === 37 || e.keyCode === 39) {
        document.querySelector('.div-10 img').style.height = height + 'px';
        document.querySelector('.div-10 img').style.width = width + 'px';
        width++;
    }
}

document.querySelector('.i-10').onkeyup = (e) => {
    t10(e);
};

// Task 11 ============================================
/*  Проект. 
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/

function t11Down(e) {
    console.log(e);
    let caps = e.getModifierState('CapsLock');
    if (caps) document.querySelector('.keyboard__key[data="CapsLock"]').classList.add('active');

    document.querySelector('.keyboard__key[data="' + e.code + '"]').classList.add('active');
    if (e.code == "Tab") {
        e.preventDefault();
    }
}


function t11Up(e) {
    document.querySelectorAll('.keyboard__key').forEach((e) => {
        e.classList.remove('active');
    });

    let caps = e.getModifierState('CapsLock');
    if (caps) document.querySelector('.keyboard__key[data="CapsLock"]').classList.add('active');
}

document.querySelector('.i-11').addEventListener('keydown', (e) => {
    t11Down(e);
});
document.querySelector('.i-11').addEventListener('keyup', (e) => {
    t11Up(e);
});

