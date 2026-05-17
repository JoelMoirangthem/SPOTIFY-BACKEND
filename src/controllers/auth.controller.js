const userModel = require('../model/user');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
async function registerUser(req,res){
    const {username,email,password,role ="user"} = req.body;
    try{
        const isUserAlreadyExists = await userModel.findOne({
            $or : [
                {username},
                {email}
            ]
        })

        if(isUserAlreadyExists){
            return res.status(401).json({
                message : "user already exist"
            })
        }
        const hash = await bcrypt.hash(password,10)
        const user = await userModel.create({
            username,
            email,
            password: hash,
            role
        })

        const token = jwt.sign({
            id : user._id,
            role : user.role
        },process.env.JWT_SECRET)

        res.cookie("token",token);
        res.status(201).json({
            message : "successfully created account ",
            user : {
                id : user._id,
                role,
                username,
                email
            }
        })
    }catch(error){
        console.log("database error : ",error);
    }
}

async function loginUser(req,res){
    try{

        const {username,email,password} = req.body;
        const user = await  userModel.findOne({
            $or : [
                {username},
                {email}
            ]
        })
        // if the user doesnot exist
        if(!user){
            return res.status(401).json({
                message : "invalid credential"
            })
        }

        const isPasswordValid = await bcrypt.compare(password,user.password);
        
        // if the user enter wrong password
        if(!isPasswordValid){
            return res.status(401).json({
                message : "invalid password or username or email"
            })
        }
        const token = jwt.sign({
            id : user._id,
            role : user.role
        },process.env.JWT_SECRET);


        res.cookie("token",token);
        res.status(200).json({
            message : "you have login successfully",
            user : {
                username : user.username,
                email : user.email,
                role : user.role
            }
        })

    }catch(error){
        console.log("login error : ",error);
    }
}

async function logoutUser(req,res){
    res.clearCookie("token");
    res.status(200).json({message : "logout succesfully"})
}


module.exports = {registerUser , loginUser , logoutUser}