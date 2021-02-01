module.exports.getInfo = (route, req, res)=>{
    const getInfo = new route.app.models.GetInfoDAO();
    getInfo.data(req, res);
}
module.exports.getInfoWithFilter = (route, req, res)=>{
    const getInfoWithFilter = new route.app.models.GetInfoDAO();
    getInfoWithFilter.dataFilter(req, res);
}
module.exports.newClientPage = (route, req, res)=>{
    const newClientPage = new route.app.models.GetInfoDAO();
    newClientPage.newClientPage(req, res);
}
module.exports.editClientPage = (route, req, res)=>{
    const editClientPage = new route.app.models.GetInfoDAO();
    editClientPage.editClientPage(req, res);
}
module.exports.postInfo = (route, req, res)=>{
    const postInfo = new route.app.models.PostInfoDAO();
    postInfo.data(req, res);
}
module.exports.putInfo = (route, req, res)=>{
    const putInfo = new route.app.models.PutInfoDAO();
    putInfo.data(req, res);
}
module.exports.deleteInfo = (route, req, res)=>{
    const deleteInfo = new route.app.models.DeleteInfoDAO();
    deleteInfo.data(req, res);
}