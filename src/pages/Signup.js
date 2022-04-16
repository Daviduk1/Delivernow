import React, {useState, useContext, useEffect} from 'react'
import './SignUp.css'
import UserContext from '../context/UserContext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  


  const {user, setUser} = useContext(UserContext)

  useEffect(()=>{
    if (user.firstName){
      navigate('/dashboard')
    }
  })

  const onSubmit = (e) => {
    e.preventDefault()
    
    const newUser = {username, firstName, lastName, email}
    //const url = 'https://kcko7eyme8.execute-api.us-east-1.amazonaws.com/dev/deliverynow/orders'
    const url = 'https://kcko7eyme8.execute-api.us-east-1.amazonaws.com/dev/deliverynow/account/signup'
    
    axios.post(url, newUser, {header:{ 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json' }})// {newUser})
    .then(response => {
        
        console.log(response.data)
        
      })
    .catch(err => console.log(err))

    setUser(newUser)
    setTimeout(()=>{
      navigate(`/dashboard`)
    }, 2000)
    
  }

  return (
    <div className='formcontainer'>
      <form className='form mt-4'>
        <h2 className='text-center'>Register</h2>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">User Name</label>
    <input type="email" class="form-control" 
      id="exampleInputEmail1" 
      aria-describedby="emailHelp"
      value={username} 
      onChange={e =>setUsername(e.target.value)}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">First Name</label>
    <input type="password" class="form-control" 
    id="exampleInputPassword1" 
    value={firstName}
    onChange={e=>setFirstName(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Last Name</label>
    <input type="password" class="form-control"
     id="exampleInputPassword1" 
     value={lastName} 
     onChange={e=>setLastName(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="password" class="form-control" 
    id="exampleInputPassword1" 
    value={email} 
    onChange={e=>setEmail(e.target.value)}/>
  </div>
  
  <button type="submit"onClick={onSubmit} class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
export default Signup
