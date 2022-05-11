import { useForm } from 'react-hook-form';
import { schema } from '../userValidations/regValidation';
import { yupResolver } from "@hookform/resolvers/yup";
import {useState} from 'react'
import { Link } from 'react-router-dom';
import  Axios from 'axios'


function Registration() {
    const [success, setSuccess] = useState([])
    const  { register, handleSubmit, formState: { errors } } = useForm({
       resolver: yupResolver(schema) 
    });

    const submitRegForm = (data) => {
        Axios.post('http://localhost:3001/reg', data)
        .then(response  => {
          console.log(response.data)
            setSuccess(response.data)}
          )
        }

  return (
    <div className='reg-container'>
        <form onSubmit={handleSubmit(submitRegForm)} className='form-field'>   
                <h4>{success.message}</h4>
                <label >Username:</label>
                <input type='text' name='username' {...register('username')} />
                <p>{errors.username?.message}</p>

                <label>Password:</label>
                <input type='password' name='password' {...register('password')} />
                 <p>{errors.password?.message}</p>

                <label>Re-type Password:</label>
                <input type='password' name='passwordOne' {...register('passwordOne')} />
                <p>{errors.passwordOne && "PASSWORD DOES NOT MATCH"}</p>

                <button className='btn'>Register</button>
                <Link to="/login">Login</Link>
        </form>
    </div>
  )
}

export default Registration