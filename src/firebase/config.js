import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBs8j_jUU7tfZ0u8cKIJ1xiGe0gmTyJacQ',
  authDomain: 'spendingtracker-7d99d.firebaseapp.com',
  databaseURL: 'https://spendingtracker-7d99d.firebaseio.com',
  projectId: 'spendingtracker-7d99d',
  storageBucket: 'spendingtracker-7d99d.appspot.com',
  messagingSenderId: '144329684910',
  appId: '1:144329684910:ios:0ec0d3eae3e2076a6bba3f',
};

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
