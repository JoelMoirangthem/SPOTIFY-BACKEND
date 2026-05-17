const musicModel = require('../model/music');
const albulmModel = require('../model/albulm');
const jwt = require('jsonwebtoken')
const uploadFile = require('../services/storage.service')
async function createMusic(req,res){
    
    

        
        
        const {title} = req.body;
        const file = req.file;
        const result = await uploadFile(file.buffer);
        const music = await musicModel.create({
            uri : result.url,
            title,
            artist : req.user.id
        })
        res.status(201).json({
            message : "music created successfully",
            music : {
                id : music._id,
                uri : music.uri,
                title : music.title,
                artist : music.artist
            }
        })
  

}
async function createAlbulm(req,res){
    
  
       
        const {title , musics} = req.body;
        console.log(musics)
        const albulm =  await albulmModel.create({
            title,
            artist : req.user.id,
            musics : musics
        })

        res.status(201).json({
            message : "albulm created successfully",
            albulm : {
                id : albulm._id,
                title : albulm.title,
                artist : albulm.artist,
                musics : albulm.musics
            }
        })

    
}

async function getAllMusic(req,res){
    const music = await musicModel.find().limit(2).populate("artist","username email");

    res.status(200).json({
        message : "music fetch successfully",
        music : music
    })
}

async function getAllAlbulm(req,res){
    const albulm = await albulmModel.find().select("title artist").populate("artist","username email");
    res.status(200).json({
        message : "music fetch successfully",
        albulm : albulm
    })
}

async function getAlbulmById(req,res){
    const id = req.params.id;
    const albulm  = await albulmModel.findById(id).populate("artist","artist username").populate("musics");
    return res.status(200).json({
        message : "albulm fetch successfully",
        albulm : albulm
    })
}


module.exports = {createMusic,createAlbulm,getAllMusic,getAllAlbulm,getAlbulmById}