module.exports = (route)=>{
    route.get('/', (req,res)=>{
        require('../controllers/index').getInfo(route, req, res);
    });
    route.get('/newclient', (req, res)=>{
        require('../controllers/index').newClientPage(route, req, res);
    });
}