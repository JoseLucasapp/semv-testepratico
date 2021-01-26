const {validationResult} = require('express-validator');
function PostInfoDAO(){

}

PostInfoDAO.prototype.data = (req, res)=>{
    const errors = validationResult(req);
    if(errors){
        res.json(errors)
    }else{
        res.json('ok')
    }
}

module.exports = ()=>{
    return PostInfoDAO;
}