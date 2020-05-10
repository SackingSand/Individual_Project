'use strict'

const router = require(`express`).Router() 

const userRouter = require(`./userrouter`)

router.get(`/`, (req, res) => {
    res.json({
        msg : `ok`
    })
})

router.use(`/user`, userRouter)

module.exports = router