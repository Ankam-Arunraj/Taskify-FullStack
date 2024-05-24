import { useState } from "react"
import {useNavigate} from "react-router-dom"




function Signup(){
    const [userAuth,setUserAuth] = useState({email:"",fullName:"",password:"",rePassword:""})
    const [errors,setErrors] = useState({})
    const [isError,setIsError] = useState(false)
    const [errMessage,setErrMessage] = useState("")
    const navigate = useNavigate()


    const onFieldChange = (e)=>{
        console.log(e.target.name,e.target.value)
        setUserAuth((prevState)=>{
            return{
                ...prevState,
                [e.target.name]:e.target.value
            }
        })
    }

    const validateFormFields = ()=>{
        let errors = {}
        if(!userAuth.fullName){
            errors.fullName = "Please enter full Name"
        } if(!userAuth.email){
            errors.email = "Please enter email"
        } if(!userAuth.password){
            errors.password = "Please enter password"
        } if(!userAuth.rePassword){
            errors.rePassword = "Please enter confirm Password"
        }
        return errors
    }
    const register = async(e)=>{
        e.preventDefault();
        let errors = validateFormFields();
        setErrors(errors)
        // console.log(userAuth)
        // const response = await fetch("http://localhost:8000/auth/signup", {
        //     method: "POST",
        //     headers: { "Content-type": "application/json" },
        //     body: JSON.stringify(userAuth)
        // })

        // const result = await response.json()

        // if (result.success) {
        //     navigate("/login")
        // } else {
        //     setIsError(true)
        //     setErrMessage(result.message)
        // }
    }
    return (
        <div className="d-flex justify-content-center align-items-center" style={{minHeight:'100vh'}}>
            <div className="col-md-4">
                <div className="card" style={{boxShadow:'rgba(0,0,0,0.12) 0px 4px 16px '}}>
                    <div className="card-body">
                        <h4 className="text-center">Signup</h4>
                        <form onSubmit={register}>
                            <div className="mb-3">
                                <label  className="form-label">Name</label>
                                <input type="text" className="form-control" value={userAuth.name} onChange={onFieldChange} name="fullName"/>  
                            </div>
                            <p className="error-text">{errors.fullName}</p>
                            <div className="mb-3">
                                <label  className="form-label">Email</label>
                                <input type="text" className="form-control"  value={userAuth.email} onChange={onFieldChange} name="email" />  
                            </div>
                            <p className="error-text">{errors.email}</p>
                            <div className="mb-3">
                                <label  className="form-label">Password</label>
                                <input type="password" className="form-control"  value={userAuth.password} onChange={onFieldChange} name="password"/>  
                            </div>
                            <p className="error-text">{errors.password}</p>
                            <div className="mb-3">
                                <label  className="form-label">Re-enter Password</label>
                                <input type="password" className="form-control"  value={userAuth.rePassword} onChange={onFieldChange} name="rePassword"/>  
                            </div>
                            <p className="error-text">{errors.rePassword}</p>
                            {isError &&<div className="mb-3">
                                <h4 style={{color:"red"}}>{errMessage}</h4>
                            </div>}

                            <input type="submit" className="btn-btn-primary w-100" value="Signup" style={{background:'#009688',border:'1px solid #009688',color:'#fff'}}/>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Signup