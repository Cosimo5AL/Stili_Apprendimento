import { initializeApp } from 'firebase/app';
import { collection, doc, getDocs, getFirestore, setDoc } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration

export default function DBManager() {
    const firebaseConfig = {
        apiKey: "AIzaSyCHnbv_oSLdrm5Iky0fLnOiCupxFtcBw5I",
        authDomain: "stili-di-apprendimento.firebaseapp.com",
        projectId: "stili-di-apprendimento",
        storageBucket: "stili-di-apprendimento.appspot.com",
        messagingSenderId: "141398828456",
        appId: "1:141398828456:web:978eef01133c869a8e299d"
    };
    const firebase = initializeApp(firebaseConfig);
    const db = getFirestore(firebase)

    const getDB = () => db
    //TODO
    const getCollection = async (collectionName, callback) => {
        const col = collection(db, collectionName);
        const snapshot = await getDocs(col);
        callback(snapshot.docs.map(doc => doc.data()));
    };
    //TODO
    const setCollection = async (email, sezione, domande) => {
        await setDoc(doc(db,'classi',sezione),{
            alunni:[
                {uploadDate: Date.now(),email:email,domande:domande}
            ]
        })
            .then(response => alert("Caricamento avvenuto"))
            .catch(error => console.error(error))
    }

    const login = async (email, password, callback) => await getDocs(collection(db, 'utenti'))
        .then(res => res.docs.map(doc => doc.data()))
        .then(data => {
            if (data[0].email === email && data[0].password === password) {
                sessionStorage.setItem('userLogged', 'true')
                callback('loggato on successo')
            }
        })
    return { getDB, getCollection, setCollection, login }
}