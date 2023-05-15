import express from 'express'
import itemModel from '../models/itemModel.js'

const router = express.Router()

//CREATE
router.post("/", async (req, res)=>{

    const newItem = new itemModel(req.body)

    try{
        const savedItem = await newItem.save()
        res.status(200).json(savedItem)
    }catch(err){
        res.status(500).json(err)
    }
})

//UPDATE

//DELETE

//GET

//GET ALL


export default router