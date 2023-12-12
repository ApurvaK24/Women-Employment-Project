const firebaseConfig = {
    apiKey: "AIzaSyB5BjeVxSEmDGBotSEEwvWF8Gm3tdSJKeY",
    authDomain: "profileemployee-1a8e5.firebaseapp.com",
    databaseURL: "https://profileemployee-1a8e5-default-rtdb.firebaseio.com",
    projectId: "profileemployee-1a8e5",
    storageBucket: "profileemployee-1a8e5.appspot.com",
    messagingSenderId: "1058072382239",
    appId: "1:1058072382239:web:9af35251b5715cd68d7e2a",
    measurementId: "G-W4VXR6Z268"
  };


//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var profileemployeeDB = firebase.database().ref("profileemployee");

document.getElementById("profileEmployee").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    var name_l=getElementVal("name_l");
    var emailID=getElementVal("emailID");
    var phone_no=getElementVal("phone_no");
    var age=getElementVal("age");
    var address_req=getElementVal("address_req");
    var job=getElementVal("job");
    var experience=getElementVal("experience");
    var interest=getElementVal("interest");
    var motive=getElementVal("motive");
    var looking_job=getElementVal("looking_job");
    var full_part=getElementVal("full_part");
    var Designation=getElementVal("Designation");
    var skill_posses=getElementVal("skill_posses");
    var salary=getElementVal("salary");

    saveMessages(name_l,emailID,phone_no,age,address_req,job,experience,interest,motive,looking_job,full_part,Designation,skill_posses,salary);

}

const saveMessages = (name_l,emailID,phone_no,age,address_req,job,experience,interest,motive,looking_job,full_part,Designation,skill_posses,salary) => {
    var newProfileEmployee = profileemployeeDB.push();
    newProfileEmployee.set({
        name_l:name_l,
        emailIB:emailID,
        phone_no:phone_no,
        age:age,
        address_req,address_req,
        job:job,
        experience:experience,
        interest:interest,
        motive:motive,
        looking_job:looking_job,
        full_part:full_part,
        Designation:Designation,
        skill_posses:skill_posses,
        salary:salary,


    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

