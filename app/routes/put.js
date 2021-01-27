module.exports = (route)=>{
    route.put('/update/:id', (req,res)=>{
        route.app.controllers.index.putInfo(route, req, res);
    });
}