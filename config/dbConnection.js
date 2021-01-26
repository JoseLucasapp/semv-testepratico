const mongoose = require('mongoose');
const schema = mongoose.Schema;

const MongoDB_URL = process.env.MongoDB_URL || "mongodb://localhost:27017/teste";
mongoose.connect(MongoDB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const clientes = new schema({
    id:{
        type: Number
    },
    tipopessoa:{
        type: Number
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
const tipo_pessoa = new schema({
    id_tipo:{
        type: Number
    },
    descricao_tipo:{
        type: String
    }
});

const Clientes = mongoose.model('clientes', clientes);
const Tipo_pessoa = mongoose.model('tipo_pessoa', tipo_pessoa);

module.exports = {Clientes, Tipo_pessoa};