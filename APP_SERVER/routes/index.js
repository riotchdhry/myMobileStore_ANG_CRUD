var express = require('express');
var router = express.Router();
//var ctrlMain = require('../controllers/main')
//var ctrlAbout = require('../controllers/about');
var ctrlmobList = require('../controllers/mobList')
//var ctrlDisp = require('../controllers/display')

router.get ('/', ctrlmobList.mobileList);
//router.get('/about', ctrlAbout.aboutpage);
//router.get('/list', ctrlmobList.mobileList);

router.get('/mobiles/:mobileid', ctrlmobList.mobileInfo);



router.route('/new')
    .get(ctrlmobList.addNewMobile)
    .post(ctrlmobList.doAddNewMobile);




module.exports = router;
