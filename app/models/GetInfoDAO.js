const Data = require('../../config/dbConnection');
const cliente = Data.Clientes;
const tipoPessoa = Data.Tipo_pessoa;

function GetInfoDAO(){

}

GetInfoDAO.prototype.data = (req, res)=>{
    cliente.find({}).exec((err, data)=>{
        if(err){
            res.json(err);
        }else{
            res.json(data);
        }
    });
}

module.exports = ()=>{
    return GetInfoDAO;
}