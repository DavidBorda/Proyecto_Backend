import nodemailer from "nodemailer";
import { config } from "./config";
const environment = config[process.env.NODE_ENV|| "desarrollo"];
const {host, port, email, password} = environment.email;



export const transporter = nodemailer.createTransport({
    service: "hotmail",
    host: host,
    port,
    secure: false,
    auth: {
        user: email,
        pass: password,
    },
    tls:{
        ciphers: "SSLv3",
        rejectUnauthorized: false,
    }
});

transporter.verify().then(()=>{
    console.log("puede enviar correos");
    
}).catch((error)=>{
    console.log("Error al enviar correos", error);
    
});