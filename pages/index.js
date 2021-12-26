import Headl from '../components/Head'
import CookieStandAdmin from '../components/CookieStandAdmin';
import LoginForm from '../components/LoginForm'
import React, { useState } from "react";
import axios from 'axios';

const baseUrl =process.env.NEXT_PUBLIC_COOKIES_API;
const tokenUrl = baseUrl+'api/token/';


 const Home=(props)=> {

  const [token, setToken] = useState('');


  const submitHandler = async (e)=>{
    e.preventDefault();
    const data = {
      username: (e.target.username.value),
      password: (e.target.password.value),
    };
  
    e.preventDefault();
    axios.post(tokenUrl,data).then(data=>{
      setToken(data.data.access)
    });
    console.log(token)
  }
  if (!token) return <LoginForm submitHandler={submitHandler}/>
  return (<CookieStandAdmin token={token}/>
     )

}
export default Home