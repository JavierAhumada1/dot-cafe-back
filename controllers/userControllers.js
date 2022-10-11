const User = require('../models/userModel')
const crypto = require('crypto')
const bcryptjs = require('bcryptjs')
const sendMailToActivate = require('./sendMailToActivate')
const Joi = require('joi')
const jwt = require('jsonwebtoken')


const userValidator = Joi.object({
    "firstName": Joi.string().messages({
        'string.empty': 'Por favor, escriba su nombre'
    }).required(),
    "lastName": Joi.string().messages({
        'string.empty': 'Por favor, escriba su apellido'
    })
        .required(),
    "email": Joi.string().email().messages({
        'string.empty': 'Escriba su correo electrónico',
        'string.email': 'Debe introducir una dirección de correo electrónico válida'
    })

        .required(),
    "password": Joi.string().alphanum().min(6).messages({
        'string.empty': 'Escriba una contraseña',
        'string.alphanum': 'Debe introducir una contraseña que contenga números o letras',
        'string.min': 'Su contraseña debe tener al menos 6 caracteres'
    }).required(),
    "photo": Joi.string().messages({
        'string.empty': 'Por favor, introduzca la url de la foto'
    })
        .uri()
        .messages({
            'string.uri': 'Debe introducir una URL válida'
        })
        .required(),
    "from": Joi.string().required(),
    "role": Joi.string(),
})

const userLoginValidator = Joi.object({
    "email": Joi.string()
        .email()
        .required(),
    "password": Joi.string()
        .required(),
    "from": Joi.string().required()
})

const userController = {

    signUp: async (req, res) => {
        let { dni, province, firstName, lastName, photo, email, password, tel, address,zipCode,city, role, from} = req.body
       
        let giftCard
        try {
            await userValidator.validateAsync(req.body)
            let user = await User.findOne({ email })
            if (!user) {
                let logged = false
                let verified = false
                let code = crypto.randomBytes(15).toString('hex')
                
                if (from === 'form') {
                    sendMailToActivate(email, code, firstName, lastName)
                } else {
                    verified = true
                }
                password = bcryptjs.hashSync(password, 10)
                user = await new User(
                    {
                        firstName,
                        lastName,
                        photo,
                        email,
                        password: [password],
                        tel,
                        dni,
                        address,
                        zipCode,
                        city,
                        province,
                        giftCard : [giftCard],
                        role,
                        from: [from],
                        logged,
                        verified,
                        code
                    }).save()
                    res.status(201).json({
                        message: "usuario registrado",
                        success: true
                    })
            } else {
                if (user.from.includes(from)) {
                    res.status(200).json({
                        message: "El usuario ya existe " + from,
                        success: false
                    })
                } else {
                    user.from.push(from)
                    user.verified = true
                    user.password.push(bcryptjs.hashSync(password, 10))
                    await user.save()
                    res.status(201).json({
                        message: "El usuario se registró desde" + from,
                        success: true
                    })
                }
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    },

    signIn: async (req, res) => {
        const { email, password, from } = req.body
        try {
            await userLoginValidator.validateAsync(req.body)
            const user = await User.findOne({ email })
            const token = jwt.sign(
                {
                    id: user._id,
                    role: user.role
                },
                process.env.KEY_JWT,
                { expiresIn: 60 * 60 * 24 })

            if (!user) {
                res.status(404).json({
                    message: 'El usuario no existe, por favor regístrese',
                    success: false
                })
            }
            else if (user.verified) {
                const userPass = user.password.filter(userpassword => bcryptjs.compareSync(password, userpassword))
                if (from === "form") {
                    if (userPass.length > 0) {
                        const loginUser = {
                            _id: user._id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            photo: user.photo,
                            from: user.from,
                            email: user.email,
                            tel: user.tel,
                            dni: user.dni,
                            address: user.address,
                            zipCode: user.zipCode,
                            city: user.city,
                            province: user.province,
                            giftCard: user.giftCard,
                            role: user.role,
                        }
                        user.logged = true
                        await user.save()

                        res.status(200).json({
                            message: 'Inicio de sesión exitoso',
                            success: true,
                            response: {
                                user: loginUser,
                                token: token
                            }
                        })
                    } else {

                        res.status(400).json({
                            message: 'Fallo en el inicio de sesión, por favor, compruebe su correo electrónico y contraseña',
                            success: false
                        })
                    }
                }
                else {
                    if (userPass.length > 0) {
                        user.logged = true
                        const loginUser = {
                            _id: user._id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            photo: user.photo,
                            from: user.from,
                            email: user.email,
                            tel: user.tel,
                            address: user.address,
                            zipCode: user.zipCode,
                            city: user.city,
                            giftCard: user.giftCard,
                            role: user.role,
                        }
                        await user.save()
                        res.status(200).json({
                            message: 'Iniciar sesión con éxito desde Google',
                            success: true,
                            response: {
                                user: loginUser,
                                token: token
                            }
                        })
                    } else {
                        res.status(404).json({
                            message: 'Fallo en el inicio de sesión, por favor compruebe su contraseña',
                            success: false
                        })
                    }
                }
            }
            else {
                res.status(401).json({
                    message: 'Fallo en el inicio de sesión, por favor verifique su correo electrónico',
                    success: false
                })
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    },

    signOut: async (req, res) => {
        const { email } = req.body
        try {
            const user = await User.findOne({ email: email })
            if (user) {
                user.logged = false
                await user.save()
                res.status(200).json({
                    message: 'You were logged out successfully',
                    success: true,
                    response: user.logged
                })
            } else {
                res.status(400).json({
                    message: 'There is no such user logged in',
                    success: false
                })
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({
                message: "SingOut Error, please..",
                success: false
            })
        }
    },

    userVerify: async (req, res) => {
        const { code } = req.params
        try {
            const user = await User.findOne({ code: code })
            if (user) {
                user.verified = true
                await user.save()
                res.status(200).json({
                    message: 'You Activate your Account successfully',
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "Email doesn't exist in database",
                    success: false
                })
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({
                message: "Account mail could not be verified",
                success: false
            })
        }
    },

    signInWithToken: (req, res) => {
        const token = jwt.sign(
            {
                id: req.user._id
            },
            process.env.KEY_JWT,
            { expiresIn: 60 * 60 * 24 })

        if (req.user !== null) { 
            res.status(200).json({
                success: true,
                response: { 
                    user: req.user, 
                    token: token 
                },
                message: 'Welcome ' + req.user.name + '!'
            })
        } else {
            res.status(400).json({
                success: false,
                message: 'error'
            })
        }
    },

    editProfile: async (req, res) => {
        const { id } = req.params
        try {
            const newDataProfile = req.body
            let user = await User.findOne({ _id: id })
            if (user) {
                const updateProfile = await User.findByIdAndUpdate(id, newDataProfile)
                res.status(200).json({
                    message: 'Tu perfil se ha actualizado',
                    succes: true
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: error.message,
                succes: false
            })
        }
    },
}

module.exports = userController