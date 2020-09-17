import * as yup from 'yup'

export default yup.object().shape({
    userName: yup.string()
        .required('Username is required'), 
    userEmail: yup.string()
        .email('Must be a valid Email')
        .required('Email is required'),
    userPassword: yup.string()
        .required('Password is required'),
    termsOfService: yup.boolean(),
})