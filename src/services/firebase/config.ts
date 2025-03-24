import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA_4z6cARh_FgSx5aX0_NYwMhQ1tq8sYdk",
  authDomain: "nextteam2-8bbd8.firebaseapp.com",
  projectId: "nextteam2-8bbd8",
  storageBucket: "nextteam2-8bbd8.appspot.com",
  messagingSenderId: "494595420616",
  appId: "1:494595420616:web:f327b1da2a49b1d4f710fd",
  measurementId: "G-JPXR04LW7Z",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "it";

const providerGoogle = new GoogleAuthProvider();

const provider = {
  providerGoogle,
};

export { auth, provider, app };
