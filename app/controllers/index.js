module.exports.getInfo = (route, req, res)=>{
    const getInfo = new route.app.models.GetInfoDAO();
    getInfo.data(req, res);
}
module.exports.postInfo = (route, req, res)=>{
    const postInfo = new route.app.models.PostInfoDAO();
    postInfo.data(req, res);
}