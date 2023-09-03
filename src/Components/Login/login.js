import React from 'react';
//import "./login.css";
import "./LoginPage.js";
import LoginPage from './LoginPage.js';

class Login extends React.Component {
    
    state = {  } 
    render() { 
        return (
            <>
            <div className='login'>
                {/* <img src="G:\React\advaya.jpg"/> */}

                <LoginPage/>

            </div>
            </>
        );
    }
}
 
export default Login;

