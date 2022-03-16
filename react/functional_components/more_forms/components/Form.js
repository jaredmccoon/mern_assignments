import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [conpassword, setConpassword] = useState("");  
    const [firstnameError, setFirstnameError] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [conpasswordError, setConpasswordError] = useState("");
    
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, conpassword };
        console.log("Welcome", newUser);
    };


    
    const handleFirstname = (e) => {
        setFirstname(e.target.value)
        if(e.target.value.length < 2 && e.target.value.length !== 0){
            setFirstnameError("name error")
        }else{
            setFirstnameError("")
        }
    }

    const handleLastname = (e) => {
        setLastname(e.target.value)
        if(e.target.value.length < 2 && e.target.value.length !== 0){
            setLastnameError("name error")
        }else{
            setLastnameError("")
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        if(e.target.value.length < 5 && e.target.value.length !== 0){
            setEmailError("email error")
        }else{
            setEmailError("")
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 8 && e.target.value.length !== 0){
            setPasswordError("password error")
        }else{
            setPasswordError("")
        }
    }

    const handleConpassword = (e) => {
        setConpassword(e.target.value)
        if(e.target.value.length < 8 && e.target.value.length !== 0){
            setConpasswordError("password error")
        }else{
            setConpasswordError("")
        }
    }

    return(
        <>
            <form onClick={ createUser } >
                <div>
                    <label>firstname: </label> 
                    <input type="text" onChange={handleFirstname} />
                    {
                        firstnameError?
                        <p>{firstnameError}</p>:
                        ""
                    }
                </div>
                <div>
                    <label>lastname: </label> 
                    <input type="text" onChange={handleLastname} />
                    {
                        lastnameError?
                        <p>{lastnameError}</p>:
                        ""
                    }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={handleEmail} />
                    {
                        emailError?
                        <p>{emailError}</p>:
                        ""
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={handlePassword} />
                    {
                        passwordError?
                        <p>{passwordError}</p>:
                        ""
                    }
                </div>
                <div>
                    <label>confirm Password: </label>
                    <input type="text" onChange={handleConpassword} />
                    {
                        conpasswordError?
                        <p>{conpasswordError}</p>:
                        ""
                    }
                </div>
                <input type="submit" value="Create User" />
                <div>Your form data</div>
            </form>
            <div>
                <p>firstname: { firstname }</p>
                <p>lastname: { lastname }</p>
                <p>email: { email }</p>
                <p>password: { password }</p>
                <p>confirm password: { conpassword }</p>
            </div>
        </>
    );
};
    
export default UserForm;