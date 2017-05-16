var PICTURE_ARRAY = [
  { },
  { },
  { }
];














var app = function() {
  for(var picture of PICTURE_ARRAY){
    addPicture(picture.name, picture.food, picture.link)
  }
}

window.onload = app;