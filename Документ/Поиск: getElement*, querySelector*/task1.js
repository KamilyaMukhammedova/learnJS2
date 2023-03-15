// 1. Таблицу с id="age-table"
const table = document.getElementById('age-table');

// 2. Все элементы label внутри этой таблицы (их три).
const labels = table.querySelectorAll('label');

// 3. Первый td в этой таблице (со словом «Age»).
const td = table.querySelector('td');

// 4. Форму form с именем name="search".
const form = document.querySelector('form[name="search"]');

// 5. Первый input в этой форме.
const firstInput = form.querySelector('input');

// 6. Последний input в этой форме.
const inputs = form.querySelectorAll('input');
const lastInput = inputs[inputs.length-1];