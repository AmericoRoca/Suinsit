const jwt = require("jwt-simple")
const moment = require("moment")


const libjwt = require("../services/jwt");
const secret = libjwt.secret;

exports.auth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).send({
            status: "error",
            message: "No tiene cabecera de autenticacion"
        })
    }

    //Decodificar el token
    let token = req.headers.authorization.replace(/['"]+/g, '');

    try {
        let payload = jwt.decode(token, secret);

        //Exp
        if (payload.exp <= moment().unix()) {
            return res.status(401).send({
                status: "error",
                message: "Token expirado",
                error
            })
        }


        req.user = payload;



    } catch (error) {
        return res.status(404).send({
            status: "error",
            message: "Token invalido",
            error
        })
    }

    next();
}