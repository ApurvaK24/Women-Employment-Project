const firebaseConfig = {
    apiKey: "AIzaSyB1cVzGQdPVXJaezRA1QNRvKgiCaNyR-Wk",
    authDomain: "contactform-adcb4.firebaseapp.com",
    databaseURL: "https://contactform-adcb4-default-rtdb.firebaseio.com",
    projectId: "contactform-adcb4",
    storageBucket: "contactform-adcb4.appspot.com",
    messagingSenderId: "719119269215",
    appId: "1:719119269215:web:e5a297c77323e84239caea",
    measurementId: "G-BB98B15PY2"
  }

// intialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();


    var phone = getElementVal("phone");
    
    saveMessages(phone);
}

const saveMessages = (phone) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        phone : phone,
    });
};
const getElementVal = (id) => {
    return document.getElementById(id).value;

}
