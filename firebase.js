import "firebase/storage";
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAOunIFjDUiwLjMj0rilO9ir14qHdMOys4",
    authDomain: "facebook-clone-ee0f1.firebaseapp.com",
    projectId: "facebook-clone-ee0f1",
    storageBucket: "facebook-clone-ee0f1.appspot.com",
    messagingSenderId: "971957073753",
    appId: "1:971957073753:web:a92f83a9940e1ed6317e48"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};
