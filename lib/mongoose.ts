import mongoose from 'mongoose'

let isConnect = false // untuk cek kalau mongoose connect atau tidak

export const connectToDb = async () => {
    mongoose.set('strictQuery', true)

    if(!process.env.MONGODB_URL) return console.log('MONGODB_URL not found')
    if(isConnect) return console.log('connected to MongoDB')

    try {
        await mongoose.connect(process.env.MONGODB_URL)

        isConnect = true

        console.log('connected to MongoDB')
    } catch (error) {
        console.log(error)
    }
}