const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2
const {
    GOOGLE_URL,
    GOOGLE_REFRESH,
    GOOGLE_SECRET,
    GOOGLE_ID,
    GOOGLE_USER
} = process.env

const sendMailToActivate = async (email, code , firstName, lastName) => {
    
    const client = new OAuth2(
        GOOGLE_ID,
        GOOGLE_SECRET,
        GOOGLE_URL
    )

    client.setCredentials({
        refresh_token: GOOGLE_REFRESH
    })

    const accessToken = client.getAccessToken()

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: GOOGLE_USER,
            type: 'OAuth2',
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
            refreshToken: GOOGLE_REFRESH,
            accessToken: accessToken
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    const mailOptions = {
        from: GOOGLE_USER,
        to: email,
        subject: 'Verifica tu Cuenta',
        html: `
            <h1 style="text-align: center; color: #20d8ed;"><strong>
            <img src="http://drive.google.com/uc?export=view&id=1jdGTym3iPoqyhmptOBgGXctGup3su3hz" style="display: block; margin-left: auto; margin-right: auto; " width="450"  ></strong></h1>
            <p style="text-align: center;"><strong>Verificacion de Cuenta Punto Café<br />  ${firstName} ${lastName}!  Gracias por crear tu cuenta!, Hacé un punto y
            tomate un café</strong></p>
            <p style="text-align: center;">&nbsp;</p>
            <p><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://www.consumoteca.com/wp-content/uploads/Restaurante-cafeter%C3%ADa.jpeg" width="543" height="330" /></strong></p>
            <p>&nbsp;</p>
            <p style="text-align: center;">Haz click en el boton para verificar tu cuenta.  <br/> <br/>  <a style="background: #04BF9D; color: #ffffff; padding: 10px 50px; border-radius: 3px; text-align: center;" href="https://punto-cafe-backend.onrender.com/auth/verify/${code}">confirmar</a></p>
        `
    }

    await transport.sendMail(mailOptions, (error, response) => {
        if (error) {
            console.log(error)
        } else {
            console.log("Correo enviado con exito")
        }
    })
}

module.exports = sendMailToActivate