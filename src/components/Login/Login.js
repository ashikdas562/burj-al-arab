import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'


const Login = () => {
    return (
        <div className='login-form '>
            <div>
                <h2 className='m-1 mx-5'>Login</h2>
                 <Form>
                     <input className='m-1' type="email" name="" placeholder='Your Email' id="" />
                     <br />
                     <input className='m-1' type="password" name="" placeholder='Your password' id="" />
                     <br />
                     <Button className=' mx-5' variant='secondary'>Login</Button>
                 </Form>

                 <div className='mx-3'><p> <b>other way to login</b> </p></div>
                 <Button className='mx-3' variant='warning'>Google Sing IN </Button>

                 <br />
                 <p className='mt-2'><i>New to Burj AL Arab? <Link to="/register">Register</Link> </i> </p>
            


            </div>
        </div>
    );
};

export default Login;