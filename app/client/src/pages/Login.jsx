import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import Header from '../Layout/Header';
import { useFormik } from 'formik';
import * as Yup from 'yup';



const Login = () => {
  const [loginFailed, setLoginFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  console.log("rendering page")

  const submitHandler = async (values) => {
    setIsLoading(true);
    
    console.log("submitting form")
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
      if(!response.ok) {
        throw new Error("Request Failed");
      }
      setLoginFailed(false);
      
      navigate('/');
    } catch(error) {
      console.error(error);
      setLoginFailed(true);
    }
    setIsLoading(false);
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Required'),
      password: Yup.string()
        .required('Required')
    }),
    onSubmit: submitHandler
  });
      console.log(isLoading)
  const inputClasses = "w-full rounded p-1 outline-none border-b-2"
  return (
    <>
        <Header>Login</Header>
        <main className="w-full h-screen px-4 mt-20 md:px-10">
          {loginFailed && <Alert status='error' fontSize={16} >
            <AlertIcon />
            <AlertDescription>Invalid username or password </AlertDescription>
          </Alert>}
          {isLoading ? <Spinner /> :
          <form onSubmit={formik.handleSubmit} className="py-6 px-4 flex flex-col gap-4  bg-white h-full sm:gap-6 md:p-6 md:rounded-md md:gap-10 md:text-xl">
            <div>
              <input placeholder="Email" id="email" type="email" {...formik.getFieldProps('email')}   className={`${inputClasses}`}/>
              {formik.touched.email && formik.errors.email ? <p className="text-xs text-red-600">{formik.errors.email}</p> : null}
            </div>
            <div>
              <input placeholder="Password" id="password" type="password" {...formik.getFieldProps('password')}   className={`${inputClasses}`}/>
              {formik.touched.password && formik.errors.password ? <p className="text-xs text-red-600">{formik.errors.password}</p> : null}
            </div>
            <button type="submit" className=" bg-pink-600  text-white font-bold px-6 py-2 mt-4 rounded-3xl hover:shadow-lg hover:bg-violet-900">Submit</button>
          </form>}
        </main>


    </>
  )
}

export default Login