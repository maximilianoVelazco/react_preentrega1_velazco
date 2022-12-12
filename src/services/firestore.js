
import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCI5D2IZgr0WrNnxIr-8eNoUHOSUF6QDdg",
  authDomain: "tiendavelazcoreact.firebaseapp.com",
  projectId: "tiendavelazcoreact",
  storageBucket: "tiendavelazcoreact.appspot.com",
  messagingSenderId: "166213297953",
  appId: "1:166213297953:web:79d943f28807bd5fce8060"
};


const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

export function getItems(){
    const colectionProducts = collection(DB, "products");
}
