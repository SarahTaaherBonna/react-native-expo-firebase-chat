// import * as firebase from "firebase";
import firebase from "firebase-tools";
// import myFirebaseConfig from "config/firebase";

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/7.15.3/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/7.15.3/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>

// const firebaseConfig = {
//   apiKey: myFirebaseConfig.API_KEY,
//   authDomain: myFirebaseConfig.AUTH_DOMAIN,
//   databaseURL: myFirebaseConfig.DATABASE_URL,
//   projectId: myFirebaseConfig.PROJECT_ID,
//   storageBucket: myFirebaseConfig.STORAGE_BUCKET,
//   messagingSenderId: myFirebaseConfig.MESSAGING_SENDER_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDyYtgpEk64t6w63XuytDIyJvuUAMKaK8k",
  authDomain: "chatapp-6f69b.firebaseapp.com",
  databaseURL: "https://chatapp-6f69b.firebaseio.com",
  projectId: "chatapp-6f69b",
  storageBucket: "chatapp-6f69b.appspot.com",
  messagingSenderId: "862545409242",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
