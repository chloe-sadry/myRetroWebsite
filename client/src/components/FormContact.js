import React, { useState } from 'react';


const FormContact = () => {

    const [email, setEmail] = useState("")
    const [fullName, setFullName] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = async(e)=>{
        e.preventDefault()
        const res = await fetch("/register",{
            method : "POST",
            headers : {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                fullName,
                email,
                message
            })
        });
        
        const data = await res.json();
        console.log(data);

        if(data.status === 401 || !data){
            console.log("error")
        }else{
            
            console.log("Email envoyé");
            setFullName("")
            setEmail("")
            setMessage("")
        }
    }
    return (
        <>
            
            <div className='form-contact'>
                <form>

                    <label>Prénom / Nom</label>
                    <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    type="text"
                    placeholder="Prénom Nom"
                    className="fullname"
                    />

                    <label htmlFor="email">Enter your email :</label>
                    <input type="email" placeholder="E-mail" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    
                    <label>Message</label>
                    <textarea
                    required
                    placeholder="Comment puis je vous aider ?"
                    rows={3}
                    className="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />
                    
                    <input type="submit" value="Envoyer" onClick={sendEmail}/>

                </form>

            </div>
        
        </>
    );
};

export default FormContact;