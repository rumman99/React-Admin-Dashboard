import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import dbConnection from './db.js'

// Configuration //
dotenv.config();
const app= express();
const PORT= process.env.PORT || 3999;

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan('common'));
app.use(cors());

// DB CONNECTION //
dbConnection();

// Routes //
// app.use('/client', clientRoutes)
// app.use('/general', generalRoutes)
// app.use('/management', managementRoutes)
// app.use('/sales', salesRoutes)

app.listen(PORT || 3999, console.log(`Listening to PORT ${PORT}`));