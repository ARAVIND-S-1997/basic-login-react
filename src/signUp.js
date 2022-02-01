import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import { apiUrl } from './loginPage';
import { useHistory } from 'react-router-dom';

export function SignUp() {
    const [UserName, setUserName] = useState([]);
    const [EmaiilId, setEmailId] = useState([]);
    const [Dob, setDob] = useState([]);
    const [Password, setPassword] = useState([]);
    const history = useHistory();
    const SignupReq = () => {
        const signupData = {
            userName: UserName,
            emailId: EmaiilId,
            dob: Dob,
            password: Password
        }
        axios({ url: `${apiUrl}/signup`, method: "POST", data: signupData })
            .then(() => { history.push("/") })
            .catch()
    }
    return (
        <div className="SignUPContentContainer">
            <h1 className="signUpTitle">Sign Up</h1>
            <TextField onChange={(event) => setUserName(event.target.value)} className="signUpfields" id="outlined-basic" label="Username" variant="outlined" />
            <TextField onChange={(event) => setEmailId(event.target.value)} className="signUpfields" id="outlined-basic" label="Email Id" variant="outlined" />
            <TextField onChange={(event) => setDob(event.target.value)} className="signUpfields" id="outlined-basic" label="Date of Birth" variant="outlined" />
            <TextField onChange={(event) => setPassword(event.target.value)} className="signUpfields" id="outlined-basic" label="Password" variant="outlined" />
            {/* <TextField className="signUpfields" id="outlined-basic" label="ConFirm Password" variant="outlined" /> */}
            <Button onClick={SignupReq} className="signUpfields" variant="contained">Sign Up</Button>
            <p className='note'>Note:Enter the Date of Birth in DD/MM/YYYY format </p>
        </div>
    )
}
