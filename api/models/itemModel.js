import mongoose from "mongoose"

const ItemSchema = new mongoose.Schema({
    ItemName:{
        type: String,
        required: true
    },
    Quantity:{
        type: Number,
        required: true
    },
    ItemCategory:{
        type:String,
        required:true
    },
    ItemLocation:{
        type:String,
        required:true
    },
    ItemCondition:{
        type:String,
        required:true
    },
    Color:{
        type: String,
        required: true
    },
    Brand:{
        type: String,
        require: true
    },
    Model:{
        type:String,
        require:true
    },
    Serial:{
        type: String
    },
    Image:{
        type:[String]
    }

    //10
});

export default mongoose.model("Item", ItemSchema)