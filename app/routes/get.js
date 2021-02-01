module.exports = (route)=>{
    route.get('/', (req,res)=>{
        route.app.controllers.index.getInfo(route, req, res);
    });
    route.post('/filter', (req,res)=>{
        route.app.controllers.index.getInfoWithFilter(route, req, res);
    });
    route.get('/newclient', (req, res)=>{
        route.app.controllers.index.newClientPage(route, req, res);
    });
    route.post('/edit', (req, res)=>{
        route.app.controllers.index.editClientPage(route, req, res);
    })
}