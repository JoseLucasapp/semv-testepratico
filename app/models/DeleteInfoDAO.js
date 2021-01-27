const {Clientes} = require('../../config/dbConnection');
function DeleteInfoDAO(){

}

DeleteInfoDAO.prototype.data = (req,res)=>{
        Clientes.findOneAndDelete({id: req.params.id}).exec((err)=>{
            if(err){
                res.json(err);
            }else{
                res.json("success")
            }
        });
}

module.exports = ()=>{
    return DeleteInfoDAO;
}