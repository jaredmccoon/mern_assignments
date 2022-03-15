import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [conpassword, setConpassword] = useState("");  
    
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, conpassword };
        console.log("Welcome", newUser);
    };
    
    return(
        <>
            <form onClick={ createUser } >
                <div>
                    <label>firstname: </label> 
                    <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
                </div>
                <div>
                    <label>lastname: </label> 
                    <input type="text" onChange={ (e) => setLastname(e.target.value) } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>confirm Password: </label>
                    <input type="text" onChange={ (e) => setConpassword(e.target.value) } />
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