import { Schema, model } from 'mongoose'
import { IUserModel } from '../../../typings'

const UserSchema = new Schema({
    jid: {
        type: String,
        required: true,
        unique: true
    },
    ban: {
        type: Boolean,
        required: true,
        default: false
    },
    warnings: {
        type: Number,
        required: true,
        default: 0
    }
})
export const UserModel = model<IUserModel>('users', UserSchema)