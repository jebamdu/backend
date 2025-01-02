import { Router } from "express"
import Users from "../usermodel/user.model.js"
import { where } from "sequelize"
const userRouter = new Router()
userRouter.post('/insert',async (req,res)=>{
    try{

      

        console.log(req.body.data,"request")
        Users.findAll({where :{
            date:req.body.data?.date,
            time:req.body.data?.time
           }}).then((userData)=>{
            console.log(userData,"userData bro")
            if(userData.length){
                res.status(500).json("data already exist")
            }else{
                Users.create(req.body.data).then((createdData)=>{
                    console.log(createdData,"createdData")
                    res.status(200).json("data inserted sucessfully")
                })
            }
            // console.log("user",userData)
           })
           
    }catch(error){
        res.status(500).json("something went wrong")
    }
   
  
})

userRouter.post('/getDate',async (req,res)=>{
    try{
        console.log(req.body.data,"request")
        Users.findAll({where :{
            date:req.body.data,
            
           }}).then((userData)=>{
            console.log(userData,"userData bro")
            if(userData.length){
                res.status(200).json(userData)
            }else{
                res.status(200).json([])
            }
            // console.log("user",userData)
           })
           
    }catch(error){
        res.status(500).json("something went wrong")
    }
   
  
})

export default userRouter