import React from 'react'

function Register() {
  return (
    <div>
         <div className='formcard'>
                    <div>
                    <h2 style={{alignSelf:'center'}}>Register</h2>
                    </div>
                    <div>
                        <label>
                            Name
                        </label>
                        <input type="text"
                            placeholder='Enter your name' />
                    </div>
                    <div>
                        <label>
                            Email
                        </label>
                        <input type="email"
                            placeholder='Enter your email' />
                    </div>
                    <div>
                        <label>
                            Password
                        </label>
                        <input type="password"
                            placeholder='Enter your password' />
                    </div>
                    <div>
                        <label>
                            Confirm Password
                        </label>
                        <input type="password"
                            placeholder='Confirm your password' />
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </div>
    </div>
  )
}

export default Register