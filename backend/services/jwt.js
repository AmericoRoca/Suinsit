const jwt = require('jwt-simple');
const moment = require("moment");

//Clave secreta
const secret = "%rswH1DJtXooGxHZj2!@M5yals2RJzyykle";


//tOKEN
const createToken = (user) =>{
    const payload = {
        id: user._id,
        nombre: user.nombre,
        apellido: user.apellido,
        email: user.email,
        password: user.password,
        iat: moment().unix(),
        exp: moment().add(30, "days").unix()
    }

    //Devolver jwt
    return jwt.encode(payload, secret);
}

module.exports = {
    secret,
    createToken
}