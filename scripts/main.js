function motivationalSpeechWallpaper(wallpaperObject) {
  const vtTable = {
    top: 'align-items-start',
    center: 'align-items-center',
    bottom: 'align-items-end',
  };

  const hrTable = {
    left: 'justify-content-start',
    center: 'justify-content-center',
    right: 'justify-content-end',
  };

  let innerFlex = document.createElement('div');
  innerFlex.classList.add('d-flex', 'col-12');

  let imgFrame = document.createElement('div');
  innerFlex.append(imgFrame);
  imgFrame.classList.add(
    'd-flex',
    'img-frame',
    vtTable[wallpaperObject.vertical],
    hrTable[wallpaperObject.horizon]
  );

  let bgImage = document.createElement('img');
  bgImage.classList.add('bg-image');
  bgImage.src = wallpaperObject.imgUrl;
  imgFrame.append(bgImage);

  let speech = document.createElement('h1');
  speech.style.color = '#' + wallpaperObject.color;
  speech.classList.add('d-flex', 'speech');
  speech.innerHTML = wallpaperObject.text;
  imgFrame.append(speech);

  return innerFlex;
}

class Wallpaper {
  constructor(text, color, imgUrl, vertical, horizon) {
    this.text = text;
    this.color = color;
    this.imgUrl = imgUrl;
    this.vertical = vertical;
    this.horizon = horizon;
  }
}

const domObj = document.getElementById('target');

let wallpaper1 = new Wallpaper(
  'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint',
  '2c3e50',
  'https://recursionist.io/img/different-job.png',
  'center',
  'center'
);

let wallpaper2 = new Wallpaper(
  'The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg',
  'ecf0f1',
  'https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg',
  'bottom',
  'left'
);

let wallpaper3 = new Wallpaper(
  'Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman',
  'ecf0f1',
  'https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg',
  'top',
  'right'
);

domObj.append(motivationalSpeechWallpaper(wallpaper1));
domObj.append(motivationalSpeechWallpaper(wallpaper2));
domObj.append(motivationalSpeechWallpaper(wallpaper3));
