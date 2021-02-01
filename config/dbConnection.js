const mongoose = require('mongoose');
const schema = mongoose.Schema;

//const MongoDB_URL = process.env.MongoDB_URL || "mongodb://localhost:27017/semvteste";
const MongoDB_URL = 'mongodb+srv://jlucasgf:jjXIJxSgy9llN5fb@cluster0.hovld.mongodb.net/semvteste?retryWrites=true&w=majority'
mongoose.connect(MongoDB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const clientes = new schema({
    id:{
        type: Number
    },
    descricao_tipo:{
        type: String
    },
    cpf_cnpj:{
        type: String
    },
    nome:{
        type: String
    },
    endereco:{
        type: String
    },
    nro_logradouro:{
        type: String
    },
    bairro:{
        type: String
    },
    cidade:{
        type: String
    },
    uf:{
        type: String
    },
    cep:{
        type: String
    }
});

const Clientes = mongoose.model('clientes', clientes);

module.exports = {Clientes};