if(process.env.NODE_ENV == "production"){
    module.exports = {
        mongoURI : 'mongodb://localhost/formulario'

    }
}else{
    module.exports = {
        mongoURI: "mongodb://localhost/formulario"
    }
}
