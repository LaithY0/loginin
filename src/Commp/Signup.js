import React, { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { FaPlus } from "react-icons/fa";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';


function Signup (){

    const navigate = useNavigate();

    const [inputs , setInputs ] = useState({});

    const changed = (e) => {
        const name = e.target.name;
        const fileInput = e.target;
    
        if (name === "photo") {
            // Extract just the filename from the full path
            const fileName = fileInput.value.split("\\").pop();
            // Add the path before the filename
            const filePath = "/img/" + fileName;
    
            // Create a new object to update the state
            const updatedInputs = { ...inputs, [name]: filePath };
            setInputs(updatedInputs);
        } else {
            // For other input fields, directly set the value in the state
            setInputs((values) => ({ ...values, [name]: e.target.value }));
        }
    };
    
    const submitData = (e) =>{
        e.preventDefault();


        console.log("Form Data:", inputs);

        const url = 'http://localhost/login/conn/add.php';

        axios.post(url , inputs)


            .then(response => {
                console.log("Response from PHP:", response.data);

                navigate('/');
                console.log(inputs)
            })
            .catch(error => {
                console.error("Error:", error);
            });

           

    }
    return(
      
        <div className="form">
        <form onSubmit={submitData}>
          <div className="input-container">
            <label>Name </label>
            <input type="text" name="name" required onChange={changed}/>
            
          </div>
          <div className="input-container">
            <label>Email </label>
            <input type="text" name="email" required onChange={changed}/>
            
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="password" required onChange={changed}/>
           
          </div>

          <div className="input-container">
            <label>Password </label>
            <input type="number" name="phone" required onChange={changed}/>
           
          </div>


          <div className="input-container">
            <label>Your photo</label>
            <input type="file" name="photo" required onChange={changed}/>
           
          </div>

          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
   <br/>

      </div>
        
    );
}

export default Signup;