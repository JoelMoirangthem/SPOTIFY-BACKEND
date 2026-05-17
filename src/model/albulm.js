const mongoose = require('mongoose');

const albulmSchema = new mongoose.Schema({
    title :{
        type : String,
        required :  true
        
    },
    musics : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "music"
    }],
    artist : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true
    }
})

const albulmModel = mongoose.model("albulm",albulmSchema);
module.exports = albulmModel;