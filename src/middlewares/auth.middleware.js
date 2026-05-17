const jwt = require('jsonwebtoken');

async function authArtist(req,res,next){
    const token = req.cookies.token;
    if(!token){
        res.status(401).json({message : "unauthorized"});
    }

    try{

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(decoded.role != "artist"){
            res.status(403).json({message : "you dont have access"})
        }
        req.user  = decoded;
        next();
    }catch(err){
        console.log(err);
    }
}

async function authUser(req,res,next){
    const token = req.cookies.token;
    if(!token){
        res.status(401).json({message : "forbidden"});
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(decoded.role != "user"){
            res.status(401).json({message :"you dont have access"})
        }
        req.user = decoded;
        next()
        
    }catch(err){
        console.log(err);
    }
}



module.exports = {authArtist,authUser};