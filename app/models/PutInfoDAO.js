const Data = require('../../config/dbConnection');
const cliente = Data.Clientes;

function PutInfoDAO(){

}

PutInfoDAO.prototype.data = (req, res)=>{
    cliente.findOneAndUpdate({ id: req.body.id }
        , {$set: req.body}, {upsert : true}).exec((err)=>{
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
    return PutInfoDAO;
}