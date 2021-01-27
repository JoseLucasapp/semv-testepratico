module.exports = (route)=>{
    route.delete('/delete/:id',(req,res)=>{
        route.app.controllers.index.deleteInfo(route, req, res);
    });
}