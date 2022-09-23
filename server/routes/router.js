const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");

router.post("/register",(req,res)=>{
    

    try {
        const { fullName,email,message} = req.body
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL,
                pass:process.env.PASSWORD
            }
        });
        const mailOptions = {
            from : process.env.EMAIL,
            to : process.env.EMAIL,
            subject : "send email success",
            html :
            `<p>FullName: <b>${fullName}</b></p>
            <p>Email: <b>${email}</b></p>
            <p>Message: <i>${message}</i></p>`
        };
        transporter.sendMail(mailOptions,(error,info)=>{
            if (error) {
                console.log("Erreur", error)
            }else{
                console.log("Email envoyé" + info.response);
                res.status(201).json({status:201,info})
            }
        })
    } catch (error) {
        res.status(201).json({status:401,error})
    }
});

module.exports = router;