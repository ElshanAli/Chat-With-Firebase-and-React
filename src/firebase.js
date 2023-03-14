import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";
import {
    getStorage
} from "firebase/storage";
import {
    getFirestore
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAlS_4y7UYe7fkRMUhyIH6rUvP81zi69cU",
    authDomain: "chat-f7777.firebaseapp.com",
    projectId: "chat-f7777",
    storageBucket: "chat-f7777.appspot.com",
    messagingSenderId: "533393877919",
    appId: "1:533393877919:web:58c2e2dae7dff0d68e2baa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();