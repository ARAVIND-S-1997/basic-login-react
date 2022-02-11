import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { apiUrl } from './loginPage';
import axios from 'axios';

export function ForgetPassword() {
    const [EmailId, setEmailId] = useState([]);
    console.log(EmailId)
    const sendRequest = () => {
        const userEmailId = {
            emailId: EmailId
        }
        console.log(userEmailId)
        axios({ url: `${apiUrl}/forgetpassword`, method: "POST", data: userEmailId })
            .catch()
    }
    return (
        <div className='forgetPasswordContentContainer'>
            <h1 className="forgetPasswordTitle">Forget Password</h1>
            <TextField onChange={(event) => setEmailId(event.target.value)} className="forgetPasswordfields" id="outlined-basic" label="Email Id" variant="outlined" />
            <Button onClick={sendRequest} className="forgetPasswordfields" variant="contained">Send</Button>
        </div>
    )
};
