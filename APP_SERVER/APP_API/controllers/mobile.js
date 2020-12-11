var mongoose = require('mongoose');
const mobile = require('../../controllers/mobList');
const Mobile = mongoose.model('Mobile');

const getMobileList = function(req, res){
    console.log("this is get Mobiles");

    Mobile.find().exec(function(err, mobiledata){
        if(err){
            res.status(404)
            .json(err);
            return;
        }
        res
        .status(200)
        .json(mobiledata);
    });


};

const createMobile = function(req, res){
    console.log("ima in this API:",req.body);
    

    Mobile.create({
        //check here ####
        name: req.body.name,
        type: req.body.type,
        brand: req.body.brand,
        reviews: req.body.reviews,
        price: req.body.price,
        specifications: {
            ram: req.body.ram,
            storage: req.body.storage,
            display: req.body.display,
            camera: req.body.camera
        }

    }, function(err, mobiledata) {
        if(err){
            console.log("Error in passing" + err.message);
            res
            .status(400)
            .json(err);
        } else{
            res.status(201)
            .json(mobiledata);
        }
    });
};

const getSingleMobile = function(req, res){
    console.log("this is get single mobile");
    Mobile
        .findById(req.params.mobileid)
        .exec((err, mobiledata) => {
            res
            .status(200)
            .json(mobiledata);
        });
};

const updateMobile = function(req, res){
    console.log("this is update mobiles" +req.body.name);
    if(!req.params.mobileid){
        res
        .status(404)
        .json({
            "message" : "not found, mobileid is required"
        });
        return;

    }
    Mobile.findById(req.params.mobileid)
    .exec((err, mobiledata) =>{
        if(!mobiledata){
            res
            .status(404)
            .json({"message": "mobileid not found"
        });
        return;

        } else if(err){
            res
            .status(400)
            .json(err);
            return;
        }

        //review this part, if not works....##
        mobiledata.name = req.body.name;
        mobiledata.type = req.body.type;
        mobiledata.brand = req.body.brand;
        mobiledata.review = req.body.reviews;
        mobiledata.price = req.body.price;
        mobiledata.specifications.ram = req.body.ram;
        mobiledata.specifications.storage = req.body.storage;
        mobiledata.specifications.display = req.body.display;
        mobiledata.specifications.camera = req.body.camera;

        mobiledata.save((err,mobiledata) =>{
        if(err){
            console.log(err.message);
            res
            .status(404)
            .json(err);
        } else{
            res
            .status(200)
            .json(mobiledata);
        }
    });
});
};

const deleteMobile  = function(req, res){
    const mobileid = req.params.mobileid;

    //console.log("this is delete mobiles" + mobileid);

    if(mobileid){
        Mobile
        .findByIdAndRemove(mobileid)
        .exec((err, mobiledata) =>{
            if(err){
                res
                .status(404)
                .json(err);
                return;
            }
            res
            .status(204)
            .json(null);
        });
    } else{
        res
        .status(404)
        .json({"message": "No MobileID"});
    }};




module.exports={
    getMobileList,
    createMobile,
    updateMobile,
    getSingleMobile,
    deleteMobile

};
