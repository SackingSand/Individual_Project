'use strict'

const bcrypt =  require(`bcryptjs`)
var salt = bcrypt.genSaltSync(10);

function makeHash(pass) {
    return bcrypt.hashSync(pass, salt)
}

function checkHash(pass, hash) {
    return bcrypt.compareSync(pass, hash)
}

module.exports = {
    makeHash,
    checkHash
}