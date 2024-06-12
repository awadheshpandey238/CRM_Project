import React, { useState } from 'react';
import { auth, googleProvider } from '../firebase';

const Login = () => {
    const [error, setError] = useState('');

    const signInWithGoogle = async () => {
        try {
            await auth.signInWithPopup(googleProvider);
        } catch (error) {
            setError('Failed to sign in with Google');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    );
};

export default Login;
