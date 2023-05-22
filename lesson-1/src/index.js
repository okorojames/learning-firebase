import { initializeApp } from "firebase/app";
//
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB6coCVGNhJujnaePXMUOVSG9JQTAU1OIQ",
  authDomain: "firstbaseprojectlesson.firebaseapp.com",
  projectId: "firstbaseprojectlesson",
  storageBucket: "firstbaseprojectlesson.appspot.com",
  messagingSenderId: "789132222994",
  appId: "1:789132222994:web:d927034584db69805eaecb",
};
// initialize firebase
initializeApp(firebaseConfig);

// initialize services
const db = getFirestore();

// collection reference
const collRef = collection(db, "books");

// get collection data
getDocs(collRef)
  .then((snapshot) => {
    let books = [];
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
    });
    console.log(books);
  })
  .catch((error) => {
    console.log(error.message);
  });
//
//add book function
const addForm = document.querySelector(".add");
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addDoc(collRef, {
    title: addForm.title,
    author: addForm.author,
  }).then(() => {
    addForm.reset();
  });
});

// deleting book form function
const deleteBookForm = document.querySelector(".delete");
deleteBookForm.addEventListener("click", (e) => {
  e.preventDefault();
});
//
