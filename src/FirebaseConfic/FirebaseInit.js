import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfice";


const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;