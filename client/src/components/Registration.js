import { useForm } from 'react-hook-form';
import { schema } from '../validations/regValidation';
import { yupResolver } from "@hookform/resolvers/yup";


function Registration() {

    const  { register, handleSubmit, formState: { errors } } = useForm({
       resolver: yupResolver(schema) 
    });

    const submitForm = (data) => {
             console.log(data)
    }

  return (
    <div className='reg-container'>
        <form onSubmit={handleSubmit(submitForm)} className='form-field'>   
                
                <label >Username:</label>
                <input type='text' name='username' {...register('username')} />
                <p>{errors.username?.message}</p>
                <label htmlFor='password' >Password:</label>
                <input type='password' name='password' {...register('password')} />
                 <p>{errors.password?.message}</p>
                <label htmlFor='passwordOne'>Re-type Password:</label>
                <input type='password' name='passwordOne' {...register('passwordOne')} />
                <p>{errors.passwordOne && "PASSWORD DOES NOT MATCH"}</p>
                <button className='btn'>Register</button>
        </form>
    </div>
  )
}

export default Registration