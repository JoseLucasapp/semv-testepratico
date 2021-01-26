module.exports = (route)=>{
    route.get('/', (req,res)=>{
        route.app.controllers.index.getInfo(route, req, res);
    });
}