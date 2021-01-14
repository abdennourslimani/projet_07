const bcrypt = require('bcrypt');
const User = require('./../models/user');
const jwt = require('jsonwebtoken');


// create user

exports.signup = (req, res) => {

    if (!req.body) {
        res.status(400).json({ message: "content can 't be empty !" })
    }
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            let user = {
                "name": req.body.name,
                "surname": req.body.surname,
                "email": req.body.email,
                "password": hash,
                "isAdmin": 0
            }
            User.create(user, (err, data) => {
                if (err)
                    return res.status(500).json({ message: 'user not create !' + err })
                else res.status(201).send(data);
            })
        }).catch(err => res.status(500).json({ message: 'there is an error :' + err }))
}

// login user

exports.login = (req, res, next) => {
    User.findByEmail(req.body.email, (err, user) => {
        if (err) {
            if (err.kind == 'not_found') {
                return res.status(404).send({ message: `user not found with ${req.body.email}` })
            } else {
                res.status(500).send({ message: 'error to find user by email' + req.body.email })
            }
        }
        bcrypt.compare(req.body.password, user.password)
            .then(valid => {
                if (!valid) {
                    return res.status(401).json({ error: 'password not true' });
                }
                res.status(200).json({
                    userId: user.id,
                    user: user,
                    token: jwt.sign({ userId: user.id },
                        'RANDOM_TOKEN_SECRET', { expiresIn: '24h' }
                    )
                })
            })
    });
}




// remove user byID

exports.delete = (req, res, next) => {
    User.removeById(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind == 'not_found') {
                return res.status(404).send({ message: 'user not found with' + err })
            } else {
                return res.status(500).send({ message: `error to find user by ${req.params.userId}` + err })
            }
        }
        res.status(200).send({ message: 'user remove with success' })


    });

};