import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    duration: {
        type: Date,
        required: true
    },
    author: String,
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        required: true,
        enum: ['Diseño', 'Desarrollo', 'Marca Personal', 'Creación de contenidos', 'Marketing']
    },
    digital: {
        type: Boolean,
        default: true
    },
    active: {
        type: Boolean,
        default: true
    }
})

export const productModel = model('products', productSchema)