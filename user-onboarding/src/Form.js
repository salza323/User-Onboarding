import React, { useState } from 'react'


const initialFormValues = {
    name: '',
    email: '', 
    password: '',
    terms: false,
}

function UserForm() {
    const [user, setUser] = useState([])
    const [formValue, setFormValue] = useState(initialFormValues)

    const onChange = evt => {
        // debugger
        const { name, value, type, checked }  = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        onChange(name, valueToUse)
    }

    const submit = evt => {
        const newUser = {
            userName: formValue.userName.trim(),
            userEmail: formValue.userEmail.trim(),
            userPassword: formValue.userPassword.trim(),
        }
        setUser([...user, newUser])
        setFormValue(initialFormValues)
    }

    
    
    return  (
        <div className = 'container'>
            <h1>User Form</h1>

            {
                user.map((user, idx) => {
                    return (
                        <div key={idx}>
                            {user.userName}
                            {user.userEmail}
                            {user.userPassword}
                        </div>    
                    )
                })
            }

            <form onSubmit = {submit}>
                <input name='userName' placeholder='Name' type="text" value={formValue.userName} onChange={onChange} />
                <input name='userEmail' placeholder='Email' type="text" value={formValue.userEmail} onChange={onChange} />
                <input name='userPassword' placeholder='Password' type="text" value={formValue.userPassword} onChange={onChange} />
                <label> Accept Terms of Service
                    <input 
                        type = 'checkbox'
                        name = 'terms of service'
                        checked = {initialFormValues.terms}
                        onChange = {onChange}
                    />
                </label>
                <button>Submit</button>
            </form>    

        </div>
    )


}

export default UserForm