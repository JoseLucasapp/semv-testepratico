const GetInfoDAO = require('../models/GetInfoDAO')();
const PutInfoDAO = require('../models/PutInfoDAO')();
const PostInfoDAO = require('../models/PostInfoDAO')();
const DeleteInfoDAO = require('../models/DeleteInfoDAO')();

module.exports.getInfo = (route, req, res)=>{
    const getInfo = new GetInfoDAO;
    getInfo.data(req, res);
}
module.exports.getInfoWithFilter = (route, req, res)=>{
    const getInfoWithFilter = new GetInfoDAO;
    getInfoWithFilter.dataFilter(req, res);
}
module.exports.newClientPage = (route, req, res)=>{
    const newClientPage = new GetInfoDAO;
    newClientPage.newClientPage(req, res);
}
module.exports.editClientPage = (route, req, res)=>{
    const editClientPage = new GetInfoDAO;
    editClientPage.editClientPage(req, res);
}
module.exports.postInfo = (route, req, res)=>{
    const postInfo = new PostInfoDAO;
    postInfo.data(req, res);
}
module.exports.putInfo = (route, req, res)=>{
    const putInfo = new PutInfoDAO;
    putInfo.data(req, res);
}
module.exports.deleteInfo = (route, req, res)=>{
    const deleteInfo = new DeleteInfoDAO;
    deleteInfo.data(req, res);
}