module.exports = (route)=>{
    route.post('/delete',(req,res)=>{
        route.app.controllers.index.deleteInfo(route, req, res);
    });
}