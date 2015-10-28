var cartoons = ['adventure.png', 'avatar.jpg', 'bravest.png', 'gravity.png', 'regular.jpg', 'steven.png'];

var cartoon = 'public/images/';

var counter = 0;

function getImage() {
  var image = document.getElementById("img");
  return image;
}


// Start Add Thumbs To thumbContainer Div --------------------------------------
function createThumb() {
  for (var i = 0; i < cartoons.length; i ++) {
    var image = getImage();
    image = image.src;
    document.getElementById('thumbContainer').innerHTML += '<img src="public/images/' + cartoons[i] + '" onclick="getThumb(' + i +')" class="thumb" alt="" />'
    // console.log(div);
  }
}
// End Add Thumbs To thumbContainer Div ----------------------------------------


// Start Left-Right click functionality ----------------------------------------
function setSrc() {
  var image = getImage();
  image.src = cartoon + cartoons[counter];
  return image;
}

function setCounter (dir) {
  if (counter == null) {
    counter = 0;
  } else if (counter == cartoons.length - 1 && dir == "right" || counter == 0 && dir == "left") {
    looper(dir);
  } else if (counter != null && dir == "right") {
    counter = counter + 1;
  } else if (counter != null && dir == "left") {
    counter = counter - 1;
  };
};

function looper(dir) {
  if (dir == "right") {
    var image = getImage();
    counter = 0
    image.src = cartoon + cartoons[counter];
  } else if (dir == "left") {
    var image = getImage();
    counter = cartoons.length - 1;
    image.src = cartoon + cartoons[counter];
  };
};

function righty() {
  setCounter("right");
  setSrc();
};

function lefty() {
  setCounter("left");
  setSrc();
};

// End Left-Right Click Functionality ------------------------------------------

// Start Image Click Functionality ---------------------------------------------

function getThumb(i) {
  var thumb = document.getElementsByClassName('thumb')[i].src;
  counter = i;
  setImage(thumb);
}

function setImage(img) {
  image = getImage();
  image.src = img;
}
// End Image Click Functionality -----------------------------------------------
