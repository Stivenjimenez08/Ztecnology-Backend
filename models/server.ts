import dotenv from 'dotenv';
import express, {Application} from 'express';
import db from '../db/connection';
import userRoutes from '../routes/user';
dotenv.config();

class Server {

    private app: Application;
    private port: string | undefined;

    private apiPaths={
        User: '/api/User' 
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection(){
        try{
            await db.authenticate();
            console.log("database online");
        }
        catch(error){
            console.log(error);
        }
    }

    middlewares(){
        //lectura y parseo del body (conversion)
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.apiPaths.User, userRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Corriendo en el puerto: ${this.port}`)
        })
    }
}

export default Server;