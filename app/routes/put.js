module.exports = (route)=>{
    route.post('/update', (req,res)=>{
        route.app.controllers.index.putInfo(route, req, res);
    });
}