import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import { apiUrl } from './loginPage';
import { useParams } from 'react-router-dom';

export function ChangePassword() {
    const [NewPassword, setNewPassword] = useState([]);
    const { token } = useParams();
    const changePasswordReq = () => {
        const changePassword = {
            password: NewPassword,
            token
        }
        axios({ url: `${apiUrl}/changepassword`, method: "POST", data: changePassword })
    }
    return (
        <div className='changePassword'>
            <TextField onChange={(event) => setNewPassword(event.target.value)} className="changePasswordfields" id="outlined-basic" label="New Password" variant="outlined" />
            <Button onClick={changePasswordReq} className="changePasswordfields" variant="contained">Submit</Button>
        </div>
    )
}