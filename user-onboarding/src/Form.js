import React from 'react'




function UserForm( props ) {

    const {
        values, 
        change, 
        submit, 
        disabled, 
        errors, 
    } = props


    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    // const change = (name, value) => {
    //     setFormValue({...formValue, [name]: value})
    // }

    const onChange = evt => {
        // debugger
        const { name, value, type, checked }  = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    // const submit = evt => {
    //     evt.preventDefault()
    //     const newUser = {
    //         userName: formValue.userName.trim(),
    //         userEmail: formValue.userEmail.trim(),
    //         userPassword: formValue.userPassword.trim(),
    //     }
    //     setUser([...user, newUser])
    //     setFormValue(initialFormValues)
    // }

    
    
    return  (
        <div className = 'container'>
            <h1>User Form</h1>


            {/* {
                user.map((user, idx) => {
                    return (
                        <div key={idx}>
                            {user.userName}
                            {user.userEmail}
                            {user.userPassword}
                        </div>    
                    )
                })
            } */}
            
            

            <div className = 'errors'>
                <div>{errors.userName}</div>
                <div>{errors.userEmail}</div>
                <div>{errors.userPassword}</div>
                <div>{errors.termsOfService}</div>
            </div>

            <form onSubmit = {onSubmit}>
                <input name='userName' placeholder='Name' type="text" value={values.userName} onChange={onChange} />
                <input name='userEmail' placeholder='Email' type="text" value={values.userEmail} onChange={onChange} />
                <input name='userPassword' placeholder='Password' type="text" value={values.userPassword} onChange={onChange} />
                <label> Accept Terms of Service
                    <input 
                        type = 'checkbox'
                        name = 'termsOfService'
                        checked = {values.termsOfService}
                        onChange = {onChange}
                    />
                </label>
            </form>    

            <button disabled ={disabled}>Submit</button>
            
        </div>
    )


}

export default UserForm