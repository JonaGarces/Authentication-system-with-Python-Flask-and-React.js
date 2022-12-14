import React, { useEffect, useState, } from 'react';
import { Link } from 'react-router-dom';


const SignUp = () => {
    const url = 'https://restcountries.com/v3.1/all'
    const [formData, setFormData] = useState(null);
    const [alert, setAlert] = useState(false)
    const [errorAlert, setErrorAlert] = useState(false)

    const handleChange = (e) => {
        if (!e.target.value) return;

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        //console.log(formData)
    };

    const createUser = async (e) => {
        e.preventDefault();
        try {
            //console.log("attempt to fetch")

            const response = await fetch(`${process.env.BACKEND_URL}/api/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json()
            setAlert(true)
            setErrorAlert(false)
        } catch (error) {
            console.log(error)
            setErrorAlert(true)
            setAlert(false)
        }

    }

    return (

        <form onSubmit={(e) => createUser(e)} >
            <div className='full-account1'>
                <div className='container'>
                    <h1 className='mt-3 mb-2 text-center'>CREA TU CUENTA</h1>

                    <div className='row my-3'>
                        <div className='col-lg-4 col-12 mb-5 mx-auto'>
                            <label htmlFor='firstname' className='form-label'>Nombre</label>
                            <input type='text' className='form-control' id='firstname' name='firstname' required onChange={(e) => handleChange(e)} />
                        </div>
                        <div className='col-lg-4 col-12 mb-5 mx-auto'>
                            <label htmlFor='lastname' className='form-label'>Apellido</label>
                            <input type='text' className='form-control' id='lastname' name='lastname' required onChange={(e) => handleChange(e)} />
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-lg-4 col-12 mb-5 mx-auto'>
                            <label htmlFor='email' className='form-label'>Correo</label>
                            <input type='email' className='form-control' id='email' aria-describedby='emailHelp' name='email' placeholder='example@example.com' required onChange={(e) => handleChange(e)} />
                        </div>
                        <div className='col-lg-4 col-12 mb-5 mx-auto'>
                            <label htmlFor='password' className='form-label'>Contrase??a</label>
                            <input type='password' className='form-control' id='password' name='password' required onChange={(e) => handleChange(e)} />
                        </div>

                    </div>

                    <button type='submit' style={{ backgroundColor: '#336b87', color: 'white' }} className='btn mb-3 d-flex mx-auto'>Ingresar</button>
                    {alert && (<div className='row '>
                        <div className='col-12 bg-success text-white p-3 mx-auto d-flex justify-content-center' >User created! You can&nbsp;<Link to="/" className='text-white'>
                            <strong > Log in</strong>
                        </Link>&nbsp;now</div></div>)}
                    {errorAlert && (<div className='row '>
                        <div className='col-12 bg-danger text-white p-3 mx-auto d-flex justify-content-center' >Error! User not created. Try again</div></div>)}
                </div >
            </div >
        </form >

    )
}

export default SignUp;