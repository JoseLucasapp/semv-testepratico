module.exports.getInfo = (route, req, res)=>{
    const getInfo = new route.app.models.GetInfoDAO();
    getInfo.data(req, res);
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