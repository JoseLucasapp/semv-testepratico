const {Clientes} = require('../../config/dbConnection');

function PutInfoDAO(){

}

PutInfoDAO.prototype.data = (req, res)=>{
    Clientes.findOneAndUpdate({ id: req.params.id }
        , {$set: req.body}).exec((err)=>{
            if(err){
                res.json(err);
            }else{
                res.json("Success");
            }
        });
}

module.exports = ()=>{
    return PutInfoDAO;
}