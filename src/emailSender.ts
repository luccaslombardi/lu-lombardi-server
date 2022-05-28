import nodemailer from 'nodemailer'

export interface SendMailData {
    name: string
    email: string
    subject: string
    body: string
}

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6c3ee8086d1915",
    pass: "b754c82135514c"
  }
});

export async function sendEmail({ name, email, subject, body }: SendMailData) {
    await transport.sendMail({
        from: `email`,
        to: 'luccas.lombardi@hotmail.com',
        subject: subject,
        html: [
          `<div style='font-family:sans-serif; text-align:center; font-size:16px; color:#222;'>`,
          `<p>Nome: ${name}</p>`,
          `<p>Email remetente: ${email}</p>`,
          `<p>Comentário: ${body}</p>`,
          `</div>`
      ].join('\n')
    })
}