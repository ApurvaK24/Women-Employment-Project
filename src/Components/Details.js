//function based

import React from 'react';
import "./Details.css";
export default function Details(props)
{
    return(
        <div>
        <form classNmae="f2" onSubmit={props.submit}>
  <div class="form-group">
    <label for="exampleInputEmail1" required>Email address</label>
    <input required name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Name</label>
    <input required name="name" type="text" class="form-control" id="exampleInputPassword1" placeholder="Name"></input>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
    );
}