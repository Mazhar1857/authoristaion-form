import { useState, useEffect } from 'react';
import React from 'react';
import './Form.css'
// import { data } from './data'

export default function Form() {

  const [value, setValue] = useState('')
  const [auth, setAuth] = useState(false);
  const [enter, setEnter] = useState('Enter the Password')


  const update = () => {
    // if (!auth) {
    //   setEnter('Enter correct password');
    // }

    setEnter(() => {
      if (!auth) {
        return 'Enter correct password'
      }
    })
  };

  const onChange = (event) => {
    const value = event.target.value;
    setValue(value)
  }

  const submitForm = (event) => {
    // event.preventDefault();
    // setValue(value);

    // const newAuth = value === 'ali';

    setAuth((preAuth) => {
      const newAuth = value === 'ali';
      return newAuth;
    }, () => {
      update();
    });

  }

  const onLogin = [
    <div className='form'>
      <form action="">
        <label className='label-password' htmlFor="password-field">{enter}</label>
        <input type="password" id='password-field' onChange={onChange} />
        {/* <input type="submit" className='submit-button' onClick={submitForm} /> */}
        <button className='submit-button' onClick={submitForm}>Submit</button>
      </form>
    </div>
  ]

  const contact = [
    <ul className='contact'>
      <li className='heading'>---contact info---</li>
      <li className='li'>client@example.com</li>
      <li className='li'>555.555.5555</li>
    </ul>
  ]

  return (
    <>
      {auth ? contact : onLogin}
    </>
  )
}
