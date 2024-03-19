import mongoose from 'mongoose'

const dbConnection= async()=>{
    return await mongoose.connect(process.env.DATABASE_URL)
    .then(()=> console.log("Database Connected"))
    .catch((err)=> console.log(err));
}

export default dbConnection;