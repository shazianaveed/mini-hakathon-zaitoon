
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCsTh21iqlr7mAy0pNDiFfLamTJ9s7n_ZQ",
    authDomain: "mini-hakathon-2b1b5.firebaseapp.com",
    projectId: "mini-hakathon-2b1b5",
    storageBucket: "mini-hakathon-2b1b5.firebasestorage.app",
    messagingSenderId: "641904837816",
    appId: "1:641904837816:web:406bcf926a3e74509b604d",
    measurementId: "G-MMLDQ3533R"
  };
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let taskId = 0;

document.getElementById("createForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const taskTitle = document.getElementById("title").value;
  const taskDesc = document.getElementById("description").value;
  const assigned = document.getElementById("assignedTo").value;

  createTask(taskTitle, taskDesc, assigned);

  set(ref(db, "Task-Management-Data/" + taskTitle), {
    taskDescription: taskDesc,
    assignedTo: assigned,
    status: "todo",
  })
    .then(() => {
      alert("Task saved to database and card created!");
    })
    .catch((error) => {
      alert("Error saving to database: " + error.message);
    });

  document.getElementById("createForm").reset();
});