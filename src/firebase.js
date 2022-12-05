import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDaZJNQ1_qbD79SDZclUhF0D4s22N6fRs8",
    authDomain: "auth-react-b82fe.firebaseapp.com",
    projectId: "auth-react-b82fe",
    storageBucket: "auth-react-b82fe.appspot.com",
    messagingSenderId: "345501808769",
    appId: "1:345501808769:web:ed3640e469ed6098327580",
    measurementId: "G-RY70PVGBQP"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export default app