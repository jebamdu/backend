import express from "express";
import cors from 'cors'
import userRouter from "./userRouter/user.router.js"
import sequelize from "./dbconnection.js";
const app = express()
const corsOrigin = {
    // origin:'localhost:4200',
    methods:['GET','POST']
}
app.use(express.json())
app.use(cors(corsOrigin))
app.use('/user',userRouter)

const startServer = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: true });
        console.log('Database connected successfully.');
        app.listen(4500, () => {
            console.log("Server is running successfully on port 4200");
        });
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
};

startServer();