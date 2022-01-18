const firebaseConfig = {
      apiKey: "AIzaSyBmfvLwu3vsV61NAMH4JjoMds5_zCgbXYU",
      authDomain: "kwitter-33730.firebaseapp.com",
      databaseURL: "https://kwitter-33730-default-rtdb.firebaseio.com",
      projectId: "kwitter-33730",
      storageBucket: "kwitter-33730.appspot.com",
      messagingSenderId: "715467878276",
      appId: "1:715467878276:web:f9080df76ad228287537d1",
      measurementId: "G-76R4KSYQ58"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name;
function addRoom() {
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name" 
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}
 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="index.html";
}
