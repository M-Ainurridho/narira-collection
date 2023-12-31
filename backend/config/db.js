const { default: mongoose } = require('mongoose')

async function mongooseConnected(req, res) {
    try {
        await mongoose.connect(
            'mongodb+srv://M-Ainurridho:ainurridho@ainurridhodb.rk6s7s8.mongodb.net/narira?retryWrites=true&w=majority'
        )

        console.log('Conneted to MongoDB')
    } catch (err) {
        console.error( err)
    }
}

mongooseConnected()
