import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'user_premium', 'admin','super_admin'],
        default: 'user'
    }
})

export const userModel = model('users', userSchema)
 