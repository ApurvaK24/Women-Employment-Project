const firebaseConfig = {
    apiKey: "AIzaSyD00dItmR194SdDB01YK6OxtJdTZSuxb4Y",
    authDomain: "profilerecuiter.firebaseapp.com",
    databaseURL: "https://profilerecuiter-default-rtdb.firebaseio.com",
    projectId: "profilerecuiter",
    storageBucket: "profilerecuiter.appspot.com",
    messagingSenderId: "468975820489",
    appId: "1:468975820489:web:fc09ffa03b5ac421a8b718",
    measurementId: "G-L2BDPZJPXN"
  };

// intialize firebase
firebase.initializeApp(firebaseConfig);

//reference your dabase
var profilerecuiterDB = firebase.database().ref("profilerecuiter");

document.getElementById("profileRecuiter").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    var name=getElementVal("name");
    var email_l=getElementVal("email_l");
    var phoneno=getElementVal("phoneno");
    var address_l=getElementVal("address_l");
    var Desp=getElementVal("Desp");
    var type_job=getElementVal("type_job");
    var desgination=getElementVal("desgination");
    var skills=getElementVal("skills");
    var no_of_emp=getElementVal("no_of_emp");

    saveMessages(name,email_l,phoneno,address_l,Desp,type_job,desgination,skills,no_of_emp);
}

const saveMessages = (name,email_l,phoneno,address_l,Desp,type_job,desgination,skills,no_of_emp) => {
    var newProfileRecuiter = profilerecuiterDB.push();
    newProfileRecuiter.set({
        name:name,
        email_l:email_l,
        phoneno:phoneno,
        address_l,address_l,
        Desp:Desp,
        type_job:type_job,
        desgination:desgination,
        skills:skills,
        no_of_emp:no_of_emp,
    });

};


const getElementVal = (id) => {
    return document.getElementById(id).value;
}