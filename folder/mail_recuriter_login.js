const firebaseConfig = {
    apiKey: "AIzaSyClZ0HajTCojOusH7vZCzP8zbDgpuwnbVg",
    authDomain: "recruiterlogin-7d1bc.firebaseapp.com",
    databaseURL: "https://recruiterlogin-7d1bc-default-rtdb.firebaseio.com",
    projectId: "recruiterlogin-7d1bc",
    storageBucket: "recruiterlogin-7d1bc.appspot.com",
    messagingSenderId: "666700016067",
    appId: "1:666700016067:web:d609c90e7a13a56c7c3576",
    measurementId: "G-2TKM3X4GJP"
  };

// intialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var recruiterloginDB = firebase.database().ref("recruiterlogin");

document.getElementById("recuriterLogin").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    var firstn=getElementVal("firstn");
    var lastn=getElementVal("lastn");
    var email=getElementVal("email");
    var add=getElementVal("add");
    var pinCode=getElementVal("pinCode");
    var state_l=getElementVal("state_l");
    var city_l=getElementVal("city_l");
    var country_l=getElementVal("country_l");
    var comp_name=getElementVal("comp_name");
    var job_req=getElementVal("job_req");
    var nof_emp=getElementVal("noof_emp");
    var desp=getElementVal("desp");

    saveMessages(firstn,lastn,email,add,pinCode,state_l,city_l,country_l,comp_name,job_req,nof_emp,desp);

}

const saveMessages = (firstn,lastn,email,add,pinCode,state_l,city_l,country_l,comp_name,job_req,noof_emp,desp) => {
    var newRecuriterForm = recruiterloginDB.push();
    newRecuriterForm.set({
    firstn:firstn,
    lastn:lastn,
    email:email,
    add:add,
    pinCode:pinCode,
    state_l:state_l,
    city_l:city_l,
    country_l:country_l,
    comp_name:comp_name,
    job_req:job_req,
    noof_emp:noof_emp,
    desp:desp,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}