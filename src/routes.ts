import express from 'express'
import { sendEmail } from './emailSender';


export const routes = express.Router();


routes.post('/sendEmail', async (req, res) => {
    const {name, email, subject, body} = req.body

    try {
        sendEmail({name,email,subject, body})
        return res.send("E-mail enviado")
    } catch (error) {
        return res.send("deu errado")
    }
    
    

    
})
