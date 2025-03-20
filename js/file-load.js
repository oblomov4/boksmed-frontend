const eventBtn = document.querySelector('.events__top-btn');

const eventExitBtn = document.querySelector('.event-add__save-exit');

eventBtn.onclick = (e) => {
  document.querySelector('.event-add-wrapper').classList.add('show');
};

eventExitBtn.onclick = (e) => {
  document.querySelector('.event-add-wrapper').classList.remove('show');
};

const input = document.getElementById('img-load-input');
const imageLoaded = document.querySelector('.image-loaded');
const btnImg = document.querySelector('.event-add__btn-img');
const imageBtn = document.querySelector('.image-buttton');
const imageBtnDel = document.querySelector('.image-buttons-del');

const preview = document.querySelector('.preview');

preview.style.opacity = 0;

input.addEventListener('change', updateImageDisplay);

btnImg.onclick = (e) => {
  input.click();
};

function updateImageDisplay() {
  while (imageLoaded.firstChild) {
    imageLoaded.removeChild(imageLoaded.firstChild);
  }

  const curFiles = input.files;
  if (curFiles.length === 0) {
    const para = document.createElement('p');
    para.textContent = 'No files currently selected for upload';
    imageLoaded.append(para);
  } else {
    var list = document.createElement('ol');
    imageLoaded.append(list);
    for (var i = 0; i < curFiles.length; i++) {
      const listItem = document.createElement('li');
      const para = document.createElement('p');
      if (validFileType(curFiles[i])) {
        para.textContent = curFiles[i].name;
        const image = document.createElement('img');
        image.src = window.URL.createObjectURL(curFiles[i]);
        listItem.appendChild(image);
        listItem.appendChild(para);
      } else {
        para.textContent =
          'File name ' + curFiles[i].name + ': Not a valid file type. Update your selection.';
        listItem.append(para);
      }
      list.append(listItem);
      preview.style.opacity = 1;
    }
  }
}

var fileTypes = ['image/jpeg', 'image/pjpeg', 'image/png'];

function validFileType(file) {
  for (var i = 0; i < fileTypes.length; i++) {
    if (file.type === fileTypes[i]) {
      return true;
    }
  }

  return false;
}

function returnFileSize(number) {
  if (number < 1024) {
    return number + 'bytes';
  } else if (number > 1024 && number < 1048576) {
    return (number / 1024).toFixed(1) + 'KB';
  } else if (number > 1048576) {
    return (number / 1048576).toFixed(1) + 'MB';
  }
}

imageBtn.onclick = (e) => {
  input.click();
};

imageBtnDel.onclick = (e) => {
  while (imageLoaded.firstChild) {
    imageLoaded.removeChild(imageLoaded.firstChild);
  }

  preview.style.opacity = 0;
};
