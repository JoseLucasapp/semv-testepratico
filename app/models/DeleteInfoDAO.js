const Data = require('../../config/dbConnection');
const cliente = Data.Clientes;

function DeleteInfoDAO(){

}

DeleteInfoDAO.prototype.data = (req,res)=>{
    cliente.findOneAndDelete({id: req.body.id}).exec((err)=>{
        if(err){
            res.render("home.ejs", {data: "", errors: err});
        }else{
            cliente.find({}).exec((err, data)=>{
                if(err){
                    res.render("home.ejs", {data: "", errors: err});
                }else{
                    res.render("home.ejs", {data: data, errors: ""});
                }
            });
        }
    });
}

module.exports = ()=>{
    return DeleteInfoDAO;
}