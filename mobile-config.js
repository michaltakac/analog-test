App.info({
  id: 'com.analogtest.app',
  name: 'Analog camera',
  description: 'Analog camera test',
  author: 'HP Publishing, s.r.o.',
  email: 'takacmichal92@gmail.com',
  website: 'http://example.com'
});
 
// Set up resources such as icons and launch screens.
/*App.icons({
  'iphone': 'icons/icon-60.png',
  'iphone_2x': 'icons/icon-60@2x.png',
  // ... more screen sizes and platforms ...
});
 
App.launchScreens({
  'iphone': 'splash/Default~iphone.png',
  'iphone_2x': 'splash/Default@2x~iphone.png',
  // ... more screen sizes and platforms ...
});*/
 
// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
 
// Pass preferences for a particular PhoneGap/Cordova plugin
/*App.configurePlugin('com.phonegap.plugins.facebookconnect', {
  APP_ID: '1234567890',
  API_KEY: 'supersecretapikey'
});*/

App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');