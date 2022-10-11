const User = require('../models/userModel')
const crypto = require('crypto')
const bcryptjs = require('bcryptjs')
const sendMailToActivate = require('./sendMailToActivate')
const Joi = require('joi')
const jwt = require('jsonwebtoken')


const userValidator = Joi.object({
    "firstName": Joi.string().messages({
        'string.empty': 'Please type your name'
    }).required(),
    "lastName": Joi.string().messages({
        'string.empty': 'Please type your last name'
    })
        .required(),
    "email": Joi.string().email().messages({
        'string.empty': 'Please type your email',
        'string.email': 'You must enter a valid email address'
    })

        .required(),
    "password": Joi.string().alphanum().min(6).messages({
        'string.empty': 'Please type your password',
        'string.alphanum': 'You must enter a password which contains numbers or letters',
        'string.min': 'Your password must be at least 6 characters long'
    }).required(),
    "photo": Joi.string().messages({
        'string.empty': 'Please enter a photo url'
    })
        .uri()
        .messages({
            'string.uri': 'You must enter a valid URL'
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
        let { firstName, lastName, photo, email, password, tel, address,zipCode,city, role, from} = req.body
       
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
                        message: "user signed up",
                        success: true
                    })
            } else {
                if (user.from.includes(from)) {
                    res.status(200).json({
                        message: "user already exist " + from,
                        success: false
                    })
                } else {
                    user.from.push(from)
                    user.verified = true
                    user.password.push(bcryptjs.hashSync(password, 10))
                    await user.save()
                    res.status(201).json({
                        message: "user signed up from " + from,
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
                    message: 'User does not exist, please Sign Up!',
                    success: false
                })
            }
            else if (user.verified) {
                const userPass = user.password.filter(userpassword => bcryptjs.compareSync(password, userpassword))
                if (from === "form") {
                    if (userPass.length > 0) {
                        const loginUser = {
                            id: user._id,
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
                            message: 'Login Success',
                            success: true,
                            response: {
                                user: loginUser,
                                token: token
                            }
                        })
                    } else {

                        res.status(400).json({
                            message: 'Login Failed, please check your email and password',
                            success: false
                        })
                    }
                }
                else {
                    if (userPass.length > 0) {
                        user.logged = true
                        const loginUser = {
                            id: user._id,
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
                            message: 'Login Success from Google',
                            success: true,
                            response: {
                                user: loginUser,
                                token: token
                            }
                        })
                    } else {
                        res.status(404).json({
                            message: 'Login Failed, please check your password',
                            success: false
                        })
                    }
                }
            }
            else {
                res.status(401).json({
                    message: 'Login Failed, please verify your email',
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
                    message: updateProfile.name + ': Your Profile Has Been UpDated',
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