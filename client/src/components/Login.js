
function Login() {
  return (
    <div className='login-container'>
        <div className='form-field'>
            <h2>Login</h2>
            <form>
                <label htmlFor='username'>Username:</label>
                <input type='text' name='username'/>
                <label htmlFor='password' >Password:</label>
                <input type='password' name='password'/>
                <label htmlFor='passwordOne'>Re-type Password:</label>
                <input type='password' name='passwordOne' />
            </form>
        </div>
    </div>
  )
}

export default Login