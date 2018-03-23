const { mongoose, Model } = require('./main')

const Schema = mongoose.Schema
const userSchema = new Schema({
    username: String,
    password: {
        type: String,
    },
    note: String,
    role: {
        type: Number,
        default: 2,
    },
    createdTime: {
        type: Number,
        default: Date.now(),
    },
    updatedTime: {
            type: Number,
            default: Date.now(),
    },
})

const registerRule = (username, password) => {
    return username.length > 1 && password.length > 2
}

class UserStore extends Model {
    static async create(form) {
        // form.password = this.saltedPassword(form.password)
        const u = super.create(form)
        return u
    }

    /*
    static saltedPassword(password, salt='123') {
        const salted = password + salt
        const hash = crypto.createHash('sha256')
        hash.update(salted)
        const h = hash.digest('hex')
        return h
    }
    */

    static async validLogin(form) {
        const {username, password} = form
        const u = await this.findBy('username', username)
        return u !== null && u.password === password
    }

    static async register(form) {
        const {username, password} = form
        const validForm = registerRule(username,password)
        const uniqueUser = await this.findBy('username', username) === null
        if (validForm && uniqueUser) {
            const u = await this.create(form)
            return u
        } else {
            return null
        }
    }

    isAdmin() {
        return this.role === 1
    }

    static guest() {
        const form = {
            _id: 0,
            role: -1,
            username: 'guest',
        }
        const u = new User(form)
        return u
    }

}

userSchema.loadClass(UserStore)
const User = mongoose.model('User', userSchema)

module.exports = User