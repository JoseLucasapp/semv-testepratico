const mongoose = require('mongoose');
const schema = mongoose.Schema;

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