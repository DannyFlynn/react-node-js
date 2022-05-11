const express = require('express');
const router  = express.Router();

//function withing the routes from controllers directory
const {register, login} = require('../controllers/user')



router.post('/reg', register);

router.post('/login', login);





module.exports = router;