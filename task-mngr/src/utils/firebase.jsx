// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
    signInWithRedirect,
} from "firebase/auth";
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, onSnapshot, updateDoc } from 'firebase/firestore'
import { useEffect, useState } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBanKWRzVGJhN2Z8KILxwtammu87jEfjm4",
    authDomain: "task-mngr-70be2.firebaseapp.com",
    projectId: "task-mngr-70be2",
    storageBucket: "task-mngr-70be2.appspot.com",
    messagingSenderId: "83930755945",
    appId: "1:83930755945:web:918bc6ca270db880cec3f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app)

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})
const tasksCollection = collection(db, "tasks");

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)
export const googleSignOut = () => {
    try {
        signOut(auth)
            .then(() => console.log('SignOut'))
    }
    catch (error) { console.log(error) }
}

export const addTasks = async (values) => {
    const { title, status, priority, category } = values;
    try {
        await addDoc(tasksCollection, {
            title,
            status,
            priority,
            category,
            date: new Date(),
        });

    } catch (e) {
        console.error('Error: ', e);
    }
};
//Update task
export const updateTask = async (documentId, values) => {
    const docRef = doc(db, 'tasks', documentId);

    try {
        await updateDoc(docRef, values);
        console.log(values)
    } catch (error) {
        console.error('Error: ', error);
    }
};
//Delete task
export const deleteTask = async (docId) => {
    const docRef = doc(db, 'tasks', docId)
    try {
        await deleteDoc(docRef)
        console.log('Alles Goot')
    } catch (error) {
        console.error('Error', error)
    }
}

//Get all posts
export const getTasks = async () => {
    const postsSnapshot = await getDocs(tasksCollection);
    const posts = [];

    postsSnapshot.forEach((postDoc) => {
        const postData = postDoc.data();
        const postId = postDoc.id; // отримуємо id документа
        posts.push({ ...postData, id: postId });
    });

    return posts;
}
//Online Check Posts
export const GetOnlineTasks = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'tasks'), (snapshot) => {
            const updatedData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setPosts(updatedData);
        });

        return () => unsubscribe();
    }, []);

    return posts;
}