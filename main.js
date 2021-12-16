function motivationalSpeechWallpaper(wallpaperObject) {
  const innerFlex = document.createElement('div');
  innerFlex.classList.add('d-flex', 'img_frame');

  const imgFrame = document.createElement('div');
  innerFlex.append(imgFrame);
  imgFrame.classList.add(
    'd-flex',
    'justify-content-center',
    'align-items-center'
  );

  const bgImage = document.createElement('img');
  bgImage.classList.add('bg_image', `wallpaper${wallpaperObject.id}`);
  bgImage.src = wallpaperObject.imgUrl;
  imgFrame.append(bgImage);

  const speechContainer = document.createElement('div');
  speechContainer.classList.add('d-flex');
  const speech = document.createElement('h1');
  speech.style.color = '#' + wallpaperObject.color;
  speech.classList.add('speech', `wallpaper${wallpaperObject.id}`);
  speech.innerHTML = wallpaperObject.text;
  speechContainer.append(speech);
  imgFrame.append(speechContainer);

  return innerFlex;
}

class Wallpaper {
  constructor(text, color, imgUrl, id) {
    this.text = text;
    this.color = color;
    this.imgUrl = imgUrl;
    this.id = id;
  }
}

const domObj = document.getElementById('target');

const wallpaper1 = new Wallpaper(
  'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint',
  '2c3e50',
  'https://recursionist.io/img/different-job.png',
  '1'
);

const wallpaper2 = new Wallpaper(
  'The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg',
  'ecf0f1',
  'images/laptop-3174729_1280.jpg',
  '2'
);

const wallpaper3 = new Wallpaper(
  'Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman',
  'ecf0f1',
  'images/robot-2301646_1280.jpg',
  '3'
);

domObj.append(motivationalSpeechWallpaper(wallpaper1));
domObj.append(motivationalSpeechWallpaper(wallpaper2));
domObj.append(motivationalSpeechWallpaper(wallpaper3));
