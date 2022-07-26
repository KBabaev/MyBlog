import './Auth.css'
import Logo from '../../img/logo.png'

const LogIn = () => {
    return (
        <div className='a-right'>
            <form className="infoForm authForm">
                <h3>Log in</h3>
                <div>
                    <input type="text"
                           placeholder='Firstname'
                           className='infoInput'
                           name='firstName'
                    />
                    <input type="text"
                           placeholder='Lastname'
                           className='infoInput'
                           name='lastName'
                    />
                </div>
                <div>
                    <input type="text"
                           placeholder='Username'
                           className='infoInput'
                           name='userName'
                    />
                </div>
                <div>
                    <input type="text"
                           placeholder='Password'
                           className='infoInput'
                           name='password'
                    />
                    <input type="text"
                           placeholder='Confirm password'
                           className='infoInput'
                           name='confirmPassword'
                    />
                </div>

                <div>
                    <span style={{fontSize: '12px'}}>Already have an account. Sign up!</span>
                </div>

                <button className="button infoButton" type='submit'>Login</button>
            </form>
        </div>
    )
}

const Auth = () => {
    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt=''/>
                <div className='webName'>
                    <h1>React Blog</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>

            <LogIn/>
        </div>
    );
}

export default Auth

