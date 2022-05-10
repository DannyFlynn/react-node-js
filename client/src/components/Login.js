import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className='login-container'>
        <div className='form-field'>
            <form className='form-field'>
                <label>Username:</label>
                <input type='text' name='username'/>
                <label htmlFor='password' >Password:</label>
                <input type='password' name='password'/>
                <label htmlFor='passwordOne'>Re-type Password:</label>
                <input type='password' name='passwordOne' />
                <button className='btn'>login</button><Link to="/">Register</Link>
            </form>
        </div>
    </div>
  )
}

export default Login