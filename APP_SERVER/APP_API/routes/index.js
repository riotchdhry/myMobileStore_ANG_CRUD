var express = require('express');
var router = express.Router();

const ctrlMobile = require('../controllers/mobile')

router
.route('/mobiles')
.get(ctrlMobile.getMobileList)
.post(ctrlMobile.createMobile);

router
.route('/mobiles/:mobileid')
.get(ctrlMobile.getSingleMobile)
.put(ctrlMobile.updateMobile)
.delete(ctrlMobile.deleteMobile);


module.exports = router;
