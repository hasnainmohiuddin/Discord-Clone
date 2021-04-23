import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA97E5btgh0m0qkAUKx_v8j2pMGSFiTSTM",
  authDomain: "discord-clone-30945.firebaseapp.com",
  projectId: "discord-clone-30945",
  storageBucket: "discord-clone-30945.appspot.com",
  messagingSenderId: "891185831786",
  appId: "1:891185831786:web:907e84e3bd3900133a4f13",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
