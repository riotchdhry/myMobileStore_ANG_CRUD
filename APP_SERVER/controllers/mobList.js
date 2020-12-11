
var request = require('request');
const { response } = require('../../app');
var apiOptions = {
    server : 'http://localhost:3000'
}
const _renderHomepage = function(req, res, responseBody){
    res.render('list-display', {
        mobiles: responseBody
    });
};




const mobileList = function(req,res){
    const path = '/api/mobiles';
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {}
    };
    request(
        requestOptions,(err, response, body) => {
            _renderHomepage(req, res, body);
        }
    );
    
};

const _renderDetailPage = function(req, res, responseBody){
    res.render('details', {
        currentMobile: responseBody
    });
};

const mobileInfo = function(req, res){
    const path = `/api/mobiles/${req.params.mobileid}`;
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {}
    };
    request(requestOptions, (err, response, body) =>{
        _renderDetailPage(req, res, body);
    });
};

const _renderCreatePage = function (req,res){
    res.render('create', {
        title: "Create New Mobile"
    });
};

const addNewMobile = function(req, res){
    _renderCreatePage(req, res);
};

const doAddNewMobile = function(req, res){
    const path = '/api/mobiles';
    console.log(req.body);
    const postdata = {
        //check here if doesnt work ####
        name: req.body.name,
        type: req.body.type,
        brand: req.body.brand,
        reviews: req.body.reviews,
        price: req.body.price,
        
            ram: req.body.ram,
            storage: req.body.storage,
            display: req.body.display,
            camera: req.body.camera
        

        

    };
    const requestOptions = {
        url: apiOptions.server+path,
        method: 'POST',
        json: postdata
    };
    request(
        requestOptions, (err, response, body) => {
            if(response.statusCode === 201){
                res.redirect('/');
            }
            else{
                console.log("cant redirect")
            }
        }
    );
};



module.exports={
    mobileList, mobileInfo, doAddNewMobile, addNewMobile
};