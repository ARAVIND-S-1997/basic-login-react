import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useHistory } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

// heroku link
export const apiUrl = "https://basic-login-apps.herokuapp.com/user"
// export const apiUrl = "http://localhost:9000/user"


export function Login() {
    const [EmailId, setEmailId] = useState([]);
    const [Password, setPassword] = useState([]);
    const history = useHistory();
    const loginReq = () => {
        const loginData = {
            emailId: EmailId,
            password: Password
        }
        axios({ url: `${apiUrl}/login`, method: "POST", data: loginData })
            .then(() => { history.push("/welcome") })
            .catch()
    }

    return (
        <div className="loginContentContainer">
            <h1 className="loginTitle">Login</h1>
            <TextField onChange={(event) => setEmailId(event.target.value)} className="loginfields" id="outlined-basic" label="Email Id" variant="outlined" />
            <TextField onChange={(event) => setPassword(event.target.value)} className="loginfields" id="outlined-basic" label="Password" variant="outlined" />
            <Button onClick={loginReq} className="loginfields" variant="contained">login</Button>
            <Link to="/forgetpassword">Forget password</Link>
            <Link to="/signup">Sign Up</Link>
        </div>
    )
}