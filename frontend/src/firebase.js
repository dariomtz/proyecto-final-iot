import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDv3HfqeEgkyd2Rl8lWxsYoV7dsFWAmeRg",
    authDomain: "chalecos-chidos.firebaseapp.com",
    projectId: "chalecos-chidos",
    storageBucket: "chalecos-chidos.appspot.com",
    messagingSenderId: "287031969102",
    appId: "1:287031969102:web:e1313995bfeb50fab88a1f"
};

const app = initializeApp(firebaseConfig);

export { app };