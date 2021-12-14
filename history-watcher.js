

let cookieWatcher = document.querySelector('ul.cookie');
let storageWatcher = document.querySelector('ul.local-storage');

let cookiesArray = document.cookie.split(';');

for (let cookie of cookiesArray) {
    let li = document.createElement('li');

    li.innerHTML = cookie;

    cookieWatcher.append(li);
}

for(let key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) {
        continue;
    }

    let li = document.createElement('li');

    li.innerHTML = ''.concat(key,'=',localStorage.getItem(key));

    storageWatcher.append(li);
}