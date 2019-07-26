const nodemailer = require('nodemailer');

module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'testingawaw@gmail.com', // Cambialo por tu email
            pass: 'Testing111' // Cambialo por tu password
}
 });

const mailOptions = {
    from: `”${formulario.nombre} 👻” <${formulario.email}>`,
    to: 'udistrital.acm@gmail.com', // Cambia esta parte por el destinatario
    subject: 'Contacto',
    html: `
 <strong>Nombre:</strong> ${formulario.name} <br/>
 <strong>E-mail:</strong> ${formulario.email} <br/>
 <strong>Mensaje:</strong> ${formulario.description}
 `
};

transporter.sendMail(mailOptions, function (err, info) {
    if (err)
        console.log(err)
    else
        console.log(info);
});
}