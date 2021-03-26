import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCQpOueEdlVLvMS70DbGK9sPUkCMrdZ4Ik",
    authDomain: "socialapp-a6247.firebaseapp.com",
    projectId: "socialapp-a6247",
    storageBucket: "socialapp-a6247.appspot.com",
    messagingSenderId: "196090038910",
    appId: "1:196090038910:web:29079203ac7a9b3c72262f",
    measurementId: "G-GS0NRVPD69"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage };
export default db;