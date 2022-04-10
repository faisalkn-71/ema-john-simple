import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import './SignUp.css'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const [createUserWithEmailAndPassword, user, loading, hookError] = useCreateUserWithEmailAndPassword(auth)


    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    if(user){
        navigate('/')
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if(password !== confirmPassword){
            setError("Confirm password doesn't match!!!")
            return;
        }

        if(password.length>6){
            setError("Password must be contain 6 characters")
        }

        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div className='form-container'>
        <div>
            <form onSubmit={handleCreateUser}>
                <h2 className='form-title'>Sign Up</h2>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="" id="" required/>
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name=" " id="" required/>
                </div>
                <div className='input-group'>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input onBlur={handleConfirmPasswordBlur} type="password" name=" " id="" required/>
                </div>
                <p style={{color:'red'}}>{error}</p>
                <p style={{color:'red'}}>{hookError?.message}</p>
                <input className='form-submit' type="submit" value="Sign Up" required/>
            </form>
            <p>Already have an account? <Link className='form-link' to='/login'>Login</Link></p>
        </div>
    </div>
    );
};

export default SignUp;