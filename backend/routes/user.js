    const express = require('express');
    const router = express.Router();
    const auth = require('./../middleware/auth');

    const userCtrl = require('./../controllers/user');

    // ROUTE POUR LES UTILISATEURS

    router.post('/signup', userCtrl.signup);
    router.post('/login', userCtrl.login);
    router.delete('/delete/:userId', auth, userCtrl.delete);


    module.exports = router;