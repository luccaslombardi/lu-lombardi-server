"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
        user: "luccaswebsite@gmail.com",
        pass: "Luccasweb123"
    }
});
function sendEmail({ name, email, subject, body }) {
    return __awaiter(this, void 0, void 0, function* () {
        yield transport.sendMail({
            from: `${name} <${email}>`,
            to: 'luccas.lombardi@hotmail.com',
            subject: subject,
            html: [
                `<div style='font-family:sans-serif; text-align:center; font-size:16px; color:#222;'>`,
                `<p>Nome: ${name}</p>`,
                `<p>Email remetente: ${email}</p>`,
                `<p>Comentário: ${body}</p>`,
                `</div>`
            ].join('\n')
        });
    });
}
exports.sendEmail = sendEmail;
