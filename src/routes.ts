import express from 'express'
import { sendEmail, SendMailData } from './emailSender';


export const routes = express.Router();


routes.post('/sendEmail', async (req, res) => {
    const {name, email, subject, body} = req.body

    try {
        sendEmail({name,email,subject, body})
        return res.send(201)
    } catch (error) {
        return res.send("deu errado")
    }
    
    

    
})
