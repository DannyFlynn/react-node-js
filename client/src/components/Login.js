import {Link} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { schema } from '../userValidations/logValidation';
import { yupResolver } from "@hookform/resolvers/yup";
import {useState} from 'react'
import  Axios from 'axios'


function Login({logStatus, logIn}) {

  const [login, setLogin] = useState([]);
  const [name, setName] = useState()

  const {register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });

  const submitLogForm = (data) => {
    Axios.post('http://localhost:3001/login', data)
    .then(response => {
      console.log(response.data);
      setLogin(response.data);
      logStatus(true)
      setName(response.data.username)
    })
   }

  return (
    <div className={logIn === false ? 'login-container' : 'member-message'} >
        {logIn === false ?
        <form className='form-field' onSubmit={handleSubmit(submitLogForm)}>
        <h4>{login.message}</h4>
        <label>Username:</label>
        <input type='text' name='username' {...register('username')}/>
        <p>{errors.username?.message}</p>

        <label >Password:</label>
        <input type='password' name='password' {...register('password')}/>
        <p>{errors.password?.message}</p>

        <button className='btn'>login</button><Link to="/">Register</Link>
      </form>
      : <h1 className='scheme'>Login success {name} please feel free to browse and sign up on our new Node book membership scheme</h1> }
    </div>
    
  )
}

export default Login