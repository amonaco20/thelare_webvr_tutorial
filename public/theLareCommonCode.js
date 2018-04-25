var vRViewPlayer = function(elementIdName, options) {
  console.log('Creating VR View Player');
  return new VRView.Player(elementIdName, options);
}

var drawingRoom = vRViewPlayer('#first-vr-example', {
  image: 'http://www.johnsear.com/wp-content/uploads/2016/03/word-image50.png',
  is_stereo: false,
});

window.addEventListener('load', drawingRoom);

var roomDrawing = vRViewPlayer('#second-vr-example', {
  image: 'http://www.johnsear.com/wp-content/uploads/2016/03/word-image50.png',
  is_stereo: false,
});

window.addEventListener('load', roomDrawing);

var boxRoomTemplate = vRViewPlayer('#third-vr-example', {
  image: 'https://raw.githubusercontent.com/lare-student/thelare_webvr_tutorial/master/public/assets/example-rectangular-room.png',
  is_stereo: false,
});

window.addEventListener('load', boxRoomTemplate);
