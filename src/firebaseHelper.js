import app from "firebase/app";
//import "firebase/firestore";
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyB0LgJIeCexc9yNJjr8zXeGjWjPJ316C3g",
  authDomain: "ukolnicek-b8d65.firebaseapp.com",
  databaseURL: "https://ukolnicek-b8d65.firebaseio.com",
  projectId: "ukolnicek-b8d65",
  storageBucket: "ukolnicek-b8d65.appspot.com",
  messagingSenderId: "371315913135",
  appId: "1:371315913135:web:691dcd9aa7a77fa812bf5a",
  measurementId: "G-K4CPBY56QX"
  };

export default class firebaseHelper {
    constructor () {
      if (!firebaseHelper.instance) {
        app.initializeApp(firebaseConfig);
        this._auth = app.auth();
        firebaseHelper.instance = this
      }
      // Initialize object
      return firebaseHelper.instance
    }
    // Properties & Methods
    _auth;

    /** Vytvori uzivatele se jmenem a heslem */
    doCreateUserWithEmailAndPassword = (firstName, lastName, email, password, passwordCheck) => {
        return this._auth.createUserWithEmailAndPassword(firstName, lastName, email, password, passwordCheck);
    }

    /** Prihlasi uzivatele emailem a heslem */
    doSignInWithEmailAndPassword = (email, password) => {
        return this._auth.signInWithEmailAndPassword(email, password);
    }

    sendSignInLinkToEmail = (email) => {
      //TODO: prepsat po nasazeni na spravne domeny
      var actionCodeSettings = {
        url: 'www.google.cz',
        handleCodeInApp: true,
        dynamicLinkDomain: 'www.google.cz'
      }
      return this._auth.sendSignInLinkToEmail(email, actionCodeSettings);
    }
    
    /** Odhlasi aktualne prihlaseneho uzivatele */
    doSignOut = () => this._auth.signOut();
     
    /** Vrati aktualne prihlaseneho uzivatele */
    getCurrentUser = () => {
        return this._auth.currentUser;
    }
    
    /** Vrati uid aktualne prihlaseneho uzivatele */
    getCurrentUserUid = () => {
        if (this._auth.currentUser) {
          return this._auth.currentUser.uid;
        } else {
          //TODO: pridat prihlaseni anonymniho uzivatele
          return "";
        }
    }
}