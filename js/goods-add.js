const goodsNewBtn = document.querySelector('.goods-new-good');
const eventExitBtn = document.querySelector('.event-add__save-exit');

goodsNewBtn.onclick = (e) => {
  document.querySelector('.event-add-wrapper').classList.add('show');
};

eventExitBtn.onclick = (e) => {
  document.querySelector('.event-add-wrapper').classList.remove('show');
};

//Загрузка изображения
const inputImage = document.getElementById('img-load-input');
const imageLoaded = document.querySelector('.image-loaded');
const btnImg = document.querySelector('.event-add__btn-img');
const imageBtn = document.querySelector('.image-buttton');
const imageBtnDel = document.querySelector('.image-buttons-del');

const previewImg = document.querySelector('.preview-img');

previewImg.style.opacity = 0;

inputImage.addEventListener('change', () =>
  updateImageDisplay(imageLoaded, inputImage, previewImg),
);

btnImg.onclick = (e) => {
  inputImage.click();
};

imageBtn.onclick = (e) => {
  inputImage.click();
};

imageBtnDel.addEventListener('click', () => clearBlockLoad(imageLoaded, previewImg));

//Загрузка видео
const inputVideo = document.getElementById('video-load-input');
const videoLoaded = document.querySelector('.video-loaded');
const btnVideo = document.querySelector('.event-add__btn-video');
const videoBtn = document.querySelector('.video-button');
const videoBtnDel = document.querySelector('.video-button-del');

const previewVideo = document.querySelector('.preview-video');

previewVideo.style.opacity = 0;

inputVideo.addEventListener('change', () =>
  updateImageDisplay(videoLoaded, inputVideo, previewVideo),
);

btnVideo.onclick = (e) => {
  inputVideo.click();
};

videoBtn.onclick = (e) => {
  inputVideo.click();
};

videoBtnDel.addEventListener('click', () => clearBlockLoad(videoLoaded, previewVideo));

//Загрузка документ
const inputFile = document.getElementById('file-load-input');
const inputChangeFile = document.getElementById('video-change-input');
const fileLoaded = document.querySelector('.file-loaded');
const btnFile = document.querySelector('.event-add__btn-file');
const fileBtn = document.querySelector('.file-button');
const fileBtnDel = document.querySelector('.file-buttons-del');

const previewFile = document.querySelector('.preview-file');

previewFile.style.opacity = 0;

inputFile.addEventListener('change', updateFileDisplay);

btnFile.onclick = (e) => {
  inputFile.click();
};

// videoBtn.onclick = (e) => {
//   inputVideo.click();
// };

// videoBtnDel.addEventListener('click', () => clearBlockLoad(videoLoaded, previewVideo));

//функции

function updateFileDisplay() {
  const curFiles = inputFile.files;
  if (curFiles.length === 0) {
    let content = '<p>No files currently selected for upload</p>';
    let htmlContent = `<div class="preview-file__inner">
    <div class="file-loaded">${content}</div>

    <div class="video-buttons">
      <button class="file-button">заменить файл</button>
      <button class="file-buttons-del"></button>
    </div>
  </div>`;
    previewFile.insertAdjacentHTML('afterend', htmlContent);
  } else {
    let ul = '<ul>';
    for (var i = 0; i < curFiles.length; i++) {
      if (true) {
        ul += `<li>${curFiles[i].name}</li>`;
      } else {
        para.textContent =
          'File name ' + curFiles[i].name + ': Not a valid file type. Update your selection.';
        listItem.append(para);
      }
      ul += '</ul>';

      let htmlContent = `<div class="preview-file__inner">
      <div class="file-loaded">${ul}</div>
  
      <div class="video-buttons">
        <button class="file-button">заменить файл</button>
        <button class="file-buttons-del"></button>
      </div>
    </div>`;

      previewFile.insertAdjacentHTML('afterend', htmlContent);
    }
  }
}

document.body.addEventListener('click', function (event) {
  const target = event.target;

  if (target.classList.contains('file-button')) {
    let elem = target.closest('.preview-file__inner').querySelector('.file-loaded');
    inputChangeFile.addEventListener('change', () => changeFile(elem));
    inputChangeFile.click();
    inputChangeFile.removeEventListener('click', changeFile);
  }

  if (target.classList.contains('file-buttons-del')) {
    let elem = target.closest('.preview-file__inner');
    elem.remove();
  }
});

function changeFile(elem) {
  elem.innerHTML = '';

  const curFiles = inputChangeFile.files;
  if (curFiles.length === 0) {
    let content = '<p>No files currently selected for upload</p>';
    elem.append(content);
  } else {
    let ul = '<ul>';
    for (var i = 0; i < curFiles.length; i++) {
      if (true) {
        ul += `<li>${curFiles[i].name}</li>`;
      } else {
        para.textContent =
          'File name ' + curFiles[i].name + ': Not a valid file type. Update your selection.';
        listItem.append(para);
      }
      ul += '</ul>';

      elem.insertAdjacentHTML('afterbegin', ul);
    }
  }
}

function clearBlockLoad(box, parent) {
  while (box.firstChild) {
    box.removeChild(box.firstChild);
  }

  parent.style.opacity = 0;
}

function updateImageDisplay(elem, file, block) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }

  const curFiles = file.files;
  if (curFiles.length === 0) {
    const para = document.createElement('p');
    para.textContent = 'No files currently selected for upload';
    elem.append(para);
  } else {
    var list = document.createElement('ol');
    elem.append(list);
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
      block.style.opacity = 1;
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
