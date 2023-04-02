import express from "express";
import morgan from "morgan";
import routes from "./routes/index";
import productsRoutes from "./routes/productRoute";
import mongoose, { MongooseOptions } from "mongoose";
import cors from "cors";
const { MongoClient, ServerApiVersion } = require('mongodb');

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    async config() {
        // connection mongodb atlas
        const mongodb_atlas = `mongodb+srv://mario22:txbQlJTdn2mOWlMM@cluster0.6u7xir8.mongodb.net/?retryWrites=true&w=majority`;
        const mongooseOptions: MongooseOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        };

        try {
            // connect using mongoose
            await mongoose.connect(mongodb_atlas || process.env.MONGODB_URL, mongooseOptions);
            console.log("Connected to database using Mongoose");
        } catch (error) {
            console.error(`Error connecting to the database using Mongoose. \n${error}`);
        }

        // connect using mongodb driver
        const client = new MongoClient(mongodb_atlas, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverApi: ServerApiVersion.v1
        });

        try {
            await client.connect();
            console.log("Connected to database using MongoDB driver");
        } catch (error) {
            console.error(`Error connecting to the database using MongoDB driver. \n${error}`);
        }

        // Settings
        this.app.set("port", process.env.PORT || 5000);
        // Middlewares
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(morgan("dev"));
        this.app.use(cors());
    }

    routes() {
        this.app.use("/", routes);
        this.app.use("/api/products", productsRoutes);
    }

    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server on port:", this.app.get("port"));
        });
    }
}

const server = new Server();
server.start();
