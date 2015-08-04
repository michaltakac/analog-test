if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}


if (Meteor.isCordova) {
  Meteor.startup(function () {
    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        console.log(navigator.camera);
    }

    navigator.camera.getPicture(onSuccess, onFail, { 
      quality : 75,
      destinationType : Camera.DestinationType.FILE_URI,
      sourceType : Camera.PictureSourceType.CAMERA,
      allowEdit : true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 200,
      targetHeight: 200,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: true 
    });

    function onSuccess(imageData) {
      var image = document.getElementById('myImage');
      image.src = imageURI;
      alert(image.src);
    }

    function onFail(message) {
      alert('Failed because: ' + message);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
