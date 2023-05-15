import express from 'express'

const router = express.Router()

router.get("/", (req, res)=>{
    res.send("USERS ENDPOINT.")
})

router.get("/userRegister", (req, res)=>{
    res.send("USER REGISTER ENDPOINT.")
})

export default router