const ruUTCmonth = {
    1: 'Январь',
    2: 'Февраль',
    3: 'Март',
    4: 'Апрель',
    5: 'Май',
    6: 'Июнь',
    7: 'Июль',
    8: 'Август',
    9: 'Сентябрь',
    10: 'Октябрь',
    11: 'Ноябрь',
    12: 'Декабрь'
}

const getKeyByValue = (arr, value) =>
    Object.keys(arr).find(key => arr[key] === value);

const day = ['SU', 'MN', 'TU', 'WN', 'TH', 'FR', 'ST'];

let yearSelector = document.querySelector('select.year').firstChild.nextElementSibling;

for (let i = 1971; i < 2100; ++i) {
    let optionYear = document.createElement('option');
    optionYear.innerText = i.toString();
    optionYear.setAttribute('month', i.toString());
    yearSelector.append(optionYear);
}

let monthSelector = document.querySelector('select.month');
yearSelector = document.querySelector('select.year');

const currentDate = new Date();

monthSelector.value = ruUTCmonth[currentDate.getMonth() + 1];
yearSelector.value = currentDate.getFullYear();

let dateTable = document.querySelectorAll('tr.calendar-day');

let choosedMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

console.log(choosedMonth.getDay());

let choosedData = null;

function makeTableDate(choosedMonth) {
    let currentMonth = choosedMonth.getMonth();
    let wasCalled = false;

    if (1 < choosedMonth.getDay())
        choosedMonth = new Date(choosedMonth.getFullYear(), choosedMonth.getMonth(), 1 - choosedMonth.getDay() + 1);

    for (let tableRow of dateTable) {
        for (let i = 1; i < 8; ++i) {
            let td = document.createElement('td');



            if (choosedMonth.getMonth() !== currentMonth) {
                td.classList.add('another-month');
                td.innerText = choosedMonth.getDate();
            }
            else {
                let button = document.createElement('button');

                button.innerText = choosedMonth.getDate();
                button.classList.add('day-button');

                td.append(button);

                button.addEventListener('click', buttonListener);
            }

            tableRow.append(td);

            choosedMonth = new Date(choosedMonth.getFullYear(), choosedMonth.getMonth(), choosedMonth.getDate() + 1);
        }
    }
}

function clearTable() {
    for (let tableRow of dateTable)
        for (let td of Array.from(tableRow.childNodes)) {
            console.log(td);
            td.remove();
        }
}

makeTableDate(choosedMonth);

function buttonListener(event) {
    if (choosedData) {
        choosedData.classList.remove('choosed-day');
        choosedData.parentNode.classList.remove('choosed-day');
    }

    event.target.classList.add('choosed-day');
    event.target.parentNode.classList.add('choosed-day');

    event.preventDefault();

    choosedData = event.target;
}

yearSelector.addEventListener('change', event => {
    clearTable();
    makeTableDate(new Date(yearSelector.value, getKeyByValue(ruUTCmonth, monthSelector.value) - 1, 1));
})

monthSelector.addEventListener('change', event => {
    clearTable();
    makeTableDate(new Date(yearSelector.value, getKeyByValue(ruUTCmonth, monthSelector.value) - 1, 1));
})
