import React from "react";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';


function Login (){
  const navigate = useNavigate();
  const [inputs , setInputs ] = useState({});

  const changed = (e) =>{
      const name  = e.target.name;
      const value = e.target.value;

      
      setInputs(values => ({...values , [name]: value}));
  
  }

  const [data, setData] = useState([]);

  useEffect(() => {
      axios.get('http://localhost/login/conn/get.php')
          .then(response => {
              setData(response.data);
          })
          .catch(error => {
              console.error('Error:', error);
          });
  }, []);

  const submitData = (e) =>{
    e.preventDefault();

    const foundUser = data.find((user) => user.uname === inputs.uname && user.pass === inputs.pass);

    if (foundUser) {
      // Login successful - you can redirect to a different page here
      console.log('Login successful');
      navigate('/profile');
    } else {
      // Login failed - you can display an error message or redirect to an error page
      console.log('Login failed');
    }

}


    return(
      
        <div className="form">
     <form onSubmit={submitData}>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required onChange={changed}/>
         
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required onChange={changed}/>
        
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
<br/>
     <div className="button-container">
        <button >Sign up</button>
       </div>
   </div>
    );
}

export default Login;