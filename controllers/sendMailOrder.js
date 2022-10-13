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



const sendMailorder = async (email, products, firstName, lastName, total, statusPayment, id ) => {
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

    const mailOrderStatus = {
        from: GOOGLE_USER,
        to: email,
        subject: `Resumen de compra #${id}`,
        html: `
            <h1 style="text-align: center; color: #20d8ed;"><strong>
            <img src="http://drive.google.com/uc?export=view&id=1jdGTym3iPoqyhmptOBgGXctGup3su3hz" style="display: block; margin-left: auto; margin-right: auto; " width="250"  ></strong></h1>
            <p style="text-align: center;"><strong>Hola<br />  ${firstName} ${lastName}!  Gracias por tu compra!</strong></p>
            <hr/>
            <p>Productos Comprados:</p>
            <p>${products}</p>
            <hr/>
            <p>total:</p>
            <p>${total}</p>
            <hr/>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;">Verifica el status de tu compra.  <br/> <br/>  <a style="background: #04BF9D; color: #ffffff; padding: 10px 50px; border-radius: 3px; text-align: center;" href="http://localhost:3000/mi-orden/${id}">Ver Orden</a></p>
        `
    }

    await transport.sendMail(mailOrderStatus, (error, response) => {
        if (error) {
            console.log(error)
        } else {
            console.log("Resumen de compra enviado con exito")
        }
    })

}

module.exports = sendMailorder