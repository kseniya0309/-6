'use strict';


let nameRegEx = new RegExp('^[a-zA-Zа-яА-ЯёЁ]+\\s{1}[a-zA-Zа-яА-ЯёЁ]+\\s{1}[a-zA-Zа-яА-ЯёЁ]+$');
let phoneRegEx = new RegExp('^\\+[73]\\d{9,11}$');

let form = document.querySelector('form.contact-form');
let sendButton = document.querySelector('button.submit-button');

let validatorArray = {
    'name': false,
    'phone': false
}

let regexList = {
    'name': nameRegEx,
    'phone': phoneRegEx
}

let clueList = {
    'name': document.querySelector('p.name-clue'),
    'phone': document.querySelector('p.phone-clue')
}

for (let elem of Array.from(form.elements).reverse()) {
    if (validatorArray.hasOwnProperty(elem.getAttribute('name'))) {
        elem.addEventListener('focusout', event => {

            if (regexList[elem.getAttribute('name')].exec(elem.value.toString()) === null) {
                elem.classList.add('form-incorrect');

                validatorArray[elem.getAttribute('name')] = false;

                clueList[elem.getAttribute('name')].hidden = false;

                elem.classList.remove('form-correct');
            }
            else {
                elem.classList.add('form-correct');

                validatorArray[elem.getAttribute('name')] = true;

                clueList[elem.getAttribute('name')].hidden = true;

                elem.classList.remove('form-incorrect');
            }

            for (let elem in validatorArray) {
                if (!validatorArray[elem]) {
                    sendButton.disabled = true;

                    return;
                }
            }

            sendButton.disabled = false;
        })
    }
}