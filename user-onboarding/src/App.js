import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import * as yup from 'yup'

import UserForm from './Form'
import schema from './validation/FromSchema'
// import { useState, useEffect } from 'react';


const initialFormValues = {
  userName: '',
  userEmail: '', 
  userPassword: '',
  termsOfService: false,
}

const initialFormErrors = {
  userName: '',
  userEmail: '', 
  userPassword: '',
}
const iniitialUsers = []
const initialDisabled = true

function App() {
  const [user, setUser] = useState([])
  const [formValue, setFormValue] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled) 

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/user', newUser)
      .then(res => {
        setUser([...user, res.detail])
        setFormValue(initialFormValues)
      })
      .catch(err => {
        debugger
        console.log(err)
      })
      .finally(() => {
      })   
    }    
      const validate = (name, value) => {
        yup.reach(schema, name)
        .validate(value)
        .then(valid => {
          setFormErrors({
            ...formErrors,
            [name]: ''
          })
        })
        .catch(err => {
          setFormErrors({
            ...formErrors,
            [name]: err.errors[0]
          })
        })
      }

      const inputChange = (name, value) => {
        validate(name, value)
        setFormValue({
          ...formValue,
          [name]: value
        })
      }

      const formSubmit = () => {
        const newUser = {
          userName: formValue.userName.trim(),
          email: formValue.email.trim(),
          password: formValue.password.trim(),
          termsOfService: formValue.termsOfService,
        }
        postNewUser(newUser)
      }

      useEffect(() => {
        getUsers()
      }, [])

      useEffect(() => {
        schema.isValid(formValue)
        .then(valid => {
          setDisabled(!valid)
        }, [formValue])
      })
  }




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserForm 
              values={formValue}
              change={inputChange}
              submit={formSubmit}
              disabled={disabled}
              errors={formErrors}
        />
        
      </header>
    </div>
  );


export default App;
