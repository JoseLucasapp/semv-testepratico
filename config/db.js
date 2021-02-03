if(process.env.NODE_ENV == "production"){
    module.exports = {
        mongoURI : 'mongodb+srv://jlucasgf:jjXIJxSgy9llN5fb@cluster0.hovld.mongodb.net/semvteste?retryWrites=true&w=majority'

    }
}else{
    module.exports = {
        mongoURI: "mongodb://localhost:27017/semvteste"
    }
}