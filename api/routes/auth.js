import express from 'express';

const router = express.Router();

router.get("/", (req, res)=>{
    res.send("AUTH ENDPOINT.")
})

router.get("/authregister", (req, res)=>{
    res.send("AUTH REGISTER ENDPOINT.")
})

export default router