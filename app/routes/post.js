const {body} = require('express-validator');
module.exports = (route)=>{
    route.post('/new',[
        body('cpf_cnpj').isLength({min:14, max:14}),
        body('nome').isLength({min:5, max:50}),
        body('endereco').isLength({min:5, max:50}),
        body('nro_logradouro').isLength({min:1,max:10}),
        body('bairro').isLength({min:1, max:30}),
        body('cidade').isLength({min:1, max:50}),
        body('uf').isLength({min:1, max:2}),
        body('cep').isLength({min:8, max:8}),
        body('descricao_tipo').isLength({min:1, max:30})
    ],(req, res)=>{
        require('../controllers/index').postInfo(route, req, res);
    });
    route.post('/edit', (req, res)=>{
        require('../controllers/index').editClientPage(route, req, res)
    });
    route.post('/filter', (req,res)=>{
        require('../controllers/index').getInfoWithFilter(route, req, res)
    });
    route.post('/update', (req,res)=>{
        require('../controllers/index').putInfo(route, req, res);
    });
    route.post('/delete',(req,res)=>{
        require('../controllers/index').deleteInfo(route, req, res);
    });
}