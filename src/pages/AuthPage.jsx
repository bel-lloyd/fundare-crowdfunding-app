import React, { useState } from 'react';
import LoginForm from '../components/LoginForm/LoginForm';

function AuthPage() {
    const [isRegistering, setIsRegistering] = useState(false)

    const ToggleButton = () => {
        return (
            <button onClick={() => setIsRegistering(!isRegistering)}>Sign up</button>
        )
    }

    return (
        <div>
            {
            isRegistering 
            ? (<div class="login-page">      
                <h2>Register for Fundare</h2>
                <LoginForm/>
                <h3>Already have an account? Click below to login.</h3>
                <ToggleButton/>
            </div>)
            : (<div class="login-page">      
                <h2>Login to Fundare</h2>
                <LoginForm/>
                <h3>Not yet registered? Click below to get started.</h3>
                <ToggleButton/>
            </div>)
            }
        </div>
    )
}

export default AuthPage;

