import "./register.scss"

const Register: React.FC = () => {
  return (
    <div className='register'>
      <div className='top'>
        <div className='wrapper'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
            alt=''
            className='logo'
          />
          <button className='loginButton'>Sign In</button>
        </div>
      </div>
      <div className='container'>
        <h1>Unlimited movies, TV shows and more.</h1>
        <h2>Watch anywhere. Cancel Anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className='input'>
          <input type='email' placeholder='email address' />
          <button className='registerButton'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Register
