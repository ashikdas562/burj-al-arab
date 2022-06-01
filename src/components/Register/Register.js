import React from 'react';
import './Register.css'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='register-form'>
             <div>
                 <h2> Register </h2>
                 <Form>
                     <input className='m-1' type="email" name="" placeholder='Enter your Email' id="" />
                     <br />
                     <input className='m-1' type="password" name="" placeholder='Create password' id="" />
                     <br />
                     <input className='m-1' type="password" name="" placeholder='Confrim Password' id="" />
                     <br />
                    <Button className='mx-5' variant='secondary' >Register</Button>
                 </Form>
                 <div>
                     <p><b>Other way to Register</b></p>
                 </div>
                 <Button variant='warning'>Register With Google</Button>
                 <br />
                 <p><i>Already have an Account? <Link to="/login">Login</Link></i></p>
             </div>
        </div>
    );
};

export default Register;