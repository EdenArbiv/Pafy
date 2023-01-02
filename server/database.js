const { connect } = require('mongoose')

const connectToMongoDatabase = async () => {
    try {
        await connect('mongodb://localhost/Pafy')
        console.log('connected to mongo database')
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    connectToMongoDatabase
}