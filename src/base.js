import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAC_w5s4vfqq61TWYa5OyNySEe28JdS600",
  authDomain: "catch-of-the-day-c686e.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-c686e.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
