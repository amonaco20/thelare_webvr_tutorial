var vRViewPlayer = function(elementIdName, options) {
  console.log('Creating VR View Player');
  return new VRView.Player(elementIdName, options);
}

var drawingRoom = vRViewPlayer('#first-vr-example', {
  image: 'https://q3fb03rfy3f4ahuzu2uy6e11-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/photosphere-android.jpg',
  is_stereo: false,
});

window.addEventListener('load', drawingRoom);

var roomDrawing = vRViewPlayer('#second-vr-example', {
  image: 'http://www.ardavey.com/wp-content/uploads/2014/02/2014-02-11-16.06.26.jpg',
  is_stereo: false,
});

window.addEventListener('load', roomDrawing);

var boxRoomTemplate = vRViewPlayer('#third-vr-example', {
  image: 'https://photosphereviewer.net/images/demo/demo5_full.jpg',
  is_stereo: false,
});

window.addEventListener('load', boxRoomTemplate);
