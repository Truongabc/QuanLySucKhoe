import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyBbsRr7ncw-NtdThRX6wM1LZ4hwuSwuiQU',
  authDomain: 'quanlysuckhoe-detail.firebaseapp.com',
  databaseURL: 'https://quanlysuckhoe-detail.firebaseio.com',
  projectId: 'quanlysuckhoe-detail',
  storageBucket: 'quanlysuckhoe-detail.appspot.com',
  messagingSenderId: '937941317525',
  appId: '1:937941317525:web:1da5bd4b8170b7bf3ce89c',
  measurementId: 'G-KWJYVLF9YC',
};
// Initialize Firebase
const fireApp = firebase.initializeApp(firebaseConfig);
export default fireApp;
