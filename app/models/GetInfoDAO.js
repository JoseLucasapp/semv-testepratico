const Data = require('../../config/dbConnection');
const cliente = Data.Clientes;

function GetInfoDAO(){

}

GetInfoDAO.prototype.data = (req, res)=>{
    cliente.find({}).exec((err, data)=>{
        if(err){
            res.render("home.ejs", {data: "", errors: err});
        }else{
            res.render("home.ejs", {data: data, errors: ""});
        }
    });
}

GetInfoDAO.prototype.dataFilter = (req, res)=>{
    
    cliente.find(req.body).exec((err,data)=>{
        if(err){
            res.render("home.ejs", {data: "", errors: err});
        }else{
            res.render("home.ejs", {data: data, errors: ""});
        }
    })
}

GetInfoDAO.prototype.newClientPage = (req, res)=>{
    res.render('cadastro.ejs');
}
GetInfoDAO.prototype.editClientPage = (req, res)=>{
    res.render('editar.ejs', {data : req.body});
}

module.exports = ()=>{
    return GetInfoDAO;
}