import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyDbBAtaA7JMmySGnpqMNmGDEmgx2mWPMEA",
  authDomain: "recipe-rolodex.firebaseapp.com",
  databaseURL: "https://recipe-rolodex.firebaseio.com",
  projectId: "recipe-rolodex",
  storageBucket: "recipe-rolodex.appspot.com",
};

firebase.initializeApp(config);
var database = firebase.database();
export default database;

export var User = {};
export function auth () {
  return new Promise(function (resolve, reject) {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        User.user = result.user;
        resolve(User);
      })
      .catch(function (e) {
        reject(e);
      });
  });
}
