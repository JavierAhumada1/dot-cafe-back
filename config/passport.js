const passport = require('passport')
const passportJWT = require('passport-jwt')

const {KEY_JWT} = process.env
const User = require('../models/userModel')

passport.use(
    new passportJWT.Strategy(
        {                                 
            jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: KEY_JWT
        },
        async (jwt_payload, done) =>{

            try {
                let user = await User.findOne({_id:jwt_payload.id})
                if(user){
                    user = {
                        id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        dni: user.dni,
                        role: user.role,
                        photo: user.photo,
                        city: user.city,
                        province: user.province,
                        tel:user.tel,
                        address:user.address,
                        zipCode:user.zipCode,
                    }
                    return done(null, user)
                }else{
                    return done(null, false)
                }
            } catch (error) {
                console.log(error)
                return done(error, false)
            }
        }
    )
)
module.exports = passport