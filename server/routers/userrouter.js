'use strict'

const router = require(`express`).Router()

const userController = require(`../controllers/usercontroller`)
router.get(`/`, userController.getUsers)
router.post(`/login`, userController.login)
router.post(`/register`, userController.registeruser)
router.post(`/googleauth`, userController.googleSign)

module.exports = router