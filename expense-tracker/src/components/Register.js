import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../asset/css/Register.css';

function Register() {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({})
        const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({ ...values, [name]: value }))
        }
    
        const doRegister = (event) => {
            event.preventDefault();
            console.log("clicked", inputs);
            navigate("/dashboard");
        }
    

    return ( 
        <div className='maincontainer'>
            <div className='formcard'>
                <div>
                    <h2 style={{ alignSelf: 'center' }}>Register</h2>
                </div>
                <form onSubmit={doRegister}>
                <div>
                    <label>
                        Name
                    </label>
                    <input
                        required 
                        type="text"
                        placeholder='Enter your name'
                        value={inputs.name || ''}
                        onChange={handleChange}
                        name='name'
                        />
                </div>
                <div>
                    <label>
                        Email
                    </label>
                    <input 
                        required
                        type="email"
                        placeholder='Enter your email'
                        value={inputs.email || ''}
                            onChange={handleChange}
                            name='email'
                            />
                </div>
                <div>
                    <label>
                        Password
                    </label>
                    <input 
                        required
                        type="password"
                        placeholder='Enter your password'
                        value={inputs.pass || ''}
                            onChange={handleChange}
                            name='pass'
                            />
                </div>
                <div>
                    <label>
                        Confirm Password
                    </label>
                    <input 
                        required
                        type="password"
                        placeholder='Confirm your password' 
                        value={inputs.cnfpass || ''}
                        onChange={handleChange}
                        name='cnfpass'
                        />
                </div>
                <div>
                    <button>Submit</button>
                </div>
                <div>
                    <span style={{ alignSelf: 'center' }}>
                        Already a user? <Link to="/">Login</Link>
                    </span>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Register