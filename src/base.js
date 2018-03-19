import Rebase from 're-base'; // mirror state to firebase
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBbGgKbV7H04ejGKoySRtvapPOYcFdCAZs',
  authDomain: 'catch-of-the-day-henri-viiralt.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-henri-viiralt.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database()); // func to return the db

export { firebaseApp }; // named export
export default base; // default export
