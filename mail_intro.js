// //var ref = new Firebase("https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js");
// //import { initializeApp } from 'firebase/app';


//  function initializeApp(){
//   const firebaseConfig = {
//     apiKey: "AIzaSyB70aQYyV1-AoC1D8nwub79vrx79edaYcA",
//     authDomain: "axiomatic-lamp-384513.firebaseapp.com",
//     databaseURL: "https://axiomatic-lamp-384513-default-rtdb.firebaseio.com",
//     projectId: "axiomatic-lamp-384513",
//     storageBucket: "axiomatic-lamp-384513.appspot.com",
//     messagingSenderId: "85022592301",
//     appId: "1:85022592301:web:eb5d968ea47449b12c57a4"
//   };
//  }


// firebase.initializeApp(firebaseConfig);


// // Initialize Firebase
// //firebase.initializeApp(firebaseConfig);

// var formDB=firebase.database().ref("form");

// document.getElementById("form").addEventListener("submit",submitForm);

// function submitForm(e){
//   e.preventDefault();
//   var fname=getElementById("fname");
//   var lname=getElementById("lname");
//   var emailid=getElementById("emailid");
//   var pincode=getElementById("pincode");
//   var state=getElementById("state");
//   var city=getElementById("city");
//   var country=getElementById("country");

//   saveMessage(fname,lname,emailid,pincode,state,city,country);
// }

// const saveMessage= (fname,lname,emailid,pincode,state,city,country) => {
//   var newform=formDB.push();
//   newform.set({
//       fname:fname,
//       lname:lname,
//       emailid:emailid,
//       pincode:pincode,
//       state:state,
//       city:city,
//       country:country,

//   });
// };


const firebaseConfig = {
  apiKey: "AIzaSyBCkweIhM--5ipEnQjOscGVxfiNJe6GlxA",
  authDomain: "introdetails.firebaseapp.com",
  databaseURL: "https://introdetails-default-rtdb.firebaseio.com",
  projectId: "introdetails",
  storageBucket: "introdetails.appspot.com",
  messagingSenderId: "871411521737",
  appId: "1:871411521737:web:3503e2c8c8f056e03e9518",
  measurementId: "G-BHXSLFHPY3"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);


// reference your database
var introdetailsDB = firebase.database().ref("introdetails");

document.getElementById("introDetails").addEventListener("submit",submitForm);


function submitForm(e){
    e.preventDefault();
    var fname=getElementVal("fname");
    var lname=getElementVal("lname");
    var emailid=getElementVal("emailid");
    var address=getElementVal("address");
    var pincode=getElementVal("pincode");
    var state=getElementVal("state");
    var city=getElementVal("city");
    var country=getElementVal("country");

    saveMessages(fname,lname,emailid,address,pincode,state,city,country);
}
    // var lname=getElementById("lname");
    // var emailid=getElementById("emailid");
    // var pincode=getElementById("pincode");
    // var state=getElementById("state");
    // var city=getElementById("city");
    // var country=getElementById("country");
    
    // console.log(fname,lname,add,emailid,pincode,state,city,country);



const saveMessages = (fname,lname,emailid,address,pincode,state,city,country) => {
    var newIntroDetails = introdetailsDB.push();
    newIntroDetails.set({
      fname:fname,
      lname:lname,
      emailid:emailid,
      address:address,
      pincode:pincode,
      state:state,
      city:city,
      country:country,
    });
};
const getElementVal = (id) => {
    return document.getElementById(id).value;

}


