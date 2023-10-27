import dotenv from 'dotenv';
import express, {Application} from 'express';
import db from '../db/connection';
import userRoutes from '../routes/user';
import rolRoutes from '../routes/role';
import customerRoutes from '../routes/customer';
import productRoutes from '../routes/product';
import quoteRoutes from '../routes/quote';
dotenv.config();

class Server {

    private app: Application;
    private port: string | undefined;

    private apiPaths={
        User: '/api/User',
        Rol: '/api/Rol',
        Customer: '/api/Customer',
        Product: '/api/Product',
        Quote: '/api/Quote'
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

    routes(){
        this.app.use(this.apiPaths.User, userRoutes)
        this.app.use(this.apiPaths.Rol, rolRoutes)
        this.app.use(this.apiPaths.Customer, customerRoutes)
        this.app.use(this.apiPaths.Product, productRoutes)
        this.app.use(this.apiPaths.Quote, quoteRoutes)
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Corriendo en el puerto: ${this.port}`)
        })
    }
}

export default Server;