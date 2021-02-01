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
            descricao_tipo: data.descricao_tipo.toLowerCase(),
            cpf_cnpj: data.cpf_cnpj,
            nome: data.nome,
            endereco: data.endereco.toLowerCase(),
            nro_logradouro: data.nro_logradouro.toLowerCase(),
            bairro: data.bairro.toLowerCase(),
            cidade: data.cidade.toLowerCase(),
            uf: data.uf.toLowerCase(),
            cep: data.cep,
        }).save().then(()=>{
            window.location.href = '/';
            cliente.find({}).exec((err, data)=>{
                if(err){
                    res.render("home.ejs", {data: "", errors: err});
                }else{
                    res.render("home.ejs", {data: data, errors: ""});
                }
            });
        }).catch((err)=>{
            res.render("home.ejs", {data: "", errors: err});
        });
    }
}

module.exports = ()=>{
    return PostInfoDAO;
}