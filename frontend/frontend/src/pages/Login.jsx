import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isError, setIsError] = useState(false)
    const [errMessage, setErrMessage] = useState("")

    const navigate = useNavigate();
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const login = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8000/auth/login", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ email, password })
        })

        const result = await response.json()

        if (result.success) {
            navigate("/dashboard")
        } else {
            setIsError(true)
            setErrMessage(result.message)
        }
    }
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="col-md-4">
                <div className="card" style={{ boxShadow: 'rgba(0,0,0,0.12) 0px 4px 16px ' }}>
                    <div className="card-body">
                        <h4 className="text-center">Login</h4>
                        <form onSubmit={login}>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="text" className="form-control" value={email} onChange={onEmailChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" value={password} onChange={onPasswordChange} />
                            </div>
                            <input type="submit" className="btn-btn-primary w-100" value="Login" style={{ background: '#009688', border: '1px solid #009688', color: '#fff' }} />
                        </form>
                        {isError && <div className="mb-3">
                            <h4 style={{ color: "red" }}>{errMessage}</h4>
                        </div>}
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Login