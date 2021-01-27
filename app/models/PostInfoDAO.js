const {validationResult} = require('express-validator');
const {Clientes} = require('../../config/dbConnection');

function PostInfoDAO(){

}

PostInfoDAO.prototype.data = (req, res)=>{
    const errors = validationResult(req);
    if(errors.length > 0){
        res.json(errors)
    }else{
        const idGenerator = Math.floor(Math.random()*(999999 - 100000)+100000);
        const data = req.body;
        const clientes = new Clientes({
            id: idGenerator,
            tipopessoa: {
                id_tipo: idGenerator,
                descricao_tipo: data.descricao_tipo
            },
            cpf_cnpj: data.cpf_cnpj,
            nome: data.nome,
            endereco: data.endereco,
            nro_logradouro: data.nro_logradouro,
            bairro: data.bairro,
            cidade: data.cidade,
            uf: data.uf,
            cep: data.cep,
        }).save().then(()=>{
            return res.status(200).json({response: 'Sucess'});
        }).catch((err)=>{
            res.json(err);
        });
    }
}

module.exports = ()=>{
    return PostInfoDAO;
}