'use strict'

const { User } = require(`../models`)
const { generateToken, verifyToken } = require(`../helpers/jwt`)
const { checkHash, makeHash } = require(`../helpers/bcrypt`)
const  googleAuth = require(`../helpers/gauth`)

class UserController {

    static login ( req, res) {
        const { email, password } = req.body
        User.findOne({
            where : {
                email : email
            }
        })  .then (result => {
                if(result) {
                    if(checkHash(password, result.password)) {
                        let newToken = {
                            id : result.id
                        }
                        res.status(201).json({
                            token : generateToken(newToken)
                        })
                    } else {
                        res.status(401).json({
                            Error : {
                                message : `Invalid email & password combination`
                            }
                        })
                    }
                } else {
                    res.status(401).json({
                        Error : {
                            message : `Unknown email`
                        }
                    })
                }
        })  .catch (err => {
            res.status(500).json({
                Error : {
                    message : `Email provided is not registered`
                }
            })
        })
    }

    static registeruser ( req, res) {
        const { email, password} = req.body
        User.create({
            email, password
        })  .then(result => {
            res.status(200).json({
                message : `register success`
            })
        })  .catch(err => {
            res.status(500).json({
                Error : err.message
            })
        })
    }

    static getUsers( req, res) {
        User.findAll({})
            .then(result => {
                res.status(200).json({
                    Users : result
                })
            })
            .catch(err => {
                res.status(500).json({
                    Error : err.message
                })
            })
    }

    static googleSign( req, res, next) {
        let token = req.headers.google_token;
        // console.log(token)
        googleAuth(token)
            .then ( data => {
                return User
                    .findOne({
                        where : {
                            email : data.email
                        }
                    })
                    .then( result => {
                        if(result){
                            return result;
                        } else {
                            return User.create({
                                email : data.email,
                                password : process.env.GAuth_pass
                            })
                        }
                    })
            })
            .then( result => {
                let newToken = {
                    UserId : result.id
                }
                res.json({
                    token : generateToken(newToken)
                })
            })
            .catch( err => {
                res.status(500).json({
                    err
                })
            })  

        
    }
}

module.exports = UserController