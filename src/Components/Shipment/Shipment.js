import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [Phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate()
    

    const handleNameBlur = event => {
        setName(event.target.value)
    }
    

    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }

    const handlePhoneBlur = event => {
        setPhone(event.target.value)
    }

    

    const handleCreateUser = event => {
        event.preventDefault();

    }

    return (
        <div className='form-container'>
        <div>
            <form onSubmit={handleCreateUser}>
                <h2 className='form-title'>Shipping Information</h2>
                <div className='input-group'>
                    <label htmlFor="name">Your Name</label>
                    <input onBlur={handleNameBlur} type="text" name="" id="" required/>
                </div>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input value={user.email} readOnly  type="email" name="" id="" required/>
                </div>
                <div className='input-group'>
                    <label htmlFor="address">Address</label>
                    <input onBlur={handleAddressBlur} type="text" name=" " id="" required/>
                </div>
                <div className='input-group'>
                    <label htmlFor="phone">Phone</label>
                    <input onBlur={handlePhoneBlur} type="text" name=" " id="" required/>
                </div>
                
                <input className='form-submit' type="submit" value="Add Shipping" required/>
            </form>
            
        </div>
    </div>
    );
};

export default Shipment;