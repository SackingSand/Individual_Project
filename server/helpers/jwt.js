'use strict'
const jwt = require(`jsonwebtoken`)

function generateToken(obj) {
    return jwt.sign(obj, `dandelion`)
}

function verifyToken(token) {
    return jwt.verify(token, `dandelion`)
}

module.exports = {
    generateToken,
    verifyToken
}