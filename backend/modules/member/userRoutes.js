const userFunctions = require('./user');
const express = require('express');
const router = express.Router();


class UserRoutes {
    
    constructor(app){
        console.log("customer routes hit")
        router.post('/', userFunctions.getMember);
        router.post('/login', userFunctions.loginHandler)
        
        app.use('/api/v1/member', router)
    }
}

module.exports = UserRoutes;
