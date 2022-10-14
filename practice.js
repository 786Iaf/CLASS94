
var firebaseConfig = {
    apiKey: "AIzaSyBG_9aybPTYVTSi-jZsgSFh5S0yH_q08tM",
    authDomain: "kwitter-d7369.firebaseapp.com",
    databaseURL: "https://kwitter-d7369-default-rtdb.firebaseio.com",
    projectId: "kwitter-d7369",
    storageBucket: "kwitter-d7369.appspot.com",
    messagingSenderId: "1030165583027",
    appId: "1:1030165583027:web:534107edb3e3a0ad5e0cc6"
  };
  
  
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}