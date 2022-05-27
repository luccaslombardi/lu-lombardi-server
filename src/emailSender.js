import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: "luccaswebsite@gmail.com",
    pass: "Luccasweb123",
  },
});

export async function sendEmail({ name, email, subject, body }) {
  await transport.sendMail({
    from: `${name} <${email}>`,
    to: "luccas.lombardi@hotmail.com",
    subject: subject,
    html: [
      `<div style='font-family:sans-serif; text-align:center; font-size:16px; color:#222;'>`,
      `<p>Nome: ${name}</p>`,
      `<p>Email remetente: ${email}</p>`,
      `<p>Comentário: ${body}</p>`,
      `</div>`,
    ].join("\n"),
  });
}
