//class-based component

import React, {Component} from 'react';
import Details from "./Details";
import Question from './Question';
import {v4 as uuidv4} from "uuid";
import { getDatabase } from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGIbiN0hGdtPU-YC66Uh3mVkY0LWK9D10",
  authDomain: "survey-app-a52d1.firebaseapp.com",
  projectId: "survey-app-a52d1",
  storageBucket: "survey-app-a52d1.appspot.com",
  messagingSenderId: "912489898535",
  appId: "1:912489898535:web:eb39590db33fe30cdca402"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);



export class Container extends Component{
constructor(props){
    super(props);
    this.state={
        id: uuidv4(),
       name: null,
       email: null,
       questions:[{
        q1: null,
        q2: null,
       // q3: null,
       }],
       isSubmitted: false,
    };
}

detailSubmitHandler = (event) =>{
    const name= event.target.name.value;
    const email=event.target.name.value;
    this.setState({name,email});
    event.preventDefault();
};

questionSubmitHandler= (event)=>{
    const questions ={};
    questions.q1= event.target.q1.value;
    questions.q2= event.target.q2.value;

    this.setState({questions}, ()=>{
        console.log(event.target);
    });
    event.preventDefault();
    const database = getDatabase(app);
    database.ref("survey/"+this.state.id).set({
name: this.state.name,
email: this.state.email,
questions: this.state.questions,
    });
};

    render()
    {
        return(
            <>
            <div className="container-fluid">
                <div className="container card mt-2">
                    <h1 className="text-center text-pimary">SURVEY APP</h1>

                </div>
            </div>
            {
                (this.state.name === null && this.state.email ===null) ? 
                (<Details submit={this.detailSubmitHandler}></Details>) : 
                (<Question submit={this.questionSubmitHandler}></Question>)
            }
            
            </>
        );
    }
}

export default Container;