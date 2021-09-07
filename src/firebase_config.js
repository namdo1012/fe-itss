import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBdlZ6c0HVvxSIIuiW_vyPF9ewp7Z48XtI",
  authDomain: "fe-itss.firebaseapp.com",
  projectId: "fe-itss",
  storageBucket: "fe-itss.appspot.com",
  messagingSenderId: "877110795717",
  appId: "1:877110795717:web:48f3b36bb91b58918b7fac",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };

export const getTodoList = async () => {
  try {
    const snapshot = await db.collection("todos").get();
    const todoList = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return todoList;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const addTodo = async (todo) => {
  try {
    const todoCollection = db.collection("todos");
    await todoCollection.add(todo);
  } catch (err) {
    console.log(err);
  }
};

// export const updateTodoItem = async (item, id) => {
//   try {
//     const todoRef = db.collection("todos").doc(id);
//     await todoRef.update(item);
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const clearTodoItem = async (item) => {
//   const todoRef = db.collection("todos").doc(item.id);
//   await todoRef
//     .delete()
//     .then(function () {})
//     .catch(function (err) {
//       console.log(err);
//     });
// };
