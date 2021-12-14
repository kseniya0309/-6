'use strict';

let createPhoto = (photosrc = '#') => {
    let bigPhotoDiv = document.createElement('div');

    bigPhotoDiv.classList.add('bigphoto');

    let frame = document.createElement('div');

    frame.classList.add('frame');
    frame.addEventListener('click', closePhoto);

    let img = document.createElement('img');

    img.setAttribute('src', photosrc);

    img.classList.add('photo-frame');
    img.addEventListener('click', event => {
        event.stopPropagation();
    })

    bigPhotoDiv.append(frame);

    frame = document.createElement('div');
    frame.classList.add('frame');
    frame.addEventListener('click', closePhoto);
    frame.append(img);
    bigPhotoDiv.append(frame);

    frame = document.createElement('div');
    frame.classList.add('frame');
    frame.addEventListener('click', closePhoto);
    bigPhotoDiv.append(frame);

    document.body.append(bigPhotoDiv);

    createPhoto.currentPhoto = bigPhotoDiv;
}

let closePhoto = () => {
    document.body.removeChild(createPhoto.currentPhoto);
}

let deletePhoto = () => {
    document.body.removeChild(createPhoto.currentPhoto);
}

let photosDiv = document.querySelectorAll('div.grid2');

for (let elem of Array.from(photosDiv)) {
    elem.addEventListener('click', event => {
        createPhoto(elem.children[0].getAttribute('src'));
    })
}
