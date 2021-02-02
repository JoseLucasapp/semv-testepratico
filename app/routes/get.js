module.exports = (route)=>{
    route.get('/', (req,res)=>{
        route.app.controllers.index.getInfo(route, req, res);
    });
    route.get('/newclient', (req, res)=>{
        route.app.controllers.index.newClientPage(route, req, res);
    });
}